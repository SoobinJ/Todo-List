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
  align-items: center;
  #contentContainer {
    margin: 1.3rem;
  }
  #memoTitle {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 0.7rem;
  }
  #memoContent {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
  img {
    width: 3rem;
  }
`;
