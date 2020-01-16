import React from 'react';
import {Link, NavLink} from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}
      <NavLink activeStyle={{fontWeight: 'italic', color: 'crimson',}}
               to={`/movies/${movie.id}`}>

      </NavLink>

      </span>
    ))}
    <div className="home-button">Home</div>
      <Link to="/">Home</Link>
  </div>
);

export default SavedList;
