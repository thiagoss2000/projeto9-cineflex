import "./Filme.css";
import styled from "styled-components";
import {nome, Cpf, Assentos} from "./temp";
import {Link} from "react-router-dom";


export default function Comprovante() {
    if (Assentos[0].length === 0){
        return (
        <Erro>
            <h4>Houve uma falha na aquisição dos dados!</h4>
            <h4>Preencha todos os campos e tente novamente!</h4>
            <button>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <p>Escolher assentos</p>
                </Link>
            </button>
        </Erro>        
        );
    }else{
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
    }
}

const Sucesso = styled.div `
    width: 380px;
    height: 110px;
    padding: 29px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
    }
`;
const Confirmacao = styled(Sucesso) `
    height: max-content;
    align-items: flex-start;
    h1{
        color: #293845;
        margin-bottom: 10px;
    }
    h4{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #293845;
    }
    div{height: 25px;}
    button{
        margin-top: 70px;
        margin-inline: auto;
        width: 225px;
        height: 42px;
    }
    p{
        margin: auto;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }
`;
const Erro = styled(Confirmacao)`
    height: 300px;
    h4{
        text-align: center;
        margin-bottom: 10px;
    }
`;