import { Title, Item } from './NotFound.styled';

const NotFound = () => {
  return (
    <div>
      <Title>Such page doesn't exist</Title>
      <Item to={'/'}>Return to home page</Item>
    </div>
  );
};

export default NotFound;
