import styled from "styled-components";

export const Loading = styled.img `
    width: 180px;
    position: absolute;
    left: 100px;
    top: 45vh;
`;
////////////////App////////////////
export const Header = styled.div`
    width: 380px;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #C3CFD9;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        text-align: center;
        color: #E8833A;
    }
`;
///////////////Rota////////////////
export const Subtitulo = styled.div`
    padding-inline: 12px;
    width: 380px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #293845;     
    }
`;
export const Corpo = styled.div`
    padding-inline: 15px;
    width: 380px;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
`;
export const Filme = styled.div`
    margin-inline: 15px;
    margin-bottom: 11px;
    width: 145px;
    height: 209px;
    background: #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    img {
        margin: 8px;
        width: 129px;
        height: 193px;
        cursor: pointer;
    }
    img:hover {
        margin: 0;
        width: 100%;
        height: 100%;
    }
`;
//////////////Filme////////////////
export const Horario = styled.div`
    padding-inline: 15px;
    height: 124px;
    width: 380px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    p {
        margin-left: 8px;
        width: 100%;
        height: 35px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #293845;
    }
`;
export const Hora = styled.button`
    margin-left: 8px;
    width: 83px;
    height: 43px;
    background: #E8833A;
    display: flex;
    align-items: center;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #FFFFFF;
    }
`;
export const Espaco = styled.div`
    width: 380px;
    height: 117px;
`;
/////////////Assentos//////////////
export const AssentosCs = styled.div`
    padding-inline: 12px;
    width: 380px;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
export const AssentoCs = styled.button `
    margin-block: 9.5px;
    margin-inline: 4.5px;
    width: 26px;
    height: 25px;
    background: ${props => props.selecao};
    border: 1px solid ${props => props.border};;
    box-sizing: border-box;
    border-radius: 12px; 
    cursor: pointer;
`;
export const Indice = styled.div `
    padding-inline: 15px;
    width: 380px;
    margin-bottom: 35px;
    height: max-content; 
    display: flex;
    justify-content: space-evenly;
    div {
        width: max-content;
        height: min-content;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`;
export const Dados = styled.form `
    width: 380px;
    margin-bottom: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        margin-top: 7px;
        padding-inline: 24px;
    }
    label {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }
    input {
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
    button {
        margin-top: 57px;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    p{
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
export const FilmeSelecionado = styled.div `
    width: 380px;
    height: 117px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background: #9EADBA;
    display: flex;
    align-items: center;
    img {
        margin-left: 10px;
        border: 8px solid #E5E5E5;
        width: 48px;
        height: 72px;
    }
    div{
        background: #9EADBA;
        height: 100%;
    }
    p {
        margin-left: 14px;
        width: max-content;
        height: 40px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 30px;
        color: #293845;
    }
`;
////////////Comprovante/////////////
export const Sucesso = styled.div `
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
export const Confirmacao = styled(Sucesso) `
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
        background: #E8833A;
        border-radius: 3px;
        border: none;
        cursor: pointer;
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
export const Erro = styled(Confirmacao)`
    height: 300px;
    h4{
        text-align: center;
        margin-bottom: 10px;
    }
`;