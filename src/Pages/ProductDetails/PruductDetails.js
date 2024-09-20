useEffect(() => {

var swiper_thumbs = new Swiper(".nav-for-slider", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
});
var swiper = new Swiper(".main-slide-carousel", {
  slidesPerView: 1,
  thumbs: {
    swiper: swiper_thumbs,
  },
});
})

import React from 'react'

function PruductDetails() {
  return (
    <div>PruductDetails</div>
  )
}

export default PruductDetails