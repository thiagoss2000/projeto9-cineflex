import styled from "styled-components";


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
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        margin-top: 7px;
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