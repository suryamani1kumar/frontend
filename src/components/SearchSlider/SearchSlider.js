import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './search.module.scss';
import SearchBar from './SearchBar';
const slides = [
  {
    city: 'Paris',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
  },
  {
    city: 'Singapore',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
  },
  {
    city: 'Prague',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
  },
  {
    city: 'Amsterdam',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
  },
  {
    city: 'Moscow',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
  },
];
const SearchSlider = () => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;
  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);
  useEffect(() => {
    const autoChange = () => {
      changeSlides(1);
    };
    const changeTO = setTimeout(autoChange, AUTOCHANGE_TIME);
    return () => clearTimeout(changeTO);
  }, [activeSlide]);
  useEffect(() => {
    setActiveSlide(0);
    setSliderReady(true);
  }, []);
  const changeSlides = (change) => {
    const length = slides.length;
    const newPrevSlide = activeSlide;
    let newActiveSlide = activeSlide + change;
    if (newActiveSlide < 0) newActiveSlide = length - 1;
    if (newActiveSlide >= length) newActiveSlide = 0;
    setActiveSlide(newActiveSlide);
    setPrevSlide(newPrevSlide);
  };
  return (
    <div className={styles.searchSlidercontainer}>
      <SearchBar />
      <div
        className={classNames(styles.slider, { [styles.sready]: sliderReady })}
      >
        <div className={styles.slider_slides}>
          {slides.map((slide, index) => (
            <div
              className={classNames(styles.sliderslide, {
                [styles.s_active]: activeSlide === index,
                [styles.s_prev]: prevSlide === index,
              })}
              key={slide.city}
            >
              <div className={styles.sliderslide_content}>
                {' '}
                <h2 className={styles.sliderslide_heading}>
                  {slide.city.split('').map((l, i) => (
                    <span key={i}>{l}</span>
                  ))}{' '}
                </h2>{' '}
              </div>
              <div className={styles.sliderslide_parts}>
                {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                  <div className={styles.sliderslide_part} key={i}>
                    {' '}
                    <div
                      className={styles.sliderslide_part_inner}
                      style={{ backgroundImage: `url(${slide.img})` }}
                    />{' '}
                  </div>
                ))}{' '}
              </div>{' '}
            </div>
          ))}{' '}
        </div>
        {/* <div
          className={styles.slidercontrol}
          onClick={() => changeSlides(-1)}
        />{' '}
        <div
          className={classNames(
            styles.slidercontrol,
            styles.slider_control__right
          )}
          onClick={() => changeSlides(1)}
        /> */}
      </div>
    </div>
  );
};

export default SearchSlider;
