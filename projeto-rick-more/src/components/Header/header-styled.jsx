import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   list-style-type: none;
 }
`;

export const Header = styled.header`
  background-color: #0d9108;
  height: 25vh;
`;