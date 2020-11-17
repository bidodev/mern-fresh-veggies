import React, { useState } from 'react';
import './ProfileInfo.styles.scss';

//import LoadProductInsideModal from './farmer.products/LoadProductInsideModal';

const ProfileInfo = ({ name, products }) => {
    return (
      <>
        <header className="public-farmer">
          <aside className="public-farmer__aside">
            <div className="public-farmer__aside__infos">
              <div className="public-farmer__aside__infos__avatar">
                <h2>{name}</h2>
                <h3>Location</h3>
                <p>Berlin - Germany</p>
              </div>
              <div className="public-farmer__aside__infos__data">
                <h2>About Me</h2>
                <p className="public-farmer__aside__infos__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, fugiat? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Omnis neque aspernatur in qui temporibus veritatis unde, culpa porro?
                  Nemo, magnam.
                </p>
              </div>
            </div>
            <div className="public-farmer__aside__main">
              <div className="public-farmer__main__featured">Hello Gallery</div>
              <div className="public-farmer__main__reviews">Hello Testimonials</div>
            </div>
          </aside>
          <main className="public-farmer__main__right">
            <div className="shiiit">
              <h2>New Products</h2>
            </div>
            <hr />
            {/* should be filtered by data add and limit to 5 */}
            <div className="shit2">
              {products
                .filter((product, index) => index < 5)
                .map((product) => (
                  <div className="new-product">
                    <p>{product.name}</p>
                    <div className="new-product__img">
                      <img src={`/uploads/${name.toLowerCase()}/images/products/${product.photo}`} alt="" />
                    </div>
                    <p>
                      EUR: {product.price} - {product.unity}
                    </p>
                  </div>
                ))}
            </div>
          </main>
        </header>
      </>
    );
  };

export default ProfileInfo
