import React from 'react';
import './Images.css';
import './Media.css'
import Image from "../Image/Image";

const Images = (props) => (
  <div className="Images">
    {props.images.map((elem) => {
      return (
        <Image
          key={elem.id}
          id={elem.id}
          image={elem.urls.small}
          download={elem.links.download}
          title={elem.user.first_name}
          onclick={() => props.addFavorite(elem)}
        />
      )
    })}
  </div>
);

export default Images;