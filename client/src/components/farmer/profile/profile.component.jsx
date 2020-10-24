import React, { useState, useRef } from 'react';
import axios from 'axios';

/* Component Imports */
import ReviewsAdmin from 'components/farmer/reviews/reviews.component';

/* Styles */
import './profile.styles.scss';

import Modal from 'components/modal/modal.component';

/**
 * available props: {name, photo, email, role}
 */

const ProfileAdmin = ({ photo, name, jwt }) => {
  const [modalStatus, setIsOpen] = React.useState(false);

  /* Upload user photo */
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('photo', selectedFile);

    console.log(data.get('photo'));
    axios
      .patch('/users/profile', data)
      .then((res) => {
        alert('File Upload success');
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="profile-admin">
      <div className="profile-admin__profile-container">
        <h2 className="profile-admin__profile-container--header">YOUR PROFILE</h2>
        <div className="profile-admin__profile-container__information">
          <div className="profile-admin__profile-container__information--avatar">
            <img src={`/images/users/${photo}`} alt="avatar" className="avatar-img" onClick={openModal} />
          </div>
          <div className="profile-admin__profile-container__information--biography">
            Welcome to your profile {name} <br />
            🐰🥕🧑‍🌾🚜 <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis aliquid, nam quisquam hic vitae
            commodi! Assumenda vel reiciendis et, est delectus, sit eos tempora, amet ipsa nulla dicta iusto libero?
            Aliquid officiis tempora aliquam. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta ex quos eaque dolores, alias odio
            cupiditate? Accusantium quae harum fuga praesentium distinctio dolore maxime, repellendus qui facilis
            laborum expedita.
          </div>
        </div>
        <div className="profile-admin__profile-container__gallery">
          <div className="profile__profile-container__gallery--img">
            <img src="/images/farm-1.jpg" alt="img" className="gallery-img" />
          </div>
          <div className="profile-admin__profile-container__gallery--img">
            <img src="/images/donkey.jpg" alt="img" className="gallery-img" />
          </div>
          <div className="profile-admin__profile-container__gallery--img">
            <img src="/images/farm-3.jpg" alt="img" className="gallery-img" />
          </div>
        </div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolore a officiis corrupti impedit fuga tempore molestiae voluptate perferendis facere. Sint ducimus nemo, ab quam officia commodi dolorum. Rerum repellat excepturi velit possimus dicta amet commodi, sit dolores maxime ab explicabo maiores similique ad modi quisquam esse harum aperiam reiciendis. Maiores libero expedita aliquam beatae a vel, iste fuga accusantium laudantium consequatur cumque officia animi, dolorum commodi eos provident. Est, quia consequatur laudantium tempora, fugit ea necessitatibus ipsum nobis maxime quos recusandae architecto corrupti laboriosam voluptas amet voluptatem tempore autem officia vero at voluptates quo aliquam omnis? Recusandae laudantium eveniet amet impedit ipsam obcaecati eius sint iure! Eius soluta, pariatur aliquam expedita ratione corporis saepe enim laudantium aspernatur quo voluptas, veniam praesentium! Magnam dignissimos nisi id earum, vero laudantium illo quis molestiae fugit consectetur sunt, asperiores culpa voluptates tempora cumque voluptas cupiditate, ea quod officiis. Placeat blanditiis, voluptates mollitia id praesentium nobis magni vitae vero debitis laborum iste totam tempora quibusdam cupiditate autem sunt expedita labore nisi tempore aspernatur nam quam assumenda! Reprehenderit, soluta rem esse quisquam iusto doloribus id delectus! Id nam optio reprehenderit quod. Ullam dolor dolorum impedit ipsum possimus! Aspernatur tempora quia saepe blanditiis, sapiente ipsum quam assumenda! Non voluptatibus ut, at labore, modi hic consectetur aspernatur sunt dolore ex inventore, officia error a blanditiis eius odit possimus minima animi. Dignissimos recusandae consequatur aliquid, tenetur, ducimus labore ullam maxime molestiae unde ipsum placeat debitis eos amet? Quae, deserunt! Deleniti, facilis fugiat adipisci ratione nisi cumque excepturi blanditiis, atque eaque aspernatur sed est in dicta tenetur repellat soluta odio, itaque saepe maxime. Error quas exercitationem, blanditiis non dolores incidunt repellendus cum. Aperiam tenetur ullam cumque deleniti quasi, libero laborum nulla! Ea rem totam tempore doloremque sed tenetur reiciendis omnis in temporibus. Hic natus odit rerum perferendis ipsam pariatur, autem maxime a, amet reprehenderit quasi accusantium ipsa quas optio accusamus quo laborum error vel veritatis excepturi magni. Magni commodi, nisi debitis voluptates, dolore doloremque animi ut incidunt quam libero quos. Laudantium ad, alias atque voluptate dolores quod eligendi vel ipsam aspernatur cum facere blanditiis ipsa harum totam. Molestias beatae impedit dolorum veniam quae rem accusantium vero qui numquam repellat? Aliquam placeat quia possimus, voluptate tempore dolores quisquam magni aut sed animi neque ut corrupti saepe maxime nostrum doloribus eius expedita labore recusandae facere. Vitae obcaecati, eum, nobis, commodi expedita nihil accusamus fugiat quasi non nostrum voluptatum quod reprehenderit cum consequuntur id. Animi et eum beatae eos. Debitis, accusamus. Magni ratione excepturi minima? Expedita incidunt, quasi fuga doloribus officia adipisci explicabo voluptatum cumque tempore facilis, laborum laboriosam beatae ab ea dicta sit? Nam, optio quibusdam. Deserunt, repellat? Nihil deleniti consequuntur velit assumenda quisquam ratione? Qui at ullam assumenda delectus ex quidem deleniti laboriosam blanditiis, est vero nobis, placeat itaque? Excepturi eius eos amet molestiae laborum consectetur quisquam impedit iusto ipsam? Enim vitae, debitis cumque obcaecati officiis unde quos? Aliquid repellat veritatis blanditiis cupiditate rerum maxime odit tenetur necessitatibus nobis aliquam vitae est, velit, voluptatibus rem amet, repudiandae molestias! Debitis nulla dolorum eum aliquam tenetur iusto facere sapiente fuga incidunt labore aut architecto maiores aliquid magni molestias, ducimus officiis sequi commodi mollitia non tempora temporibus et accusantium eligendi! Aut ex fugit optio facere quaerat. Sit magnam similique recusandae mollitia praesentium provident iusto exercitationem quibusdam numquam ipsam quis eum ullam animi officiis, dignissimos nostrum doloremque quasi soluta. Cum, mollitia. Debitis, dicta nihil quidem id dignissimos repellat sint nemo aliquid iure excepturi, temporibus sunt, omnis at magni. Iusto quaerat provident autem nihil distinctio rerum fuga laboriosam dolore. Adipisci, nihil dolorum saepe a cum deserunt ullam recusandae ut molestiae illum mollitia, ex facere enim minus eos voluptates placeat perspiciatis eum ratione iusto odio ad! Sint maiores blanditiis harum, impedit debitis sapiente et perspiciatis quam ex dolorem in. Explicabo rem dolorem velit assumenda veniam accusantium et, nulla rerum? Saepe est iste, sed eius numquam at, earum amet qui enim, sequi maiores eveniet cumque laboriosam repellat animi fuga itaque? Quidem, aut! Dolores, similique magnam. Vel, modi et. Ab quae, quaerat id quasi quia, nam doloremque dolore quas alias cumque, ut fuga reprehenderit rem. Sint suscipit quia commodi eaque odio, blanditiis repudiandae porro. Quae doloribus suscipit aperiam, consequuntur quod eligendi numquam porro consequatur sit provident, qui veritatis dicta, et ad excepturi nemo neque velit dolorum modi aliquam optio sint rerum ipsum. Magnam culpa vel ipsa excepturi, aperiam voluptate rem blanditiis dolorum enim et possimus commodi dolor, corporis architecto velit illo, necessitatibus cupiditate! Quod repellat quam quae ipsam et itaque consequuntur iusto, rem quas repudiandae reprehenderit earum iure tempora officia temporibus eius porro maiores distinctio harum! Maiores quae laudantium beatae quam ea eum voluptatibus nostrum asperiores sit tempora impedit error quibusdam soluta perferendis ab in necessitatibus quasi ipsam magni, placeat dolorem hic! Soluta assumenda fuga adipisci reiciendis modi asperiores, voluptate cum enim reprehenderit tempore accusantium facere suscipit. Neque voluptatem ea incidunt blanditiis dolorem autem sit sunt, cumque doloribus totam pariatur molestiae architecto optio sed cum dolorum vitae qui labore maxime aliquid illo amet. Vel possimus, ducimus quisquam nesciunt repellendus dolor maxime odit similique voluptas eaque minus commodi velit suscipit atque libero veniam aperiam. Doloremque, quam. A dolores eum exercitationem id aliquam sapiente inventore necessitatibus sint cumque fugit et ea laborum reiciendis ab corporis, atque aperiam non sed quia saepe deleniti ut vitae nisi? Repudiandae illo quia cupiditate recusandae, eius, adipisci est doloremque voluptas enim ducimus assumenda laudantium facere tenetur unde! Dolorem laborum non aspernatur eveniet iusto! Incidunt, aliquam repellendus fugiat aperiam dolores facilis nulla voluptatem aliquid eos labore provident qui, doloribus ad aut culpa neque corrupti dignissimos error amet deserunt ea quidem consectetur obcaecati ipsam? Nobis praesentium incidunt harum modi beatae autem accusamus, ad quod assumenda hic veritatis id corrupti natus eligendi sit, consectetur unde repellendus, eius quis vel a? Provident quod at asperiores reprehenderit, voluptas voluptatum veritatis quaerat. Reiciendis neque nihil praesentium libero iure iste porro culpa nostrum, quidem cupiditate magni cumque, adipisci omnis pariatur dolor illum fuga eum molestias fugiat quos! Expedita debitis sint doloremque? Hic maiores ex eius, quae quos esse officiis adipisci, minus nulla aut dolore fugiat debitis eaque qui ratione necessitatibus quaerat rerum quis dicta quasi ipsum consequatur eligendi? Laboriosam ipsum optio a, accusamus quod minus sapiente ratione officia voluptate. Laudantium possimus minima culpa, assumenda provident doloremque dicta recusandae blanditiis quo? Accusantium id, harum, distinctio nesciunt, itaque expedita modi cumque commodi ea doloremque asperiores consectetur vitae eum adipisci numquam iste porro quae? Suscipit voluptas, animi eligendi reiciendis delectus molestias quaerat iure illo harum asperiores maiores! Repellat repellendus quibusdam beatae quae sit neque alias deleniti doloremque, iusto nam odit quis dignissimos rerum error accusamus, suscipit cumque veritatis, voluptatibus aliquid placeat quas aspernatur? Doloremque error, quaerat, aliquid voluptatibus sint et reprehenderit in quam recusandae veritatis fugiat blanditiis corporis, non quos. Necessitatibus omnis unde similique aut, exercitationem ullam facere, ex incidunt magnam pariatur perspiciatis! Deleniti, eligendi quod amet blanditiis repellat quae repellendus iusto expedita facere. Corrupti corporis ea iste eligendi quos officiis, eius itaque, non nisi, consequatur repudiandae fugiat illo quam expedita aliquam dolores mollitia et necessitatibus hic beatae. Sint unde animi, labore modi, quia maxime repellat quod earum quidem praesentium fugit quos pariatur! Similique, asperiores? Qui libero nam modi debitis saepe omnis eaque error, mollitia aut? Eius quis architecto aliquid fugit, veritatis molestias magni provident, rerum, beatae sequi doloribus odio. Ullam autem accusantium illum ad exercitationem praesentium enim eaque, ut repellendus recusandae, obcaecati odio voluptates? Magni pariatur, sit nostrum quos, voluptates non odit earum perferendis placeat mollitia quidem, vero doloribus minus officia. Quis porro voluptatum quisquam tempore quasi voluptatem repellendus, est laborum at asperiores recusandae aliquam in deserunt, vitae velit nam veritatis magnam nobis, consequatur rerum? Inventore doloribus, fugit sequi sit nulla asperiores explicabo nesciunt vero. Quo, beatae a dolorem provident consequatur molestiae blanditiis quod aliquam perspiciatis cum voluptatum voluptas officia aliquid, neque eaque. Corrupti nobis voluptatem consequuntur nulla quisquam, obcaecati possimus quis nam dignissimos, aliquam officia magni laborum dolor itaque facilis fuga accusamus blanditiis aperiam ipsum, exercitationem officiis odio explicabo deserunt? Eum sed repellat reiciendis eius at quis! Quidem, voluptatem ab? Perferendis, nulla. Consectetur minus dolorem accusamus incidunt molestiae natus numquam temporibus laboriosam odio molestias? Expedita atque earum hic alias porro sint reiciendis, odio quam tempora eaque nemo dolorem doloremque! Aut iste, reiciendis inventore architecto et vitae expedita in aliquid asperiores sed numquam quia consectetur, harum aperiam suscipit soluta provident molestias nobis sunt placeat aliquam. Qui necessitatibus eius consequatur soluta autem sunt repellendus et. Culpa voluptas deserunt tempore sapiente doloribus fugit quaerat odit natus. Necessitatibus unde distinctio ipsam non pariatur minus at officiis placeat? Aspernatur ex repudiandae exercitationem veniam consequatur aperiam veritatis qui earum natus debitis, porro mollitia laborum soluta magnam in voluptatibus commodi quo! Officia non, repellendus est, expedita consequatur delectus, quis maxime soluta rem laboriosam perferendis quam aliquam! Quibusdam, libero. Repudiandae dicta alias doloribus distinctio provident nesciunt eveniet hic aut accusantium fuga similique, aliquam magnam, unde sunt odio cum id nisi perferendis rerum sapiente dolore ad ea cumque porro? Id, aut facere excepturi neque quaerat est officiis officia at eaque ex, illo cupiditate repellat molestias voluptate nisi odio quod labore non doloremque?
      </div>
      <ReviewsAdmin />
    </section>
  );
};

export default ProfileAdmin;


{/* <Modal modalStatus={modalStatus} closeModal={closeModal}>
<div>
  <button onClick={closeModal}>close</button>

  <form>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <input type="file" onChange={handleFileInput} />
    <button onClick={submitForm}>Submit</button>
  </form>
</div>
</Modal> */}