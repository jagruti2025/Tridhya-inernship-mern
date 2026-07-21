import { useState } from "react";
import ThemeBox from "./componets/ThemeBox";
import NameForm from "./componets/NameForm";

function App(){

  return(
    <div>
      <ThemeBox/>
      <br></br>
      <NameForm/>
    </div>
  );
}

export default App;