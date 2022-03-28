import axios from "axios";
import {Sucesso, Confirmacao, Erro} from "./Styles"
import {nome, Cpf, Assentos} from "./temp";
import {Link} from "react-router-dom";

export default function Comprovante() {
    if (Assentos[0].length === 0){
        return (
        <Erro>
            <h4>Houve uma falha na aquisição dos dados!</h4>
            <h4>Preencha todos os campos e tente novamente!</h4>
            <button onClick={() => window.history.back()}>
                    <p>Escolher assentos</p>
            </button>
        </Erro>        
        );
    }else{
        let errorr = false;
        const obj = {
            ids: Assentos[0],
            name: nome[0],
            cpf: Cpf[0]
        }
        axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', obj)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            errorr = true;
        });
        if(!errorr) {
            return (
                <>
                <Sucesso>
                    <h1>Pedido feito</h1>
                    <h1>com sucesso!</h1>
                </Sucesso>
                <Confirmacao>
                    <h1>Filme e sessão</h1>
                    <h4>Enola Homes</h4>
                    <h4>24/06/2021 15:00</h4>
                    <div></div>
                    <h1>Ingressos</h1>
                    {Assentos[0].map((assento) => {
                        return (
                            <h4 key={assento}>Assento {assento}</h4>
                        );
                    })}
                    <div></div>
                    <h1>Comprador</h1>
                    <h4>Nome: {nome}</h4>
                    <h4>CPF: {Cpf}</h4>
                    <button>
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <p>Voltar pra Home</p>
                        </Link>
                    </button>
                </Confirmacao>
                </>
            );
        }else{            
            return (
                <Erro>
                    <h4>Falha ao tentar enviar os dados!</h4>
                    <button>
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <p>Voltar pra Home</p>
                        </Link>
                    </button>
                </Erro>        
                );
        }
    }
}
