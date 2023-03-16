import React from 'react';
import { MemoLayout } from './MemoStyledComponents';

function Memo() {
  return (
    <MemoLayout>
      <div id="contentContainer">
        <div id="memoTitle">memo</div>
        <div id="memoContent">
          블라블라메모메모메모메모메모메모.................메모!!!~~~~~~
        </div>
      </div>
    </MemoLayout>
  );
}
export default Memo;
