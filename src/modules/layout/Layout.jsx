import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { color } from '@mui/system';
import './Layout.css';
import { Context } from '../../context';

const Layout = () => {

  const { state } = useContext(Context);
  const handleNavigate = (href) => {
    window.location.replace(href);
  };

  const count = (state?.cart.length > 0) ? state.cart.length : null;
  return (
      <div className='container'>
        <div className='content'>
            <div className='header'>
            <div className='logo_guitar'></div>
            <div className='logo'>
              GUITAR STAFF
            </div> 
            <div className='logo_text'> 
              <p className='logo_text_one'>Лучшие гитары</p>
              <p className='logo_text_two'>для новичков и профессионалов</p>
            </div>
            <div className='logo_text'>
            </div>
            <div className='logo_img'> 
            </div>
        </div>
        <div className='devider'></div>
        <div className='navigation'>
            <div className='nav_item'>
              <Link to="" style={{ textDecoration: 'none', color: '#000000' }}>Главная</Link>
            </div>
            <div className='nav_item nav_item_guitar'>
              <Link style={{ textDecoration: 'none', color: '#000000' }}>Гитары</Link>
              <div className='list'>
                <div className='nav_item'>
                  <Link to="/bass" style={{ textDecoration: 'none', color: '#000000' }}>Басс</Link>
                </div>
                <div className='nav_item'>
                  <Link to="/electric" style={{ textDecoration: 'none', color: '#000000' }}>Электро</Link>
                </div>
                <div className='nav_item'>
                  <Link to="/acoustic" style={{ textDecoration: 'none', color: '#000000' }}>Акустика</Link>
                </div>
              </div>
            </div>
            
            <div className='nav_item'>
              <Link to="/contact" style={{ textDecoration: 'none', color: '#000000' }}>Связаться с нами</Link>
            </div>
            <div className='nav_item'>
              <Link to="/cart" style={{ textDecoration: 'none', color: '#000000' }}>
                {
                  !count ? 'Корзина' : `Корзина (${count})` 
                }
                
              </Link>  
            </div>
        </div>
            <div className='content_wrapper'>
              <div className='content_container'>
                  <Outlet />
              </div>
            </div>
            <div className='devider'></div> 
            <div className='footer'> 
                <div className='footer_button vk' onClick={() => handleNavigate('https://vk.com/feed')}></div>
                <div className='footer_button skype' onClick={() => handleNavigate('https://www.skype.com/ru/')}></div>
                <div className='footer_button tg' onClick={() => handleNavigate('https://web.telegram.org/k/')}></div>
            </div>
        </div>
      </div>
    );
};

export default Layout;