import * as React from 'react';
import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material';
import './MovieCard.css';

function MovieCard(props) {
  const [value, setValue] = React.useState(props.movies.rating);

  return (
    <div className="card movie_card">
      <img src={props.movies.posterURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.movies.title}</h5>
        <p className="description">{props.movies.description}</p>
        <Typography component="legend">Rate this movie</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
    </div>
  );
}

export default MovieCard;
