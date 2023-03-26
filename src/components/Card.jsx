import React from 'react';
import "../styles/Card.css"
const Card = ({ user }) => {
  return (
    <div className="card">
      <p>Name: {user.name}</p>
      <p>Job: {user.job}</p>
      <p>Hobby: {user.hobby}</p>
    </div>
  );
};
export default Card;