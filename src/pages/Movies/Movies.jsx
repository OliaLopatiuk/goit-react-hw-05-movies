import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import MoviesSearchList from '../../components/MoviesSearchList/MoviesSearchList';
import { Title, Input } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const title = searchParams.get('title') ?? '';

  const updateQueryString = e => {
    const searchQuery = e.target.value !== '' ? { title: e.target.value } : {};
    setSearchParams(searchQuery);
  };

  useEffect(() => {
    if (!title) {
      return;
    }

    setStatus('loading');
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 174c7d864c0b478cf762db237aebb993',
      },
    };
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=174c7d864c0b478cf762db237aebb993&query=${title}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(({ results }) => {
        setMovies(results);
        setStatus('idle');
      })
      .catch(err => console.error(err));
  }, [searchParams, title]);

  return (
    <div>
      <Title>Movies search</Title>
      <Input type="text" value={title} onChange={updateQueryString} />
      {movies.length > 0 && (
        <MoviesSearchList movies={movies} state={{ from: location }} />
      )}
      {movies.length === 0 &&
        title !== '' &&
        status === 'idle' &&
        'Nothing is found'}
    </div>
  );
};

export default Movies;
