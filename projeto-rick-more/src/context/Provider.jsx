import { useState } from "react";

function Provider() {
   const [personagem, setPersonagens] = useState([]);
   const [error, setError] = useState(false);
   const [loding, setLoding] = useState(false);
    
   const dados = {
     personagem,
     setPersonagens
   };

  return (
    <div>
      {dados}
    </div>
  );
}

export default Provider;
