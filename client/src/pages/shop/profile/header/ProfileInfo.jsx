import React, { useState } from 'react';
import './ProfileInfo.styles.scss';

//import LoadProductInsideModal from './farmer.products/LoadProductInsideModal';
import NewItem from './NewItem';

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
            <div className="public-farmer__main__featured">
            <h2>About Me</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, velit?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nulla asperiores illum, possimus autem
                necessitatibus harum at placeat dolore? Ipsum?
              </p>
            </div>
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
              .filter((product, index) => index < 6)
              .map((product, index) => (
                <NewItem key={index} product={product} name={name} />
              ))}
          </div>
        </main>
      </header>
    </>
  );
};

export default ProfileInfo;
