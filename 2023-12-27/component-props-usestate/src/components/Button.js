// function Button(props){
//     return (
//         <button>{props.text}</button>
//     )
// }

function Button({text}){ //destractive yapı ile props a ihtiyaç duymadan propslara erişebilirim.
    return (
        <button>{text}</button>
    )
}

export default Button;