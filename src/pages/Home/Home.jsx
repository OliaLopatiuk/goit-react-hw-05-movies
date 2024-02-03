import TrendingList from 'components/TrendingList/TrendingList';
import { useLocation } from 'react-router-dom';
import { Title } from './Home.styled';

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <Title>Trending today</Title>
      <TrendingList state={{ from: location }} />
    </div>
  );
};

export default Home;
