import React from 'react';
import { css } from '@emotion/react';
import { colors } from 'theme';
import Avatar from 'components/atoms/Avatar';
import { charList } from 'staticData';
import { Link } from 'react-router-dom';

type charProps = {
  id: string;
  imagePath: string;
  alt: string;
  url: string;
};
const SearchBarChar = () => {
  return (
    <section css={container}>
      <div css={avatarListContainer}>
        {charList.map((char: charProps) => (
          <Link to={char.url} css={avatarStyle(char.alt)} key={char.id}>
            <Avatar imagePath={char.imagePath} alt={char.alt}></Avatar>
            <p>{char.alt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

const container = css`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  margin: 0 auto;
  max-width: 64rem;
  padding-top: 3rem;
`;
const avatarListContainer = css`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const avatarStyle = (alt: string) => css`
  width: 7.1rem;
  height: 9.4rem;

  & > div {
    width: 7.1rem;
    height: 7.1rem;
  }

  p {
    text-align: center;
    margin-top: 8px;
    font-size: 12px;
  }
`;
export default SearchBarChar;
