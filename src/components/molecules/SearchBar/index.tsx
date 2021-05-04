import React from 'react';
import { css } from '@emotion/react';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import Input from 'components/atoms/Input';
import { useFormik } from 'formik';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';

interface Props {}

const SearchBar = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section css={searchFormStyle}>
      <A11yHiddenHeading comp="h1">검색창</A11yHiddenHeading>
      <form onSubmit={formik.handleSubmit}>
        <Icon name="search" size={32}></Icon>
        <Input
          type="search"
          title="search"
          className="search-input"
          onChange={formik.handleChange}
        ></Input>
        <Button className="search-button" type="submit">
          취소
        </Button>
      </form>
    </section>
  );
};

const searchFormStyle = css`
  max-width: 640px;
  width: 100%;

  form {
    display: flex;
    position: relative;
    padding: 2rem 0 2rem 2rem;
    border-bottom: 1px solid rgb(200, 201, 204);
  }
  svg {
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    left: 2.6rem;
    path {
      fill: rgb(200, 201, 204);
    }
  }
  .search-input {
    flex-basis: 90%;

    input {
      border-radius: 21px;
      padding: 1.3rem 1.3rem 1.3rem 4.5rem;
      font-size: 1.6rem;
      border: 0;
      background: rgb(239, 240, 244);
    }
  }
  .search-button {
    flex-basis: 10%;
    background: transparent;
    font-size: 1.5rem;
  }
`;
export default SearchBar;
