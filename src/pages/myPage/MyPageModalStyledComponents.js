import styled from 'styled-components';
import { LayoutBtn } from '../../components/styled';

export const ModalLayout = styled.div`
  position: fixed;
  top: 10%;
  display: flex;
  flex-direction: column;
  width: 74.3rem;
  border-radius: 3.3rem;
  background-color: #fff;
  justify-content: flex-start;
  ${LayoutBtn} {
    cursor: pointer;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5.1rem 2.3rem 3.5rem;
  & #userName {
    font-size: 4rem;
    font-weight: 700;
  }
`;

export const ContentBox = styled.div`
  width: 68.6rem;
  height: 43rem;
  display: flex;
  flex-direction: column;
  margin: 0 2.7rem;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 33px;
`;
export const UserSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const UserSettingTitleContainer = styled.div`
  margin: 2.6rem 0 1.5rem 4.3rem;
  display: flex;
  align-items: center;
  #title {
    font-size: 2rem;
    font-weight: 700;
    margin-right: 3rem;
  }
  #subtitle {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;
export const UserSettingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  margin-bottom: 1.6rem;
`;

export const UserSettingInput = styled.input`
  width: 20rem;
  height: 4.8rem;
  text-align: center;
  border: 1px solid #1e1e1e;
  font-size: 2.5rem;
  font-weight: 700;
  border-radius: 1rem;
`;
export const BottomContainer = styled.div`
  display: flex;
  margin: 4.8rem 5.1rem 5.7rem 3.5rem;
  justify-content: flex-end;
  font-size: 1.8rem;
  font-weight: 700;
  #logout,
  #withdrawal {
    cursor: pointer;
  }
`;
