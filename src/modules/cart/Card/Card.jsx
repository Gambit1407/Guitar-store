import { useContext } from 'react';
import Delete from '@mui/icons-material/Delete';
import RemoveOutlined from '@mui/icons-material/RemoveOutlined';
import AddOutlined from '@mui/icons-material/AddOutlined';
import { Context } from '../../../context';
import './Card.css';

const Card = (props) => {
    const { price, imgClass, count, id } = props;
    const { dispatch } = useContext(Context);
    const handleAddCount = () => {
        dispatch({ type: 'AddCount', payload: id });
    };

    const handleRemoveCount = () => {
        if (count > 1) {
            dispatch({ type: 'RemoveCount', payload: id });
        } else {
            console.log('Error')
        }
    };

    const handleRemoveProduct = () => {
        dispatch({ type: 'DeleteProduct', payload: id });
    };

    return (
        <>
            <div className='product-card'>
                <div className={`product-card-photo ${imgClass}`}></div>
                <div className='product-card-description'>
                    <div className='product-price'> <b>{`${price} р.`}</b></div>
                    <div className='product-counter'>
                        <div className='button-count add'>
                            <AddOutlined onClick={handleAddCount} />
                        </div>
                        <div className='button-count counter'><b>{count}</b></div>
                        <div className='button-count remove'>
                            <RemoveOutlined onClick={handleRemoveCount} />
                        </div>
                    </div>
                    <div className='button-remove' onClick={handleRemoveProduct} > <Delete /></div>
                </div>
            </div>
        </>
    );
};

export default Card;