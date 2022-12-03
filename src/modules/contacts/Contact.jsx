import { useContext } from 'react';
import { guitars } from '../../config';
import Button from '@mui/material/Button';
import { Context } from '../../context';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (event) => {
        debugger;
        console.log(`Имя - ${event.target[0].value}`);
        console.log(`Сообщение - ${event.target[2].value}`);
        console.log(`Email - ${event.target[1].value}`);
        event.preventDefault();
    };
    return (
      <div className='container-contact'>
        <div className='callback-form'>
            <form className="form" onSubmit={handleSubmit}>
            <div className="title">Свяжитесь с нами</div>
            {/* <div class="subtitle">Let's create your account!</div> */}
            <div className="input-container ic1">
                <input id="firstname" className="input" type="text" placeholder=" " />
                <div className="cut"></div>
                <label for="firstname" className="placeholder">Имя</label>
            </div>
            <div class="input-container ic2">
                <input id="email" className="input" type="text" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" className="placeholder">Email</label>
            </div>
            <div className="input-container ic2">
                <textarea name="Сообщение" id="lastname" rows="4" cols="33" placeholder='Сообщение' type="text"></textarea>
            </div>
          

            
            <button type="submit" className="submit">Отправить</button>
        </form>
        </div>
        <div>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A996d110941dccdb8348adbf44709f4f0502628c52054b9c98a6abccf4b24d942&amp;source=constructor" width="500" height="500" frameborder="0"></iframe>
        </div>
      </div>
    );
};

export default Contact;