import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import ExploreDetail from './ExploreDetail';
import explore1 from '../../../images/explore1.jpg';
import explore2 from '../../../images/explore2.jpg';
import explore3 from '../../../images/explore3.jpg';
import explore4 from '../../../images/explore4.jpg';
import explore5 from '../../../images/explore5.jpg';
import explore6 from '../../../images/explore6.jpg';
import './Explore.css';

function Explore() {
    return (
        <div>
        <h2 className='explore'>Explore Bangladesh</h2>
        <p className='explore-p'>These popular destination have a lot to offer</p>
            <div className='container py-4 px-4 justify-content-center'>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
            >
            <SwiperSlide>
                <ExploreDetail data={{imgSrc: explore1, price: '$10', title: 'Juflong', properties: '60 properties'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ExploreDetail data={{imgSrc: explore2, price: '$10', title: "cox's bazar", properties: '60 properties'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ExploreDetail data={{imgSrc: explore6, price: '$10', title: 'Paharpur', properties: '60 properties'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ExploreDetail data={{imgSrc: explore4, price: '$10', title: 'Sundorbon', properties: '60 properties'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ExploreDetail data={{imgSrc: explore5, price: '$10', title: 'Mohastangor', properties: '60 properties'}} />
            </SwiperSlide>
            <SwiperSlide>
                <ExploreDetail data={{imgSrc: explore3, price: '$10', title: 'Map', properties: '60 properties'}} />
            </SwiperSlide>
            </Swiper>
        </div>
        </div>
    )
}

export default Explore;