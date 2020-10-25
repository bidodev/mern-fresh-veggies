import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

/* Component Imports */
import ReviewsAdmin from 'components/farmer/reviews/reviews.component';
import Modal from 'components/modal/modal.component';

/* Styles */
import './profile.styles.scss';

const customStyles = {
  /* Modal Styles */
  content: {
    width: '40vw',
    height: '70vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

const ProfileAdmin = ({ photo, name, jwt }) => {
  const [modalStatus, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalStatus);
  };

  const [isHovering, setHoverStatus] = useState(false);

  const handleMouseHover = () => {
    setHoverStatus(!isHovering);
  };

  /* Upload user photo */
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('photo', selectedFile);

    axios
      .patch('/users/profile', data)
      .then((res) => {
        alert('File Upload success');
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <section className="profile-admin">
      <div className="profile-admin__profile-container">
        <h2 className="profile-admin__profile-container--header">YOUR PROFILE</h2>
        <div className="profile-admin__profile-container__information">
          <div
            className="profile-admin__profile-container__information__avatar"
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
            onClick={toggleModal}
          >
            <img src={`/images/users/${photo}`} alt="avatar" />
            {isHovering && (
              <div>
                <li>
                  <h2>Choose new photo</h2>
                </li>
              </div>
            )}
          </div>
          <div className="profile-admin__profile-container__information--biography">
            Welcome to your profile {name} <br />
            🐰🥕🧑‍🌾🚜 <br />
              <p>            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis aliquid, nam quisquam hic vitae
            commodi! Assumenda vel reiciendis et, est delectus, sit eos tempora, amet ipsa nulla dicta iusto libero?
            Aliquid officiis tempora aliquam. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dicta ex quos eaque dolores, alias odio
            cupiditate? Accusantium quae harum fuga praesentium distinctio dolore maxime, repellendus qui facilis
            laborum expedita.</p>
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
        <p style={{ "fontSize": "1rem", "padding": "2rem", "lineHeight": "1.4" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam at cupiditate numquam hic repellendus aperiam
          ipsum accusamus officiis exercitationem facere culpa debitis distinctio quia animi amet, esse, dicta ducimus
          libero. Ipsum est asperiores, perspiciatis qui reiciendis vel non recusandae, molestias facere consequatur
          quod illum laboriosam dignissimos reprehenderit beatae nisi eaque consectetur esse molestiae doloremque iusto
          quidem natus officiis. Deleniti tempora sint aut laudantium odio consectetur soluta nulla dolores accusamus
          error veniam aperiam optio delectus, dignissimos iusto ipsa suscipit veritatis corrupti quasi. Iure a cumque
          odit perspiciatis atque veniam doloremque consequuntur suscipit fuga accusantium saepe blanditiis id sequi
          excepturi explicabo sed non quas necessitatibus quos, nisi laborum? Quos consequatur voluptatum asperiores
          dolorem odio minima modi fuga, vel nulla magnam, ducimus provident beatae quo animi repellendus debitis
          doloremque consectetur aspernatur itaque commodi esse? Ipsam cum dicta veniam molestiae quisquam magnam,
          dolore dolorum, totam obcaecati qui doloribus tempora numquam ipsum impedit esse quibusdam natus saepe.
          Praesentium dicta a similique amet facilis sapiente mollitia aperiam magni? Quibusdam asperiores numquam porro
          dolorum repellat optio quo doloribus velit atque maxime delectus eveniet recusandae ratione reprehenderit
          corrupti ut ipsum, temporibus rerum architecto saepe. Quia ut officia impedit earum nostrum reiciendis
          quibusdam incidunt. At possimus error est cupiditate temporibus quos illum, numquam similique architecto
          praesentium? Minima quis necessitatibus aliquam recusandae illum sunt sequi incidunt libero facilis beatae
          similique numquam, amet quae mollitia porro dolorum laborum neque harum tenetur placeat dicta excepturi
          voluptates officiis. Fugiat molestias deserunt at non recusandae! Omnis consequuntur nesciunt, porro,
          accusantium tempora sed ut aliquam rem qui modi quia aperiam temporibus quisquam inventore quam nobis adipisci
          perspiciatis, officiis id odio reiciendis veniam voluptas et. Repellendus, repudiandae. Ipsum veniam beatae
          quibusdam sint ipsa dolores iusto ab odit eum! Eligendi quod qui cumque expedita debitis voluptatem, nesciunt
          nostrum hic voluptates omnis in odit fugit quisquam aspernatur labore perferendis tempora accusantium ad sequi
          iusto corporis, minus distinctio perspiciatis? Sint odit nemo temporibus totam accusamus deserunt debitis illo
          ipsam perspiciatis, doloribus sunt dicta provident earum nesciunt illum necessitatibus, praesentium hic,
          voluptatem magni odio laudantium molestias animi cupiditate reprehenderit! Distinctio ipsa suscipit sed odit,
          eius optio ducimus quia eum voluptates, enim eligendi temporibus consequuntur voluptas hic. Rem beatae laborum
          eos corporis molestiae reprehenderit, error at necessitatibus vitae. Non porro voluptas laudantium odio
          repellat, obcaecati excepturi magni. Sit error iusto numquam sunt, molestiae, labore quasi eum suscipit optio,
          impedit dicta magni hic! Animi, magni assumenda minus magnam qui fuga atque quod a molestias! Assumenda, nihil
          necessitatibus? Ad qui necessitatibus neque vitae. Iure at vero amet, dignissimos eius iste veniam quod odit
          earum. Totam mollitia modi natus labore adipisci. Laudantium praesentium autem odio rerum. Molestias
          perferendis consectetur minus placeat aliquam expedita, fugit possimus saepe adipisci veritatis enim
          laudantium quas, reprehenderit ut repellat, debitis atque corrupti voluptatum! Facilis non minus suscipit,
          quis perferendis, laudantium voluptates dolorem, quos fugiat quibusdam nisi rem dignissimos amet?
          Necessitatibus et eveniet, cupiditate enim dolorum sequi veritatis ullam fugit. Cum inventore odio, optio
          dolore necessitatibus voluptates officia maxime quos dignissimos cumque aperiam vero dolorum neque aut eum a
          vitae.
        </p>
      </div>

      <ReviewsAdmin />
      <Modal modalStatus={modalStatus} closeModal={toggleModal} styles={customStyles}>
        <div className="upload__photo">
          <div className="upload__photo__header">
            <h3>Upload Profile Picture</h3>
            <Icon icon={'times'} onClick={toggleModal} />
          </div>

          <hr />
          <form>
            <label htmlFor="file-upload" class="custom-file-upload">
              Select Photo
            </label>
            <input id="file-upload" type="file" onChange={handleFileInput} />
            <button onClick={submitForm}>Upload</button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default ProfileAdmin;
