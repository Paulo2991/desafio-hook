import Consumo from "../Api/Consumo.jsx";
import * as S from "./personagens-styled.jsx";

function Personagens() {
  return (
    <>
      <S.Personagens>
        <S.Personagem>{Consumo("character")}</S.Personagem>
      </S.Personagens>
    </>
  );
}

export default Personagens;
