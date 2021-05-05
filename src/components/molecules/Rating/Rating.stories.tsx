import Rating from '.';

export default {
  component: Rating,
  title: 'molecules/Rating',
};

// 기본 액션 바
export const RatingBlock = () => <Rating numOfReviews={4.8} />;
