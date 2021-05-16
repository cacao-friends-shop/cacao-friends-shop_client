import React from 'react';
import { css } from '@emotion/react';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import Input from 'components/atoms/Input';
import { useFormik } from 'formik';
import A11yHiddenHeading from 'components/atoms/A11yHiddenHeading';
import { colors, fontSizes } from 'theme';

const SearchBar = ({ ...restProps }) => {
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section css={container}>
      <A11yHiddenHeading comp="h1">검색창</A11yHiddenHeading>
      <form onSubmit={formik.handleSubmit}>
        <Icon name="search" size={32}></Icon>
        <Input
          type="search"
          id="search"
          name="search"
          title="search"
          className="search-input"
          onChange={formik.handleChange}
        ></Input>
        <Button className="search-button" {...restProps}>
          취소
        </Button>
      </form>
    </section>
  );
};

const container = css`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;

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
    left: 3rem;
    color: rgb(200, 201, 204);
  }

  .search-input {
    flex-basis: 90%;

    input {
      border-radius: 2.1rem !important;
      padding: 1.3rem 1.3rem 1.3rem 4.5rem !important;
      font-size: 1.6rem !important;
      border: 0;
      background: rgb(239, 240, 244);
    }
  }
  .search-button {
    flex-basis: 10%;
    background: transparent;
    font-size: ${fontSizes.sm_15};
    color: ${colors.black};
  }
`;
export default SearchBar;
