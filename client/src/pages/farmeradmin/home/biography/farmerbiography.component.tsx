import React from 'react';

/* Styles */
import './farmerbiography.styles.scss';

const FarmerBiography = ({ name }) => {
  return (
    <div className="panel-profile__biography">
      <div className="panel-profile__biography__info">Welcome {name}</div>
      <div className="panel-profile__biography__rate">⭐⭐⭐⭐⭐</div>
      <div className="panel-profile__biography__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nostrum totam a deleniti labore quis nihil, quidem
        amet laboriosam ea asperiores velit accusamus. Iste numquam pariatur nesciunt sapiente quidem perspiciatis neque
        facilis quia totam sequi praesentium itaque cupiditate voluptatem nisi maiores laboriosam, aliquam nam, ut
        mollitia veritatis quam. Natus, sunt laborum modi recusandae, suscipit reiciendis nostrum dolorum asperiores sed
        tempore molestias officia, perspiciatis fuga tenetur ad ducimus sequi blanditiis expedita explicabo nesciunt
        repellendus qui doloribus numquam rem? Itaque expedita excepturi rem doloribus saepe ipsum sapiente in sint
        accusantium, dolorem tenetur enim sed ea totam cumque repellendus dolorum cupiditate laboriosam repellat. Illum,
        rerum mollitia! Recusandae repudiandae aliquam alias distinctio, quasi neque dolorem corporis officiis quo quam
        culpa nobis iste inventore, soluta eaque temporibus consectetur consequuntur.
      </div>
    </div>
  );
};

export default FarmerBiography;
