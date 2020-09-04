import { css } from "@emotion/react";

/* prettier-ignore */
export const injectGlobalStyles = () => css`
  @font-face {
    font-family: 'mono';
    src: url('/static/SFMono-Medium.woff');
  }

  @font-face {
    font-family: 'mono-bold';
    src: url('/static/SFMono-Bold.woff');
  }

  @font-face {
    font-family: 'inter-regular';
    src: url('/static/Inter-Regular.woff');
  }

  @font-face {
    font-family: 'inter-semi-bold';
    src: url('/static/Inter-SemiBold.woff');
  }

  @font-face {
    font-family: 'inter-medium';
    src: url('/static/Inter-Medium.woff');
  }

  @font-face {
    font-family: 'fira-code-regular';
    src: url('/static/FiraCode-Regular.woff');
  }

  @font-face {
    font-family: 'fira-code-bold';
    src: url('/static/FiraCode-Bold.woff');
  }

  @font-face {
    font-family: 'jet-brains-regular';
    src: url('/static/JetBrainsMono-Regular.woff');
  }

  @font-face {
    font-family: 'jet-brains-bold';
    src: url('/static/JetBrainsMono-Bold.woff');
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html, body {
    background: #111;
    color: white;
    font-size: 16px;
    font-family: 'mono', helvetica neue, helvetica, sans-serif;
    scrollbar-width: none;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    @media (max-width: 832px) {
      font-size: 10px;
    }

    ::-webkit-scrollbar {
      display: none;
    }
    
    -webkit-font-feature-settings: "liga"1, "ss01"1, "zero"1, "cv11"1, 'frac'1, 'calt'1, 'tnum'1;
    -moz-font-feature-settings: "liga"1, "ss01"1, "zero"1, "cv11"1, 'frac'1, 'calt'1, 'tnum'1;
    -ms-font-feature-settings: "liga"1, "ss01"1, "zero"1, "cv11"1, 'frac'1, 'calt'1, 'tnum'1;
    font-feature-settings: "liga"1, "ss01"1, "zero"1, "cv11"1, 'frac'1, 'calt'1, 'tnum'1;
  }
`;
