import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';

/* Styles */
import './WithScrollbar.styles.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class WithScrollbar extends Component {
  state = { additionalTransform: 0 };
  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        // We don't over-slide
        const maxTranslateX = Math.round(
          carouselItemWidth * (this.Carousel.state.totalItems - this.Carousel.state.slidesToShow) + 150
        );
        // Calculate the unit of transform for the slider
        value = maxTranslateX / 100;
      }
      const { transform } = carouselState;

      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth * (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransform === 150 ? 0 : 150)) /
              value
            }
            onChange={(e) => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (e.target.value === 0 && this.state.additionalTransform === 150) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransform: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide,
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
      <Carousel
        ssr={false}
        ref={(el) => (this.Carousel = el)}
        partialVisbile={false}
        customButtonGroup={<CustomSlider />}
        itemClass="slider-image-item"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransform={-this.state.additionalTransform}
        beforeChange={(nextSlide) => {
          if (nextSlide !== 0 && this.state.additionalTransform !== 150) {
            this.setState({ additionalTransform: 150 });
          }
          if (nextSlide === 0 && this.state.additionalTransform === 150) {
            this.setState({ additionalTransform: 0 });
          }
        }}
      >
        {this.props.images.gallery.map((image, index) => (
          <div key={index} className="image-container increase-size">
            <img
              alt={image.name}
              draggable={false}
              style={{ width: '100%', height: '100%', cursor: 'pointer' }}
              src={
                image.path === ''
                  ? '/uploads/default.jpg'
                  : `/uploads/${this.props.name.toLowerCase()}/images/gallery/${image.path}`
              }
            />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default WithScrollbar;
