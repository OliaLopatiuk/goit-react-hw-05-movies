import { Outlet, useParams, useLocation } from 'react-router-dom';
import Cast from 'components/Cast/Cast.jsx';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useRef, useState, Suspense } from 'react';
import {
  Button,
  Container,
  List,
  AdditionalInfo,
  StyledLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backlinkLocationRef = useRef(location.state?.from ?? '/movies');
  // console.log(location);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=174c7d864c0b478cf762db237aebb993&language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => console.error(err));
  }, [movieId]);

  const userScore = movie.vote_average?.toFixed(2);
  // const genres = movie.genres?.map(genre => genre.name);
  const year = new Date(movie.release_date).getFullYear();

  // console.log(movie.genres.map(genre => genre.name));
  return (
    <div>
      <Button to={backlinkLocationRef.current}>Go back</Button>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={`"${movie.title}" movie poster`}
        />
        <div>
          <h2>
            {movie.title} ({year})
          </h2>
          <p>User Score: {userScore}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <List>
            {movie.genres?.map(genre => {
              return <li key={genre.id}>{genre.name}</li>;
            })}
          </List>
        </div>
      </Container>
      <AdditionalInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <StyledLink to="cast" element={<Cast />}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" element={<Reviews></Reviews>}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
