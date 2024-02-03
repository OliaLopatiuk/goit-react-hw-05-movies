import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('loading');
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 174c7d864c0b478cf762db237aebb993',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=174c7d864c0b478cf762db237aebb993&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(({ results }) => {
        setReviews(results);
        setStatus('idle');
      })
      .catch(err => console.error(err));
  }, [movieId]);

  console.log(reviews);
  return (
    <div>
      <ul>
        {reviews.length === 0 && status === 'idle' && (
          <p>We don't have any reviews for this movie</p>
        )}
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
