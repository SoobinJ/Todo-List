import styled from 'styled-components';
import { MemoLayout } from '../../components/home/MemoStyledComponents';

export const AddToDoLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const MiniMemoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7.7rem 0 0 3.8rem;
  ${MemoLayout} {
    margin-bottom: 2rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3.9rem 3.9rem 2rem 4.1rem;
  #date {
    font-size: 2rem;
    font-weight: 400;
    color: #aaa;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3.9rem;
`;
export const TitleInputContainer = styled.div`
  width: 100%;
  margin-bottom: 1.8rem;
  input {
    border: none;
    font-weight: 500;
    font-size: 5rem;
    margin-bottom: 3rem;
  }
  input::placeholder {
    color: #555;
  }
  input:focus {
    outline: none;
  }
  hr {
    border: 3px solid #ccc;
    border-bottom: 0;
  }
`;
export const ContentInputContainer = styled.div`
  width: 100%;
  textarea {
    width: 100%;
    height: 62rem;
    font-size: 2rem;
    font-family: Cabin-Regular;
    background: none;
    border: none;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }
`;
