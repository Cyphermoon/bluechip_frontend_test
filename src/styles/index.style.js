import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary_50: "#F9F5FF",
    primary_100: "#F4EBFF",
    primary_200: "#E9D7FE",
    primary_300: "#D6BBFB",
    primary_600: "#7F56D9",
    primary_700: "#6941C6",
    primary_800: "#53389E",
    error_50: " #FEF3F2",
    error_500: "#F04438",
    error_700: "#B42318",
    success_50: " #ECFDF3",
    success_500: "#12B76A",
    success_700: "#027A48",
    gray_50: "#F9FAFB",
    gray_100: "#F2F4F7",
    gray_200: "#EAECF0",
    gray_300: "#D0D5DD",
    gray_400: "#98A2B3",
    gray_500: "#667085",
    gray_700: "#344054",
    gray_900: "#101828",
    white: "#fff"

  },

  breakpoints: {
    tablet: "768px",
    mobile: "375px"
  },

  typeScale: {
    display_sm: "1.875rem",   /* 30px */
    display_md: "2.25rem",    /* 36px */
    text_md: "1rem",          /* 16px */
    text_sm: "0.875rem",      /* 14px */
    text_xs: "0.75rem",       /* 12px */
  },

  radius: {
    xs: '0.25rem',      // 4px
    sm: '0.5rem',       // 8px
    md: '0.65rem',     // 10px
    lg: '0.75rem',      // 12px
    xl: '0.875em',    // 14px
  },

  shadows: {
    button: "0 0 .125rem #3c3c3c",
    overlay: `0 1rem 1.5rem 0 #223c5028`,
    card: "0 0 .625rem rgb(0 0 0 / 5%)",
    dropdown: `0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 2px 6px 2px rgb(60 64 67 / 15%)`,
    cardx: "0 0.12rem 0.12rem 0.05rem #d6cccc90",
  },

  spacing: {
    xs: '0.25rem',      // 4px
    sm: '0.5rem',       // 8px
    md: '0.75rem',     // 12px
    lg: '	1rem',      // 16px
    xl: '	1.5rem',    // 24px
    xxl: '1.75rem',  // 28px
    xxxl: '2.25rem'       //38px
  }
};

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img{
      display:block;
      max-width:100%;
    }

    a{
      text-decoration: none;
    }

    ul{
        padding:0;
        margin:0;
        list-style: none;
    }

    button{
      outline:none;
      border:none;
    }

    /*Typography*/

    h1{
      font-size:${theme.typeScale.display_md};
      font-weight:600;
      line-height:1.2;
    }

    h2{
      font-size:${theme.typeScale.display_sm};
      font-weight:500;
      line-height:1.2;
      color:${theme.colors.gray_900}
    }

    p{
      font-size:${theme.typeScale.text_sm};
      font-weight:400;
      line-height:1.5;
    }

    small{
      font-size: ${theme.typeScale.text_xs};
      font-weight:500;
      line-height:1.5;
    }

    html{
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        line-height:1.5;
        color: ${theme.colors.gray_500};

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            font-size: 16px;
        }
    }
`;

export default styled;
