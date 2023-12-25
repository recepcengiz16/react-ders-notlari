import './App.css';
import {createElement} from "react";


function App() {

  const h1=createElement("h1",null,"h1 elementi");

  return createElement("main",{    
    id:"main",
    className:"test"
  },h1);

  // return createElement("main",{
      
  //     id:"main",
  //     className:"test"
  // },"Oluşturduğum html tagin içeriği");

}

export default App;
