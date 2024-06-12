import { useEffect, useState } from "react";
import Api from "./Api";
import Personagem from "../Personagem/Personagem";

function Consumo(query) {
  const [personagem,setPersonagens] = useState([]);
  const [error,setError] = useState(false);
  const [loding,setLoding] = useState(false);
  
   useEffect(() => {
    const fetchData = async () => {
      try {
        setLoding(true);
        Api(query).then((results) => {
          setPersonagens(results);
          console.log(results);
        });
      } catch (error) {
        console.error("Api não carrgou os dados:", error);
        setError(error.message);
      } finally {
        setLoding(false);
      }
    };
     fetchData();
   }, [query]);

  return (
    <>
      {error && <p>{error}</p>}
      {loding && <p>Carregando...</p>}
      {personagem.map((personagens) => {
        return <Personagem key={personagens.id} dados={personagens}/>;
      })}
    </>
  );
}

export default Consumo;
