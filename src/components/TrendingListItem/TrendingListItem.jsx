import { useEffect, useState } from 'react';
import { Item } from './TrendingListItem.styled';

const TrendingListItem = ({ state }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=174c7d864c0b478cf762db237aebb993&language=en-US',
      options
    )
      .then(response => response.json())
      .then(({ results }) => setMovies(results))
      .catch(err => console.error(err));
  }, []);

  return movies.map(movie => {
    return (
      <li key={movie.id}>
        <Item to={`movies/${movie.id}`} state={state}>
          {movie.original_title}
        </Item>
      </li>
    );
  });
};

export default TrendingListItem;
