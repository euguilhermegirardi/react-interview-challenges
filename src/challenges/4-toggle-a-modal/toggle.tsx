import { ReactNode, useState, useRef, useEffect } from 'react'
import './styles.css'
import Email from '../../assets/email.png'
import Logo from '../../assets/one-piece.png'
import Profile from '../../assets/profile.png'
import Samurai from '../../assets/samurai.png'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ToggleAModal = () => {
  const [toggleModal, setToggleModal] = useState(false)

  const handleToggleModal = () => { setToggleModal(!toggleModal) }

  const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, onClose]);

    return (
      <div className={`modal ${isOpen ? 'open' : 'closed'}`} ref={modalRef}>
        {children}
      </div>
    );
  }

  return (
    <>
      <main
        className='toggle__container'
        style={{
          filter: toggleModal ? 'blur(8px)' : 'unset'
        }}
      >
        <nav className='toggle__navbar'>
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

        <div>
          <h1 style={{ margin: '0' }}>Toggle a modal test.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quaerat.</p>
        </div>

        <div className='toggle__image-container'>
          <img className='toggle__image' src={Samurai} alt="samurai.png" />
        </div>

        <button
          className='toggle__button'
          disabled={toggleModal}
          onClick={handleToggleModal}
        >
          <img src={Email} alt="email.png" />
        </button>
      </main>

      <Modal
        isOpen={toggleModal}
        onClose={() => setToggleModal(false)}
      >
        <div className='toggle__modal'>
          <h3 className='toggle__modal-title'>Contact us via email!</h3>
          <p className='toggle__modal-subtitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti cum non illum facilis quaerat unde rerum, similique ducimus. Nemo, deleniti eum inventore expedita repellendus illum.</p>

          <div className='toggle__modal-buttons'>
            <button onClick={handleToggleModal}>Cancel</button>
            <button onClick={() => alert('should open your email :)')}>Open email</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ToggleAModal