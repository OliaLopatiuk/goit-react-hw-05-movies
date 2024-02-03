import { Item } from './MoviesSearchList.styled';

const MoviesSearchList = ({ movies, state }) => {
  // console.log(movies);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Item to={`${movie.id}`} state={state}>
            {movie.original_title}
          </Item>
        </li>
      ))}
    </ul>
  );
};

export default MoviesSearchList;
