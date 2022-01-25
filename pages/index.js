function Titulo(props) {
    console.log(props);
    const Tag = props.tag;
    return (
        <>
            <Tag> {props.children} </Tag> <
                style jsx > {`
        ${Tag} {
            color: red;
            font-size:24px;
            font-weight: 600;
        }
    `} </style>
        </>

    );
}

//Componente React
function HomePage() {
    //JSX
    return (<div>
        <Titulo tag="h2"> Boas vindas de volta! </Titulo>
        <h2 > Discord - Alura Matrix </h2>

    </div>
    )
}

export default HomePage