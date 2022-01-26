import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import { dark, light } from "./theme";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atom";

const GlobalCss = createGlobalStyle`
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
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
  box-sizing:border-box;
}
body{
  font-family: 'Fuzzy Bubbles', cursive;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  padding: 20px 30px;
}
a{
  text-decoration:none;
  color:inherit;
}
`;

const ToggleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

function App() {
  const isDarkMode = useRecoilValue(isDarkAtom);
  const setIsDarkMode = useSetRecoilState(isDarkAtom);

  return (
    <>
      <ToggleContainer>
        <DarkModeToggle
          checked={isDarkMode}
          onChange={setIsDarkMode}
          size={50}
        />
      </ToggleContainer>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <GlobalCss />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
