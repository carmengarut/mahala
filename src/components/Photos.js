import LazyLoad from 'react-lazyload';

import etrust1 from '../public/etrust1.svg'
import etrust2 from '../public/etrust2.svg'
import etrust3 from '../public/etrust3.svg'
import kampei1 from '../public/kampei1.svg'
import kampei2 from '../public/kampei2.svg'
import kampei3 from '../public/kampei3.svg'

import '../css/landingPage.css'

export default function PhotosMobile () {
    return (
    <div className='lp-carousel'>
          <LazyLoad>
            <img
              className="d-block w-100 lp-carousel-item"
              src={etrust1}
              alt="First slide"
            />
          </LazyLoad>
            <LazyLoad>
                <img
                className="d-block w-100 lp-carousel-item"
                src={etrust2}
                alt="Second slide"
                />
            </LazyLoad>
            <LazyLoad>
                <img
                className="d-block w-100 lp-carousel-item"
                src={etrust3}
                alt="Third slide"   
                />
            </LazyLoad>
            <LazyLoad>
                <img
                className="d-block w-100 lp-carousel-item"
                src={kampei1}
                alt="Fourth slide"
                />
            </LazyLoad>
          <LazyLoad>
            <img
              className="d-block w-100 lp-carousel-item"
              src={kampei2}
              alt="Fifth slide"
            />
           </LazyLoad>
          <LazyLoad>
            <img
              className="d-block w-100 lp-carousel-item"
              src={kampei3}
              alt="Sixth slide"
            />
            </LazyLoad>
        </div>
    )
}