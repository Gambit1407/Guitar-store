import './Main.css';

const Main = () => {
    return (
      <div className='main_container'>
        {/* second card */}
        <div className='card'>
          <div className='card_text'>
            <div className='card_text_title'> 
              Наша миссия проста!
            </div>
            <div className='card_text_description'> 
              Наша главная цель не продать инструмент,
              а отдать его в хорошие руки. Именно поэтому
              мы всегда готовы пойти на встречу каждому,
              кто хочет по настоящему ощутить себя 
              музыкантом.
            </div>
          </div>
          <div className='card_photo'></div>
        </div>
        <div className='card_two'>
          <div className='card_photo_left'></div>
          <div className='card_text'>
            <div className='card_text_title'> 
              Наши приемущества
            </div>
            <div className='card_text_description'> 
              При покупке гитары вы получаете:<br/>
               -Бесплатную отстройку гитары <br/> -Набор медиаторов <br/> -Дополнительный комплект струн
            </div>
          </div>
          
        </div>
        {/* third card */}
        <div className='card'>
          <div className='card_text'>
            <div className='card_text_title'> 
              О нас
            </div>
            <div className='card_text_description'> 
              В нашей команде работают профессиональные
              музыканты, которые помогут подобрать лучший
              инструмент, в зависимости от ваших вкусов и
              предпочтений. Свяжитесь с нами и мы все 
              сделаем за вас.
            </div>
          </div>
          <div className='card_photo_therd'></div>
        </div>
      </div>
    );
};

export default Main;