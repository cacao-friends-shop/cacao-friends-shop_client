import DeletebarBase from '.';

export default {
  component: DeletebarBase,
  title: 'molecules/DeletebarBase',
};

// 기본 타임스템프
export const DefaultDeletebarBase = () => (
  <DeletebarBase deleteMsg="전체삭제">최근 50개까지 저장됩니다.</DeletebarBase>
);
