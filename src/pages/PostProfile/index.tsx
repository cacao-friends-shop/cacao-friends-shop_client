import Template from './template';

type PostProfileProps = {
  title: string;
  imgURL: string;
  desc: React.ReactFragment;
};

const PostProfile = ({ title, imgURL, desc }: PostProfileProps) => {
  return <Template title={title} imgURL={imgURL} desc={desc} />;
};

export default PostProfile;
