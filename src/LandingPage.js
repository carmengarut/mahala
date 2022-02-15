import { useEffect} from 'react'
import './css/landingPage.css'
import logo from './public/logo-mahala.png'
import image1 from './public/image1.svg'
import image2 from './public/image2.svg'
import image3 from './public/image3.svg'
import mockups from './public/mockups1.svg'
import etrust1 from './public/etrust1.svg'
import etrust2 from './public/etrust2.svg'
import etrust3 from './public/etrust3.svg'
import kampei1 from './public/kampei1.svg'
import kampei2 from './public/kampei2.svg'
import kampei3 from './public/kampei3.svg'
import { useTranslation } from 'react-i18next'
import ReactGA from 'react-ga'
import Carousel from 'react-bootstrap/Carousel'

const LandingPage = () => {
  const { t } = useTranslation('global')
  useEffect(() => {
    ReactGA.initialize('G-EPHPXKYDBS')
  }, [])

  
  return (
    <div className='lp-container'>
      <div className='lp-heading-container'>
        <h1 className='lp-h1'>
          {t('landing_page.h1-1')}
          <div className='lp-h1-gradient'>
            {t('landing_page.h1-2')}
          </div>
          {t('landing_page.h1-3')}
        </h1>
        <h2 className='lp-h2'>{t('landing_page.h2')}</h2>
        <div className='lp-buttons-container'>
          <a className='lp-button-left' href={t('landing_page.typeform_link')} target="_blank" rel='noreferrer'>{t('landing_page.button_1')}</a>  
          <a className='lp-button-right' href='https://meetings-eu1.hubspot.com/carmen-garcia-utrilla' target="_blank" rel='noreferrer'>{t('landing_page.button_2')}</a>
        </div>
      </div>
      <div className='lp-subtitle'>{t('landing_page.h5')}</div>
      <div className='lp-box1-container'>
        <img
          alt=''
          src={image1}
          width='70px'
          height='207px'
          className='lp-box-image'
        />
        <div className='lp-box'>
         <h4 className='lp-box-title-gradient'>{t('landing_page.step_1_h4')}</h4>
         <h3 className='lp-box-h3'>
          {t('landing_page.step_1_h3')}
         </h3>
         <div className='lp-box-text'>
           {t('landing_page.step_1_box_text')}
         </div>
       </div>
      </div>
      <div className='lp-box2-container'>
        <img
          alt=''
          src={image2}
          width='70px'
          height='207px'
          className='lp-box-image'
        />
        <div className='lp-box'>
         <h4 className='lp-box-title-gradient'>{t('landing_page.step_2_h4')}</h4>
         <h3 className='lp-box-h3'>
          {t('landing_page.step_2_h3')}
         </h3>
         <div className='lp-box-text'>
           <p>
            {t('landing_page.step_2_box_text_1')}
           </p>
           <p>
            {t('landing_page.step_2_box_text_2')}
           </p>
           <p>
            {t('landing_page.step_2_box_text_3')}
           </p>
           <p>
            {t('landing_page.step_2_box_text_4')}
           </p>
           <p>
            {t('landing_page.step_2_box_text_5')}
           </p>
         </div>
       </div>
      </div><div className='lp-box3-container'>
        <img
          alt=''
          src={image3}
          width='70px'
          height='207px'
          className='lp-box-image'
        />
        <div className='lp-box'>
         <h4 className='lp-box-title-gradient'>{t('landing_page.step_3_h4')}</h4>
         <h3 className='lp-box-h3'>
          {t('landing_page.step_3_h3')}
         </h3>
         <div className='lp-box-text'>
           {t('landing_page.step_3_box_text')}
         </div>
       </div>
      </div>
      <div className='lp-section-container'>
        <div className='lp-section-h3'> 
          {t('landing_page.other_products')}
        </div>
        <img
          alt=''
          src={mockups}
          width='auto'
          height='1738px'
          className='lp-mockups-image'
        />
        <Carousel variant='dark' className='lp-carousel'>
          <Carousel.Item>
            <img
              className="d-block w-100 lp-carousel-item"
              src={etrust1}
              alt="First slide"
        
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 lp-carousel-item"
              src={etrust2}
              alt="Second slide"
            
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 lp-carousel-item"
              src={etrust3}
              alt="Third slide"
           
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 lp-carousel-item"
              src={kampei1}
              alt="Fourth slide"
        
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 lp-carousel-item"
              src={kampei2}
              alt="Fifth slide"
            
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 lp-carousel-item"
              src={kampei3}
              alt="Sixth slide"
           
            />
          </Carousel.Item>
        </Carousel>
      </div>
      
    
      <footer>
        <div className='FooterBlock'>
          <div>
            <img
              alt=''
              src={logo}
              width='30px'
              height='30px'
            /> {" "}
            Mahala
          </div>

          <div className='ContactFooter'>{t('footer.contact_details')}</div>
        </div>

      </footer>
    </div>

  )
}

export default LandingPage
