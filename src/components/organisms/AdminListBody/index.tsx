import React from 'react';
import { css } from '@emotion/react';
import ControlBar from 'components/organisms/ControlBar';
import List from 'components/molecules/List';
import { colors } from 'theme';

const AdminListBody = () => {
  return (
    <div css={style_bodyContainer}>
      <ControlBar className="control" />
      <ul className="list-table">
        <List
          title="라이언 복근만들기 프로젝트"
          likeCount={3}
          writer="jiwon"
          date="2020-05-19 17:27"
          commentsCount={360}
        />
        <List
          title="라이언 복근만들기 프로젝트"
          likeCount={3}
          writer="jiwon"
          date="2020-05-19 17:27"
          commentsCount={360}
        />
        <List
          title="라이언 복근만들기 프로젝트"
          likeCount={3}
          writer="jiwon"
          date="2020-05-19 17:27"
          commentsCount={360}
        />
        <List
          title="라이언 복근만들기 프로젝트"
          likeCount={3}
          writer="jiwon"
          date="2020-05-19 17:27"
          commentsCount={360}
        />
        <List
          title="라이언 복근만들기 프로젝트"
          likeCount={3}
          writer="jiwon"
          date="2020-05-19 17:27"
          commentsCount={360}
        />
        <List
          title="라이언 복근만들기 프로젝트"
          likeCount={3}
          writer="jiwon"
          date="2020-05-19 17:27"
          commentsCount={360}
        />
        <List
          title="라이언 복근만들기 프로젝트"
          likeCount={3}
          writer="jiwon"
          date="2020-05-19 17:27"
          commentsCount={360}
        />
        <List
          title="라이언 복근만들기 프로젝트"
          likeCount={3}
          writer="jiwon"
          date="2020-05-19 17:27"
          commentsCount={360}
        />
        <List
          title="라이언 복근만들기 프로젝트"
          likeCount={3}
          writer="jiwon"
          date="2020-05-19 17:27"
          commentsCount={360}
        />
        <List
          title="라이언 복근만들기 프로젝트"
          likeCount={3}
          writer="jiwon"
          date="2020-05-19 17:27"
          commentsCount={360}
        />
      </ul>
    </div>
  );
};

const style_bodyContainer = css`
  .control {
    margin-bottom: 0.5rem;
  }
  .list-table {
    max-height: 710px;
    border: 1px solid ${colors.gray};

    li:last-child {
      border-bottom: none;
    }
  }
`;

export default AdminListBody;
