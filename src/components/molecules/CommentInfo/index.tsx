import { useState } from 'react';
import { css } from '@emotion/react';
import TimeStemp from 'components/atoms/TimeStemp';
import { colors, fontSizes } from 'theme';
import IconLink from '../IconLink';

type CommentInfoProps = {
  /** 댓글을 작성한 날짜 */
  date: string;
  /** 댓글 좋아요 갯수 */
  likeCount: number;
} & React.HTMLAttributes<HTMLDivElement>;

const CommentInfo = ({ date, likeCount, ...restProps }: CommentInfoProps) => {
  const [like, setLike] = useState(false);

  return (
    <div css={container} {...restProps}>
      <TimeStemp time={date} />
      <IconLink
        iconName="outlineHeart"
        iconSize={15}
        to="/"
        type="leftIcon"
        css={linkStyle(like)}
        onClick={() => setLike(like => !like)}
      >
        좋아요
        {likeCount > 0 && <span>{likeCount}개</span>}
      </IconLink>
    </div>
  );
};

const container = css`
  display: flex;
  align-items: center;
`;

const linkStyle = (like: boolean) => css`
  color: ${like ? colors.pink : colors.gray};
  font-size: ${fontSizes.xxs_13};
  margin-left: 1.2rem;
  font-weight: bold;

  span {
    margin-left: 0.3rem;
  }
`;

export default CommentInfo;
