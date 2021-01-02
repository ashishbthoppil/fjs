import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel2.jpg',
        altText: 'Shipping & Cargo Clearing',
        caption: 'Shipping & Cargo Clearing',
        key: '1'
      },
      {
        src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel1.jpg',
        altText: 'General Warehousing',
        caption: 'General Warehousing',
        key: '2'
      },
      {
        src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel3.jpg',
        altText: 'Freight Forwarding & Logistics',
        caption: 'Freight Forwarding & Logistics',
        key: '3'
      },
      {
        src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel4.jpg',
        altText: 'Cargo Clearing',
        caption: 'Cargo Clearing',
        key: '4'
      },
      {
        src: 'https://raw.githubusercontent.com/ashishbthoppil/fjs/main/public/assets/images/carousel5.jpg',
        altText: 'Transportation',
        caption: 'Transportation',
        key: '5'
      }
];

const FJSCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default FJSCarousel;