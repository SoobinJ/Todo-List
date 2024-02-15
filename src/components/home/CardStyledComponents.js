import styled from 'styled-components';

export const CardLayout = styled.div`
  cursor: pointer;
  width: 24rem;
  height: 9.4rem;
  border: 1px solid #bdbdbd;
  border-radius: 1.2rem;
  display: flex;
  background: #fff;
  box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.25);
  margin-bottom: 1.8rem;
`;

export const ProceedingState = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  box-shadow: ${(props) =>
    props.cardState === 'proceeding'
      ? '0 0 0 5px #ffd737 inset'
      : '0 0 0 1px #ffd737 inset'};
  background: ${(props) =>
    props.cardState === 'complete' ? '#FFD737' : '#fff'};
  border-radius: 50%;
  margin: 1.7rem 1rem 0 1.2rem;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  #cardTitle {
    font-size: 1.8rem;
    line-height: 2.1rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
    margin-top: 1.5rem;
  }
  #cardDeadline,
  #cardContent {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4rem;
    color: #1e1e1e;
  }
`;
