import './styles.css';
import Logo from '../../assets/one-piece.png';
import Profile from '../../assets/profile.png';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__image-container'>
        <img className='nav__image nav__image-logo' src={Logo} alt="logo" />
      </div>

      <div className='nav__navigation-container'>
        <button className='nav__navigation-item'>Home</button>
        <button className='nav__navigation-item'>Discover</button>
        <button className='nav__navigation-item'>Technologies</button>
        <button className='nav__navigation-item'>Contact Us</button>
      </div>

      <div className='nav__image-container'>
        <img className='nav__image nav__image-profile' src={Profile} alt="profile" />
      </div>
    </nav>
  );
};

export default Navbar;
