import styled, { createGlobalStyle } from 'styled-components';
import CabinRegular from '../assets/fonts/Cabin-Regular.ttf';
import CabinBold from '../assets/fonts/Cabin-Bold.ttf';
import CabinMedium from '../assets/fonts/Cabin-Medium.ttf';

const size = {
  mobile: '768px',
  desktop: '1440px',
};

export const device = {
  small: `(max-width: ${size.mobile})`,
};

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Cabin-Regular';
        src: url(${CabinRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Cabin-Bold';
        src: url(${CabinBold}) format('truetype');
        font-weight: '700';
        font-style: bold;
    }
    @font-face {
        font-family: 'Cabin-Medium';
        src: url(${CabinMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    html {
        font-size: 10px;
        -webkit-text-size-adjust: none;
    }

    body {
        user-select: none;
        background: white;
        margin: 0;
        padding: 0;
        font-family: 'Cabin-Regular', -apple-system, sans-serif, Roboto;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: hidden;
    }
`;

export const Layout = styled.div`
  display: flex;
  border: 3px solid #ccc;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: 3.3rem;
  flex-direction: column;
  align-items: center;
  //   우선 높이,너비 설정 이후 수정
  width: 122rem;
  height: 93.3rem;
`;
export const LayoutBtnContainer = styled.div`
  display: flex;
  margin: 3.9rem 0 3.6rem 3.6rem;
  align-self: flex-start;
`;
export const LayoutBtn = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.bg};
  border-radius: 50%;
  margin-right: 1.4rem;
`;
