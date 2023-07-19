//App.tsx
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { useRecoilValue, useSetRecoilState } from "recoil"; 
import { isDarkAtom } from "./recoil/atoms";


const GlobalStyle = createGlobalStyle`
body {
  color:${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
}
p {
  text-align: center;
}
div {
  padding: 10px; 
  border: 2px solid ${(props) => props.theme.borderColor};
}
`;

function App() {
  const darkMode = useRecoilValue(isDarkAtom); 
  const setDarkMode = useSetRecoilState(isDarkAtom); 
  console.log(darkMode)
  const darkModeHandler = () => {
    setDarkMode((prev:any) => !prev); 
  }; 

  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <button onClick={darkModeHandler}>
        클릭
      </button>
      <div>
        <p>다크모드 테스트</p>
      </div>
    </ThemeProvider>
  );
}

export default App;


