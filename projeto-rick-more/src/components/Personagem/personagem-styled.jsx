import styled from "styled-components";

export const Personagem = styled.div`
  width: 30%;
  height: 30%;
  padding: 25px;
  background-color: white;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 25vw;
    height: 25vh;
  }

  h1,h2{
    font-weight: bold;
    text-align: center;
  }

  p{
    font-weight: bold;
    text-align: center;
    word-wrap: break-word;
    font-size: 20px;
  }

  button {
    width: 10em;
    height: 2em;
    background-color: green;
    color: white;
    text-align: center;
  }
`;

export const Informacoes = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  &.Activate{
    display: block;
  }
`;

export const DescriptionInformation = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px 0 60px;
  border: 1px solid #888;
  width: 80%;
  max-width: 900px;
  border-radius: 5px;
`;

export const Close = styled.span`
  color: #54595e;
  float: right;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  &.close {
    color: black;
  }
`;
