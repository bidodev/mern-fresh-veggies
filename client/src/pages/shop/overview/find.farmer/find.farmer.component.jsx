import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

/* Styles */
import './find.farmer.styles.scss';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';

class FindYourFarmer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasMore: true,
      slicedItems: [],
      data: [],
    };
  }

  componentDidMount() {
    axios(`/farmers`)
      .then(({ data }) => {
        const slicedItems = data.data.farmers.slice(0, 3);
        this.setState({ data: data.data.farmers, slicedItems });
        this.setState({ isLoading: false });
      })
      .catch((err) => console.log(err.message));
  }

  fetchMoreData = () => {
    const { data, slicedItems } = this.state;
    if (slicedItems.length >= data.length) {
      this.setState({ hasMore: false });
      return;
    }
    setTimeout(() => {
      const newItems = data.slice(slicedItems.length, slicedItems.length + 3);
      this.setState({ slicedItems: slicedItems.concat(newItems) });
    }, 1200);
  };

  render() {
    const { isLoading } = this.state;
    return (
      <section className="find-farmer">
        <h2 className="find-farmer__header">MEET OUR VENDORS</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="find-farmer__container">
            <InfiniteScroll
              dataLength={this.state.slicedItems.length}
              next={this.fetchMoreData}
              hasMore={this.state.hasMore}
              loader={<div></div>}
              height="35rem" // to remove and add button for hasMore
              className="find-farmer__container__infinite-scroll-bar"
            >
              {this.state.slicedItems.map((farmer) => (
                <Link key={farmer._id} to={`${this.props.match.url}/farmer/${farmer._id}`}>
                  <li className="find-farmer__container__item">
                    <div className="find-farmer__container__item__bg-image-container">
                      <img src="/images/farm-1.jpg" alt="background" />
                    </div>
                    <div className="find-farmer__container__item__avatar-container">
                      <img
                        src={`/uploads/${farmer.name.toLowerCase()}/images/profile/${farmer.images.profile}`}
                        alt="farmer-avatar"
                      />
                    </div>
                    <h3 className="find-farmer__container__item--name">{farmer.name}</h3>
                    <div className="find-farmer__container__item__location">
                      <div className="find-farmer__container__item__location--city">Berlin</div>
                      <div className="find-farmer__container__item__location--country">Germany</div>
                    </div>
                    <div className="find-farmer__container__item--description">{farmer.description}</div>
                  </li>
                </Link>
              ))}
            </InfiniteScroll>
          </div>
        )}
      </section>
    );
  }
}

export default FindYourFarmer;
