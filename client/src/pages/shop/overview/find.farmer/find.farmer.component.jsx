import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

/* Styles */
import './find.farmer.styles.scss';

/* Component Imports */
import Spinner from 'components/UI/spinner/spinner.component';

// const FindYourFarmer = ({ match }) => {
//   const [isLoading, setStatusLoading] = useState(true);
//   const [farmers, setFarmers] = useState([]);

//   // Getting all farmers profile
//   useEffect(() => {
//     axios(`/farmers`)
//       .then(({ data }) => {
//         setFarmers(data.data.farmers);
//         setStatusLoading(false);
//       })
//       .catch((err) => console.log(err.message));
//   }, []);
//   console.log(farmers);

//   return (
//     <section className="find-farmer">
//       <h2 className="find-farmer__header">MEET OUR VENDORS</h2>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <div className="find-farmer__container">
//           {farmers.map((farmer) => (
//             <Link to={`${match.url}/farmer/${farmer._id}`}>
//               <li className="find-farmer__container__item">
//                 <div className="find-farmer__container__item__bg-image-container">
//                   <img src="/images/farm-1.jpg" alt="background" />
//                 </div>
//                 <div className="find-farmer__container__item__avatar-container">
//                   <img
//                     src={`/uploads/${farmer.name.toLowerCase()}/images/profile/${farmer.images.profile}`}
//                     alt="farmer-avatar"
//                   />
//                 </div>
//                 <h3 className="find-farmer__container__item--name">{farmer.name}</h3>
//                 <div className="find-farmer__container__item__location">
//                   <div className="find-farmer__container__item__location--city">Berlin</div>
//                   <div className="find-farmer__container__item__location--country">Germany</div>
//                 </div>
//                 <div className="find-farmer__container__item--description">{farmer.description}</div>
//               </li>
//             </Link>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

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
        console.log(data.data.farmers);
        console.log(slicedItems);

        this.setState({ data: data.data.farmers, slicedItems });
        this.setState({ isLoading: false });
      })
      .catch((err) => console.log(err.message));
  }

  fetchMoreData = () => {
    const { data, slicedItems } = this.state;
    console.log(data.length, slicedItems.length);

    if (slicedItems.length >= data.length) {
      this.setState({ hasMore: false });
      return;
    }

    setTimeout(() => {
      const newItems = data.slice(slicedItems.length, slicedItems.length + 9);
      this.setState({ slicedItems: slicedItems.concat(newItems) });
    }, 1300);
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
              dataLength={this.state.data.length}
              next={this.fetchMoreData}
              hasMore={this.state.hasMore}
              loader={<div className="loader-fix"></div>}
              height="35.8rem"
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
