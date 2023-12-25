import './App.css';
import {createElement} from "react";


function App() {

  const todos =["todo1","todo2","todo3"];
  
  return (
    <main>
      <ul>
         {todos.map((x,index)=>(
          <li key={index}>{x}</li>
         ))}
      </ul>

      <h1 style={{color:'red',backgroundColor:'yellow'}}>Denemelere devam</h1>

      <label for="focus">
        <input type='text' id='focus'/> Odaklanması için labela tıklayınca inputa focus yapıyor ya onun yerine htmlFor da yazabilirsin
      </label>

          
      {'Bu örnekte, <label> elementinin "htmlFor" özelliği, "myInput" olarak ayarlanmış ve aynı "id" değeri, <input> elementinde de kullanılmıştır. Böylece "htmlFor" ile etiketlenen <label> elementine tıklandığında, <input> elementine odaklanılacaktır. Bu, özellikle erişilebilirlik (accessibility) açısından önemlidir, çünkü bu şekilde ekran okuyucular gibi araçlar doğru şekilde etiketlenmiş form elemanlarına odaklanabilir.'}


    </main>
  )
  
  // const h1=createElement("h1",null,"h1 elementi");
  // return createElement("main",{    
  //   id:"main",
  //   className:"test"
  // },h1);

  // return createElement("main",{   
  //     id:"main",
  //     className:"test"
  // },"Oluşturduğum html tagin içeriği");

}

export default App;
