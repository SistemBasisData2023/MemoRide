import React from 'react'
import Slider from 'react-slick'
import ava1 from '/Users/tunjung/coding/MemoRide-SBD/frontend/src/assets/images/ava1.png'
import ava2 from '/Users/tunjung/coding/MemoRide-SBD/frontend/src/assets/images/ava2.png'

const Testimonial = () => {
    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

  return <Slider {... settings}>
    <div className='testi py-4 px-3'>
        <div className='"tweet-container'>
            <p>Lorem ipsum dolor sit amet consectectur adipisicing elit. Minus sit,
            explicabo provident hic distinctio molestias voluptates.</p>

            <div className='twwet-author d-flex align-items-center gap-4 mt-3'>
                <img src={ava1} className='avatar w-25 h-25' alt=""/>
                <div className='author-info'>
                    <h6 className='author-name mb-0 mt-3'>John Doe</h6>
                    <p className='author-role'>User</p>
                </div>
            </div>
        </div>
    </div>
    <div className='testi py-4 px-3'>
        <div className='tweet-container'>
            <p>Lorem ipsum dolor sit amet consectectur adipisicing elit. Minus sit, 
            explicabo provident hic distinctio molestias voluptates.</p>

            <div className='tweet-author d-flex align-items-center gap-4 mt-3'>
                <img src={ava2} className='avatar w-25 h-25' alt=""/>
                <div className='author-info'>
                    <h6 className='author-name mb-0 mt-3'>Jane Doe</h6>
                    <p className='author-role'>User</p>
                </div>
            </div>
        </div>
    </div>
    <div className='testi py-4 px-3'>
        <div className='"tweet-container'>
            <p>Lorem ipsum dolor sit amet consectectur adipisicing elit. Minus sit,
            explicabo provident hic distinctio molestias voluptates.</p>

            <div className='twwet-author d-flex align-items-center gap-4 mt-3'>
                <img src={ava1} className='avatar w-25 h-25' alt=""/>
                <div className='author-info'>
                    <h6 className='author-name mb-0 mt-3'>John Doe2</h6>
                    <p className='author-role'>User</p>
                </div>
            </div>
        </div>
    </div>
    <div className='testi py-4 px-3'>
        <div className='tweet-container'>
            <p>Lorem ipsum dolor sit amet consectectur adipisicing elit. Minus sit, 
            explicabo provident hic distinctio molestias voluptates.</p>

            <div className='tweet-author d-flex align-items-center gap-4 mt-3'>
                <img src={ava2} className='avatar w-25 h-25' alt=""/>
                <div className='author-info'>
                    <h6 className='author-name mb-0 mt-3'>Jane Doe</h6>
                    <p className='author-role'>User</p>
                </div>
            </div>
        </div>
    </div>
  </Slider>
}

export default Testimonial
