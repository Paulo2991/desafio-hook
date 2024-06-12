import { useState } from "react";
import * as S from "./personagem-styled.jsx";

function Personagem({ dados }) {
  const [informacao,setInformacao] = useState(false);
  const { id, image, name, gender, species, status, origin, type} = dados;
  return (
    <>
      <S.Personagem key={id}>
        <img src={image} alt={`${name}`} />
        <h1>{name}</h1>
        <button onClick={() => setInformacao(true)}>
          {informacao ? "Menos" : "Mais"}
        </button>
        {informacao && (
          <S.Informacoes
            className={informacao ? "Activate" : ""}
            key={id}
          >
            <S.DescriptionInformation>
              <S.Close className="close" onClick={() => setInformacao(false)}>
                &times;
              </S.Close>
              <h1>{name}</h1>
              <h2>{gender}</h2>
              <p>
                {species}
                {status}
                {origin.name}
                {type} 
              </p>
            </S.DescriptionInformation>
          </S.Informacoes>
        )}
      </S.Personagem>
    </>
  );
}

export default Personagem;
