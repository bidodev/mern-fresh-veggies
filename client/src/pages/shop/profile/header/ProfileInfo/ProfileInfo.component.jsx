import React from 'react';

/* Styles */
import './ProfileInfo.styles.scss';

/* Component Imports */
import NewItem from './NewItem.component';

const NewProductsList = ({ products, name }) => {
  return [...products]
    .reverse()
    .filter((product, index) => index < 6)
    .map((product, index) => <NewItem key={index} product={product} name={name} />);
};

const EmptyProductsList = ({ name }) => {
  return (
    <div className="public-farmer__main__right__container__empty-list">
      <img src="/images/layout/noitems.png" alt="no-items" />
      <p>{name} doesn't have products yet!</p>
    </div>
  );
};

const ProfileInfo = ({ name, products }) => {
  console.log(products);
  return (
    <>
      <header className="public-farmer">
        <aside className="public-farmer__aside">
          <div className="public-farmer__aside__infos">
            <div className="public-farmer__aside__infos__avatar">
              <p className="public-farmer__aside__infos__avatar__a"></p>
              <div className="public-farmer__aside__infos__avatar__b">
                <h2>{name}</h2>
                <p>⭐⭐⭐⭐⭐</p>
                <h3>Location</h3>
                <p>Berlin - Germany</p>
              </div>
            </div>
            <div className="public-farmer__aside__infos__data">
              <p className="public-farmer__aside__infos__paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, fugiat? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Omnis neque aspernatur in qui temporibus veritatis unde, culpa porro?
                Nemo, magnam.
              </p>
            </div>
            <div className="public-farmer__aside__infos__expertise">
              <h3>Area of Expertise</h3>
              <ul>
                <li>Vegetables</li>
                <li>Meat</li>
                <li>Fruits</li>
                <li>Honig</li>
                <li>Vegan</li>
                <li>Certified</li>
                <li>Discount</li>
                <li>Fruits</li>
              </ul>
            </div>
          </div>
          <div className="public-farmer__aside__main">
            <div className="public-farmer__main__featured">
              <h2>About Me</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, velit?</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati perspiciatis omnis ducimus mollitia
                inventore saepe fugit voluptatum vel, quasi recusandae sunt dolor odio quam minima, magnam facilis! Odit
                cumque, distinctio qui magni eum adipisci voluptatibus saepe amet velit voluptatem deserunt ipsa ratione
                atque ea voluptates at, harum non, fuga sunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nulla asperiores illum, possimus autem
                necessitatibus harum at placeat dolore? Ipsum?
              </p>
            </div>
            <div className="public-farmer__main__reviews">
              <h2>Testimonials</h2>
              <div>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil recusandae voluptates
                  maxime voluptatem, iure architecto, dolore veniam optio ducimus odio culpa magni, nostrum debitis
                  ratione quas minima quam explicabo!"
                </p>
                <div className="abcde">
                  <p>
                    Peter, <span>client from Brandenburg</span>
                  </p>
                  <div className="carousel-dots">
                    <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
                    <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
                    <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main className="public-farmer__main__right">
          <div className="public-farmer__main__right__header">
            <h2>New Products</h2>
          </div>
          {/* should be filtered by data add and limit to 5 */}
          <div className="public-farmer__main__right__container">
            {/* create a shallow copy of the array and reverse to show the last added first */}
            {products.length > 0 ? (
              <NewProductsList products={products} name={name} />
            ) : (
              <EmptyProductsList name={name} />
            )}
          </div>
        </main>
      </header>
    </>
  );
};

export default ProfileInfo;
