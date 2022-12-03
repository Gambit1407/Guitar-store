import { useContext } from 'react';
import { guitars } from '../../config';
import Button from '@mui/material/Button';
import { Context } from '../../context';
import { useParams } from 'react-router-dom';
import './Guitar.css';

const Guitar = () => {
    let { giutarId } = useParams();
    const { state, dispatch } = useContext(Context);

    const guitar = state.guitars.find(guitar => guitar.id === Number(giutarId));
    const availableInStock = guitar.availableInStock ? 'На складе' : 'Нет в наличии';
    const condition = guitar.condition === 'new' ? 'Новая' : 'Уцененный продукт';
    return (
        <div className='guitar-container'>
            <div className={`guitar-photo-card ${guitar?.img}`}></div>
            <p className='guitar-name-card'>{guitar?.name}</p>
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
        </div>
    );
};

export default Guitar;