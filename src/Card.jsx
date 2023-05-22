import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={`https://robohash.org/${id}?200x200`} alt="photo" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
