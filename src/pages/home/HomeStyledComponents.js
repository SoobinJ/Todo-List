import styled from 'styled-components';

export const HomeLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const LayoutLeft = styled.div`
  width: 24.7%;
  background: #e9e9e9;
  border-radius: 33px 0px 0px 33px;
  display: flex;
  flex-direction: column;
  #userName {
    font-family: Cabin-Bold; //확인필요!
    font-weight: 700;
    font-size: 3.5rem;
    margin-left: 3.5rem;
  }
  #setting {
    width: 3.5rem;
    margin-left: 3.5rem;
    margin-top: 7rem;
    cursor: pointer;
  }
`;
export const DeadLineAlarm = styled.div`
  background: #ffd737;
  margin-top: 3.1rem;
  display: flex;
  flex-direction: column;
  padding: 2.1rem 0 3.4rem 3.5rem;
  #deadlineTitle {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
  }
  #deadlineContent {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.1rem;
    margin-top: 2.1rem;
  }
`;
export const DateFolderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.7rem;
  margin-left: 3.5rem;
  height: 42rem;
`;
export const DateFolder = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 3.8rem;
  img {
    width: 3rem;
    margin-right: 2rem;
  }
  #date {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.1rem;
  }
`;

export const LayoutRight = styled.div`
  display: flex;
  width: 75.3%;
  flex-direction: column;
`;
export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.9rem;
  margin-left: 3.5rem;
  justify-content: space-between;
  #todayDate {
    font-weight: 700;
    font-size: 3.5rem;
  }
  #todoPlus {
    width: 2rem;
    margin-right: 6rem;
    cursor: pointer;
  }
`;
export const GoalInputContainer = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 2.8rem;
  width: 100%;
  input {
    border: none;
    height: 3rem;
    width: 53.5rem;
    margin-left: 3.7rem;
    font-weight: 500;
    font-size: 2rem;
  }
  input::placeholder {
    color: #ccc;
  }
  input:focus {
    outline: none;
  }
  hr {
    width: 53.5rem;
    margin-left: 3.7rem;
    border: 1px solid #ccc;
    border-bottom: 0;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  height: 50rem;
  margin-left: 3.8rem;
  margin-right: 5.9rem;
  justify-content: space-between;
  .cardState {
    width: 25rem;
  }
`;
export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 53rem;
  width: 25rem;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 2rem;
  .cardSectionTitle {
    color: ${(props) => props.color};
    margin-bottom: 2rem;
  }
`;
export const MemoContainer = styled.div`
  display: flex;
  margin-top: 3.9rem;
  margin-left: 3.8rem;
  margin-right: 5.9rem;
  justify-content: space-between;
`;
