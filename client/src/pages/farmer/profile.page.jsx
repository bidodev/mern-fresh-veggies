import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';

/* Spinner */
import Spinner from 'components/spinner/spinner.component';
import './profile.page.styles.scss'

function ProfilePage() {
  let { farmerId } = useParams();
  const [farmer, setFarmer] = useState([]);
  const [isLoading, setStatusLoading] = useState(true);

  useEffect(() => {
    axios(`/farmers/${farmerId}`)
      .then(({ data }) => {
        setFarmer(data.data);
        setStatusLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [farmerId]);

  return (
    <div className="farmer-profile">
          <h3>Hello {farmer.name}</h3>
          <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non!
          </section>
          <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non!
          </section>

      {isLoading ? (
        <Spinner />
      ) : (
                  <div className="farmer-products">
                      <h2>List of Products</h2>
          {farmer.products.map((product) => (
              <div>
              
              <h3>{product.name}</h3>
              <h3>{product.type}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
              )}
          
          <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non!
          </section>
          <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, non!
          </section>
    </div>

    // query the specific farm and show his profile
  );
}

export default ProfilePage;
