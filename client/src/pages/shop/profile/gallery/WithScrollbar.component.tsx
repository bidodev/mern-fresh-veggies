import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';

/* Styles */
import './WithScrollbar.styles.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1350 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1350, min: 750 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1,
  },
};

type GalleryImage = {
  name: string;
  path: string;
};

type WithScrollbarProps = {
  images: {
    gallery: GalleryImage[];
  };
  slug: string;
};

type WithScrollbarState = {
  additionalTransform: number;
};

class WithScrollbar extends Component<WithScrollbarProps, WithScrollbarState> {
  Carousel: any = null;

  state: WithScrollbarState = { additionalTransform: 0 };

  render() {
    const CustomSlider = ({ carouselState }: { carouselState?: any }) => {
      const currentCarouselState = carouselState || {
        transform: 0,
        totalItems: 0,
        slidesToShow: 1,
      };

      let sliderUnit = 1;
      let carouselItemWidth = 0;

      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        // We don't over-slide
        const maxTranslateX = Math.round(
          carouselItemWidth * (this.Carousel.state.totalItems - this.Carousel.state.slidesToShow) + 150
        );
        // Calculate the unit of transform for the slider
        sliderUnit = maxTranslateX / 100 || 1;
      }

      const transform = Number(currentCarouselState.transform || 0);

      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / sliderUnit)}
            defaultValue={0}
            max={
              (carouselItemWidth * (currentCarouselState.totalItems - currentCarouselState.slidesToShow) +
                (this.state.additionalTransform === 150 ? 0 : 150)) /
              sliderUnit
            }
            onChange={(e) => {
              if (!this.Carousel) return;

              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }

              const currentValue = Number(e.target.value);
              const nextTransform = currentValue * sliderUnit;
              const nextSlide = carouselItemWidth ? Math.round(nextTransform / carouselItemWidth) : 0;

              if (currentValue === 0 && this.state.additionalTransform === 150) {
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
        ref={(el) => {
          this.Carousel = el;
        }}
        partialVisbile={false}
        customButtonGroup={<CustomSlider />}
        itemClass="slider-image-item"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransform}
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
                  : `/uploads/${this.props.slug.toLowerCase()}/images/gallery/${image.path}`
              }
            />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default WithScrollbar;
