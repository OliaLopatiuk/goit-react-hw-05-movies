import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 174c7d864c0b478cf762db237aebb993',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=174c7d864c0b478cf762db237aebb993&language=en-US`,
      options
    )
      .then(response => response.json())
      .then(({ cast }) => setCast(cast))
      .catch(err => console.error(err));
  }, [movieId]);
  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
              alt={actor.name}
            />
            <p>Name: {actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
