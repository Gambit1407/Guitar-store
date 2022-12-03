
import { useContext } from 'react';
import { guitars } from '../../config';
import Button from '@mui/material/Button';
import { Context } from '../../context';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import './BassGuitar.css';

const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 22,
    fontWeight: 'bold',
    padding: '6px 12px',
    color: 'black !important',
    lineHeight: 1.5,
    backgroundColor: 'white',
    borderColor: '#00000',
    borderRadius: '20px',
    border: '4px solid #000000',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#000000',
      borderColor: '#00000',
      borderRadius: '20px',
      border: '4px solid #000000',
      boxShadow: 'none',
      color: 'white !important',
    }
});


const BassGuitar = () => {
    const bassGuitar = guitars.filter(guitar => guitar.type === 'bass');
    const { state, dispatch } = useContext(Context);
    const navigate = useNavigate();

    const handleToGuitare = (id) => {
        navigate(`/guitar/${id}`, { replace: true});
    };

    const handleBuy = (event, guitar) => {
        dispatch({ 
            type: 'BuyGuitar', 
            payload: {...guitar}
        });
    };

    return (
      <div className='container'>
        <div className='row'>
            <div className='card-tile'>
                <div className='card-title-bass'>
                </div>
                <div className='card_text-bass'>
                    Бас - гитары
                </div>
            </div>
        </div>
        <div className='row-guitars'>
            {
                 bassGuitar.map((guitar, index) => {
                    const availableInStock = guitar.availableInStock ? 'На складе' : 'Нет в наличии';
                    const condition = guitar.condition === 'new' ? 'Новая' : 'Уцененный продукт';
                    return (
                        <div key={index} className='mini-card' >
                            <div className={`guitar-photo ${guitar.img}`}onClick={() => handleToGuitare(guitar.id)}> </div>
                            <div className='guitar-description'>
                                <div className='price'>
                                    <span><b>Цена:</b></span><span><b>{` ${guitar.price} руб.`}</b></span>
                                </div>
                                <div className='condition'>
                                    <span><b>Состояние:</b></span><span><b>{` ${condition}`}</b></span>
                                </div>
                                <div>
                                    <span><b>Наличие:</b></span><span><b>{` ${availableInStock}`}</b></span>
                                </div>
                            </div>
                            <div className='button_buy_wrapp'>
                                <div className='button_buy'>
                                    <CustomButton 
                                        variant="contained" 
                                        fullWidth color="error"
                                        onClick={(event) => {
                                            handleBuy(event, guitar);
                                            event.stopPropagation();
                                            event.preventDefault();
                                        }}
                                    >
                                        Заказать
                                    </CustomButton>
                                </div>
                            </div>
                        </div>
                    )
                 })
            }
           
        </div>
      </div>
    );
};

export default BassGuitar;