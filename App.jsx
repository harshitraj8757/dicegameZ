import { useState } from "react";
import FrontPage from "./components /FrontPage";
import styled from "styled-components";
import GamePlay from "./components /GamePlay";
        


function App() {
   const [isGamestarted , getsetstarted] = useState(false) ;

   const toggleGamePlay = () => {
      getsetstarted((prev) => !prev);
   };

  return (
    <>
      { isGamestarted ? <GamePlay/> : <FrontPage 
         toggle= {toggleGamePlay}
      /> }
    </>
  )
}

export default App
