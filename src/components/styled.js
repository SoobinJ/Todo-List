import { createGlobalStyle } from 'styled-components';
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
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Cabin-Bold';
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
