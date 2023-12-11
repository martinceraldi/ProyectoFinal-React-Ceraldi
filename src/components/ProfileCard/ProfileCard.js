import { useState } from "react";

function ProfileCard(props) {
  const { titulo, arroba, img } = props;

  const [count, setcount] = useState(0);

  function handleClickResta() {
    setcount(count - 1);
  }

  return (
    <div className="card">
      <div className="card-img">
        <figure className="image is-1by1">
          <img src={img} alt="logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <h3 className="title is-4">Titulo: {titulo}</h3>
          <p className="subtitle is-4">{arroba}</p>
        </div>
        <div className="columns">
          <div className="column is-4">
            {/* una forma de reducir el codigo sin crear una variable, funcion en linea */}
            <button
              onClick={() => setcount(count + 1)}
              className="button is-primary full-width is-fullwidth"
            >
              <p>+</p>
            </button>
          </div>
          <div className="column">
            <p className="subtitle">Likes: {count}</p>
          </div>
          <div className="column">
            <button
              onClick={handleClickResta}
              className="button is-danger full-width is-fullwidth"
            >
              <p>-</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
