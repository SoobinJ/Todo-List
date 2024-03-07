import styled from 'styled-components';

export const MemoLayout = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 18.5rem;
  height: 13.4rem;
  background: ${(props) =>
    props.state === 'plus' ? 'rgba(255, 215, 55, 0.2)' : '#ffd737'};
  justify-content: ${(props) =>
    props.state === 'plus' ? 'center' : 'flex-start'};
  border-radius: 1.2rem;
  padding: 1.3rem;
  box-sizing: border-box;
  white-space: normal;

  #memoTitle {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 0.7rem;
  }
  #memoContent {
    font-weight: 400;
    font-size: 1.5rem;
    width: 15.9rem;
    line-height: 1.8rem;
  }

  .plusMemoBox {
    width: 15.9rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 3rem;
    }
  }
`;
