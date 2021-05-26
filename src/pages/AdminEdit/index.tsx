import { Spinner } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { RootState } from 'modules';
import { getPost } from 'modules/posts/postsSlice';
import Error from 'pages/Error';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Template from './template';

type Params = {
  id: string;
};

const AdminEdit = () => {
  const { id } = useParams<Params>();
  const postId = parseInt(id, 10);

  const { loading, data, error } = useSelector(
    (state: RootState) =>
      state.posts.post[postId] || { data: null, loading: false, error: null }
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(parseInt(id, 10)));
  }, [dispatch, id]);

  if (loading && !data)
    return (
      <div css={spinnerStyle}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  if (error) return <Error />;
  if (!data) return null;

  return <Template id={postId} content={data} />;
};

const spinnerStyle = css`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
  padding: 30rem 0;

  div {
    padding: 5rem;
  }
`;

export default AdminEdit;
