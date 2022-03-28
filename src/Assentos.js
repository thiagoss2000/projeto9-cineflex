import { useState, useEffect } from "react";
//import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Comprovante from "./Comprovante";
import {Link} from "react-router-dom";
import {AssentosCs, AssentoCs, Indice, Dados} from "./Styles"
import {nome as nameUsr, Assentos as assentosMark, Cpf} from "./temp";

export default function Assentos() {

    const [assentos, setAssentos] = useState();
    const [CPF, setCPF] = useState("");
    const [nome, setNome] = useState("");
    const [assentoSelec, setAssentoSelec] = useState([]);
   
    nameUsr.shift();
    Cpf.shift();
    assentosMark.shift();

    function selecionarAssento(assento) {
        if(assentoSelec.includes(assento)) {
            let assentosSelecionados = [...assentoSelec];
            assentosSelecionados.splice(assentosSelecionados.indexOf(assento), 1);
            setAssentoSelec(assentosSelecionados);
        }else{
            let assentosSelecionados = [...assentoSelec];
            assentosSelecionados.push(assento);
            setAssentoSelec(assentosSelecionados);
        }
    }

    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/40/seats`
        );  
        requisicao.then((res) => {
            setAssentos(res.data);
        });
    }, []);
    if (assentos === undefined){
        return <p>loading</p>
    }else{
        // console.log(assentos.seats[2].isAvailable);
        return (
            <>
            <div className="subtitulo">
                <p>Selecione o(s) assento(s)</p>
            </div>
                <AssentosCs>
                    {assentos.seats.map((seat) => {
                        let selecao = (assentoSelec.includes(seat.name)? "#8DD7CF" : (seat.isAvailable? '#C3CFD9' : '#FBE192'));
                        let border = (assentoSelec.includes(seat.name)? "#45BDB0" : (seat.isAvailable? '#808F9D' : '#F7C52B'));
                        return (<AssentoCs onClick={() => (seat.isAvailable? selecionarAssento(seat.name):[])}
                            selecao={selecao} 
                            border={border}
                            key={seat.id}>
                                {seat.name}
                            </AssentoCs>);     
                    })}     
                </AssentosCs>
                <Indice>
                    <div><AssentoCs selecao="#8DD7CF" border="#45BDB0"></AssentoCs><p>Selecionado</p></div>
                    <div><AssentoCs selecao="#C3CFD9" border="#808F9D"></AssentoCs><p>Disponível</p></div>
                    <div><AssentoCs selecao="#FBE192" border="#F7C52B"></AssentoCs><p>Indisponível</p></div>
                </Indice>
                <Dados 
                    onSubmit={(event) => {
                    Comprovante(CPF, nome, assentoSelec);
                    event.preventDefault();
                    }}
                >
                    <label>Nome do comprador:</label>
                    <input
                        type="text"
                        placeholder="Digite seu Nome..."
                        onChange={(event) => setNome(event.target.value)}
                        value={nome}
                        required
                    ></input>
                    <label>CPF do comprador:</label>
                    <input
                        type="CPF"
                        placeholder="Digite seu CPF..."
                        onChange={(event) => setCPF(event.target.value)}
                        value={CPF}
                        required
                    ></input>
                    <button onClick={() => {
                        nameUsr.push(nome);
                        Cpf.push(CPF);
                        assentosMark.push([...assentoSelec]);
                    }} > <Link to={"/comp"} style={{ textDecoration: 'none' }}>
                        <p>Reservar assento(s)</p>
                        </Link></button>
                </Dados>
                <div className="filmeSelecionado">
                    <img src={assentos.movie.posterURL} alt="img"></img>
                    <div>
                    <p>{assentos.movie.title}</p>
                    <p>{assentos.day.weekday} - {assentos.day.date}</p>
                    </div>
                </div>
            </>
        );
    }
}
