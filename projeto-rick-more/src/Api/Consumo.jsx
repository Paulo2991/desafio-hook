import { useEffect, useState } from "react";
import Api from "./Api";

function Consumo() {
  const [personagem,setPersonagens] = useState([]);
  const [error,setError] = useState(false);
  const [loding,setLoding] = useState(false);
  
  try{
    useEffect(() => {
      setLoding(true);
      Api("character").then((results) => {
        setPersonagens(results);
        setLoding(false);
        console.log(results);
      });                 
  },[]);                         
  }catch(error){
    console.error("Api não carrgou os dados:", error);
    setError(error.message);                           
  }

  return (
      <>
        {error && <p>Api não carregou os dados</p>}
        {loding && <p>Carregando...</p>}
        {personagem.map((personagens => {
           return (
             <div key={personagens.id}>
               <img src={personagens.image} />
             </div>
           ); 
        }))}
      </>                      
  )
}

export default Consumo;
