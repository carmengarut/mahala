
import { Navbar, Container } from 'react-bootstrap'
import '../css/header.css'
import logo from '../public/logo.svg'
import spainFlag from '../public/spain-flag.svg'
import ukFlag from '../public/uk-flag.svg'



export default function Hola () {
 
  return (
    <Navbar collapseOnSelect expand='lg' sticky='top' className='Navbar'>
      <Container>
        <Navbar.Brand href='' className='BrandName' onClick={() => {  }}>
          <img
            alt=''
            src={logo}
            width='45'
            height='45'
            className='d-inline-block align-center'
          />{' '}
          Build your startup.
        </Navbar.Brand>
        <div className='HeaderRightBlock'>
          
        
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>

            <div className='ActionButtons'>
              <button className='SignUpButton' onClick={() => {}}>
                Sign Up
              </button>
              <button className='SignInButton' onClick={() => {}}>
                Sign In
              </button>
            </div>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}
