import React from 'react';
import { MemoLayout } from './MemoStyledComponents';

function Memo({ title, content }) {
  return (
    <MemoLayout>
      <div id="memoTitle">{title}</div>
      <div id="memoContent">{content}</div>
    </MemoLayout>
  );
}
export default Memo;
