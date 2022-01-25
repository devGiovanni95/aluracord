function Titulo(props) {
    console.log(props);
    return (
        <h1> props.children</h1>
    )
}

//Componente React
function HomePage() {
    //JSX
    return (
        <div>
            <Titulo>Boas vindas de volta!</Titulo>
            <h2>Discord - Alura Matrix</h2>
            <style jsx>{`
                h1 {
                    color: red;
                }
            `}</style>
        </div>
    )
  }
  
  export default HomePage