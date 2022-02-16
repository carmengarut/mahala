import { useEffect, lazy, Suspense } from 'react'
import './css/landingPage.css'
import logo from './public/logo-mahala.png'
import image1 from './public/image1.svg'
import image2 from './public/image2.svg'
import image3 from './public/image3.svg'

import LazyLoad from 'react-lazyload';

import { useTranslation } from 'react-i18next'
import ReactGA from 'react-ga'

const MockupImg = lazy(() => import('./components/MockupsImg'))
const CarouselMobile = lazy(() => import('./components/Carousel'))

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
        </h1>
        <h2 className='lp-h2'>{t('landing_page.h2')}</h2>
        <div className='lp-buttons-container'>
          <a className='lp-button-left' href={t('landing_page.typeform_link')} target="_blank" rel='noreferrer'>{t('landing_page.button_1')}</a>  
          <a className='lp-button-right' href='https://meetings-eu1.hubspot.com/carmen-garcia-utrilla' target="_blank" rel='noreferrer'>{t('landing_page.button_2')}</a>
        </div>
      </div>
      <div className='lp-subtitle'>{t('landing_page.h5')}</div>
      <div className='lp-box1-container'>
        <LazyLoad height={207}>
          <img
            alt=''
            src={image1}
            className='lp-box-image'
          />
        </LazyLoad>
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
        <LazyLoad height={207}>
          <img
            alt=''
            src={image2}
            className='lp-box-image'
          />
        </LazyLoad>
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
        <LazyLoad height={207}>
          <img
            alt=''
            src={image3}
            className='lp-box-image'
          />
        </LazyLoad>
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
        <Suspense fallback={<div><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}>
          <div className='lp-mockups-image'>
            <MockupImg />
            </div>
        
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <CarouselMobile />
        </Suspense>
      </div>
      
    
      <footer>
        <div className='FooterBlock'>
          <div className='FooterBlock'>
            <LazyLoad height={30}>
              <img
                alt=''
                src={logo}
                width='30px'
                height='30px' 
              />
            </LazyLoad> 
            {" "}
            Mahala
          </div>

          <div className='ContactFooter'>{t('footer.contact_details')}</div>
        </div>

      </footer>
    </div>

  )
}

export default LandingPage
