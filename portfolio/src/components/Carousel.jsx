import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar } from 'swiper/modules'
import PropTypes from 'prop-types'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'

function Carousel(props) {
  return (
    <>
      <Swiper
        modules={[Scrollbar, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}

        //onSlideChange={() => console.log('slide change')}
        //onSwiper={(swiper) => console.log(swiper)}
      >
        {props.imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <img className='select-none' src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
Carousel.propTypes = {
  imgs: PropTypes.array,
}
export default Carousel
