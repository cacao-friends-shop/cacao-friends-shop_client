import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button';

const LinkIconButton = () => {
  return (
    <Link to="/">
      <Button>로그인 하기</Button>
    </Link>
  );
};

export default LinkIconButton;
