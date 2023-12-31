import './App.css';
import {Fragment, createElement} from "react";

function Button(props){
  return <button>{ props.text }</button>
}

function App() {

  const todos =["todo1","todo2","todo3"];

  // <Fragment>
        //Fragment nedir => normalde html taglerini bir root elementin sarmalaması lazım. Ama ben bir root elementin sarmalamasını istemiyorum. root elementi yerine fragment geldi. Bunun içinde yazınca sanki sarmalıyor gibi ama sarmalamamış şekilde kod çıktısı veriyor

      //  <></> bu da fragmentın kısa yolu boş bir şekilde
  // </Fragment>
  
  return (

    <main>
      <ul>
         {todos.map((x,index)=>(
          <li key={index}>{x}</li>
         ))}
      </ul>

      <h1 style={{color:'red',backgroundColor:'yellow'}}>Denemelere devam</h1> 
      {/* style verirken {{}} süslü parantezin içinde vermek lazım style ayarlarını */}

      <label htmlFor="focus">
        <input type='text' id='focus'/> Odaklanması için labela tıklayınca inputa focus yapıyor ya onun yerine htmlFor da yazabilirsin
      </label>   
          
      {'Bu örnekte, <label> elementinin "htmlFor" özelliği, "myInput" olarak ayarlanmış ve aynı "id" değeri, <input> elementinde de kullanılmıştır. Böylece "htmlFor" ile etiketlenen <label> elementine tıklandığında, <input> elementine odaklanılacaktır. Bu, özellikle erişilebilirlik (accessibility) açısından önemlidir, çünkü bu şekilde ekran okuyucular gibi araçlar doğru şekilde etiketlenmiş form elemanlarına odaklanabilir.'}

      {/* {} js ifadesi yazabilirsin süslü parantezin içerisinde */}

      <input type="text" onClick={() => alert("Bana el salla")} /> html taginde js fonks. kullanırken ilkharfi küçük sonraki harfi büyük olacak şekilde oluyor. 

      <Button text="Merhaba Recep"></Button>

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
