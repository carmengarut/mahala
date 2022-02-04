import { useHistory } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import '../css/header.css'
import logo from '../public/logo.svg'
import spainFlag from '../public/spain-flag.svg'
import ukFlag from '../public/uk-flag.svg'

import { useTranslation } from 'react-i18next'

export default function Header () {
  const [t, i18n] = useTranslation('global')
  const history = useHistory()

  const changeLanguageEn = () => {
    i18n.changeLanguage('en')
    window.localStorage.setItem(
      'language', 'en'
    )
  }

  const changeLanguageEs = () => {
    i18n.changeLanguage('es')
    window.localStorage.setItem(
      'language', 'es'
    )
  }

  return (
    <Navbar collapseOnSelect expand='lg' sticky='top' className='h-navbar'>
      <Container>
        <Navbar.Brand href='' className='h-brand-name' onClick={() => { history.push('/') }}>
          <img
            alt=''
            src={logo}
            width='30'
            height='30'
            className='h-brand-logo'
          />{' '}
          {t('header_web.brand_name')}
        </Navbar.Brand>
        <div className='HeaderRightBlock'>
          <div className='FlagBlock'>
            <img
              alt=''
              src={i18n.language === 'es'
                ? spainFlag
                : ukFlag}
              width='30'
              height='30'
            />
            <div className='FlagDropdown'>
              <li onClick={changeLanguageEn}>
                <img
                  alt=''
                  src={ukFlag}
                  width='30'
                  height='30'
                  className='Flag'
                /> {' '} {' '}
                {t('header_web.en')}
              </li>
              <li className='LastLanguage' onClick={changeLanguageEs}>
                <img
                  alt=''
                  src={spainFlag}
                  width='30'
                  height='30'
                  className='Flag'
                />{' '} {' '}
                {t('header_web.es')}
              </li>
            </div>
          </div>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>

            <div className='ActionButtons'>
              <a className='SignUpButton' href='https://e4tqbvnngek.typeform.com/to/VXp6EY1e' target="_blank" rel='noreferrer'>
                {t('header_web.sign_up')}
              </a>
              <a className='SignInButton' href='https://meetings-eu1.hubspot.com/carmen-garcia-utrilla' target="_blank" rel='noreferrer'>
                {t('header_web.sign_in')}
              </a>
            </div>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}
