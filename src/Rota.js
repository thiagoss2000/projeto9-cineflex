import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {Loading, Subtitulo, Corpo, Filme} from "./Styles"
import loading from "./assets/Rolling-1s-187px.svg"

export default function Rota() {

    const [filmes, setfilmes] = useState({});
    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies`
        );  
        requisicao.then((res) => {
            setfilmes(res.data);
        });
    }, []);

    if (filmes.length === undefined){
        return <Loading src={loading} alt="loading..."></Loading>
    }else{
        return (
            <>
            <Subtitulo>
                <p>Selecione o filme</p>
            </Subtitulo>
            <Corpo>
                {filmes.map((filme) => {
                    return (
                        <Link to={`/filme/${filme.id}`} key={filme.id} >
                            <Filme>
                                <img src={filme.posterURL} alt={filme.title}></img>
                            </Filme>
                        </Link>
                    )
                })}
            </Corpo>
            </>
        );
    }
}