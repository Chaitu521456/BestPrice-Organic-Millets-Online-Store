
import {Link} from 'react-router-dom';
import './Header.css';

function Header(){

    return(
        <div className="border-3  bg-dark ">
            
            <h1 className=" fs-1 text-center text-warning ">BEST PRICE ORGANIC MILLETS AND CEREALS </h1>
      
            <ul className="nav  justify-content-center text- fs-3">
              <li className='nav-item'>
                    <Link  to="" className='nav-link text-white '>Home</Link>
              </li> 
              <li className='nav-item'>
                    <Link to="register" className='nav-link text-white '>Sign up</Link>
              </li>
              <li className='nav-item'>
                    <Link to="login" className='nav-link text-white '>Login</Link>
              </li>
              <li className='nav-item'>
                    <Link to="cart" className='nav-link text-white '>Cart</Link>
              </li>
              <li className='nav-item'>
                    <Link to="about" className='nav-link text-white '>About</Link>
              </li>
              <li className='nav-item'>
                    <Link to="feedback" className='nav-link text-white'>Feedback</Link>
              </li>
              <li className='nav-item'>
                    <Link to="faqs" className='nav-link text-white '>FAQ's</Link>
              </li>
            </ul>
        </div>
    )
}

export default Header;