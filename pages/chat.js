import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import{ createClient} from '@supabase/supabase-js'

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQxNjk0OSwiZXhwIjoxOTU4OTkyOTQ5fQ.26PzmksE_t4ybxWnh1S5SN8Buocomy4zK5fhlow2cUI';
const SUPABASE_URL = 'https://aphwwcfcjrxxnmhczfmk.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

    // Sua lógica vai aqui
    //Usuário 
    /*
    -Usuário digita no campo textArea
    -Aperta enter para enviar
    -Tem que adicionar o texto na listagem

    //Dev
    - [x] Campo criado
    - [x] Vamos uasr o onChange usa o useState(ter if para caso seje enter pra limpar a variavel)
    - [ ] Listar mensagens
    */

    // ./Sua lógica vai aqui



    // React.useEffect(() => {

    //    supabaseClient
    //         .from('mensagens')
    //         .select('*')
    //         .then((dados)=> {
    //     console.log('Dados da Consulta: ',dados)
    //     setListaDeMensagens(dados.data);
    // });
    // }, [listaDeMensagens]);


       React.useEffect(() => {

       supabaseClient
            .from('mensagens')
            .select('*')
            .order('id', { ascending: false})
            .then(({ data })=> {
        console.log('Dados da Consulta: ',data);
        setListaDeMensagens(data)
    });
    }, [listaDeMensagens]);


    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            // id: listaDeMensagens.length + 1,
            de: 'devGiovanni95',
            texto: novaMensagem,
        };

          supabaseClient
            .from('mensagens')
            .insert([
                //Tem que ser um objeto com os mesmos campos que voce escreveu no supabase
                mensagem
            ])
            .then(({ data })=> {
                console.log('Criando mensagem: ',data);
                setListaDeMensagens([
                    data[0],
                    ...listaDeMensagens,
                ])
            });

        // supabaseClient
        //     .from('mensagens')
        //     .insert([
        //         //Tem que ser um objeto com os mesmos campos que voce escreveu no supabase
        //         mensagem
        //     ])
        //     .then((oQueVemDeResposta)=> {
        //         console.log('Criando mensagem: ',oQueVemDeResposta);
        //     });


        //CHAMADA DE UM BACKEND
        // setListaDeMensagens([
        //     mensagem,
        //     ...listaDeMensagens,
        // ]);
        setMensagem('');
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://img.olhardigital.com.br/wp-content/uploads/2021/11/One-Piece-Sem-Borda.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >
                    {/* novo nome    nome na function */}
                    <MessageList mensagens={listaDeMensagens} />


                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField

                            value={mensagem}
                            onChange={(event) => {
                                console.log(event)
                                const valor = event.target.value;
                                setMensagem(valor);
                            }}
                            //pegando o botao que apertamos no teclado
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    // para ele nao pular linha automaticamente e deixar a mensagem padrão de "insira sua mensagem aqui"
                                    event.preventDefault();
                                    console.log(event);

                                    handleNovaMensagem(mensagem);

                                }
                            }}

                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log(props.listaDeMensagens);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >

            {props.mensagens.map((mensagem) => {
                return (

                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.de}.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                                {/* vanessametonini */}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {mensagem.texto}
                        {/* Mensagem teste */}
                    </Text>
                )
            })}

        </Box>
    )
}