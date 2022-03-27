import { useState, useEffect } from "react";
//import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Rota.css";

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
        return <p>loading</p>
    }else{
        return (
            <>
            <div className="subtitulo">
                <p>Selecione o filme</p>
            </div>
            <div className="corpo">
                {filmes.map((filme) => {
                    return (
                        <div key={filme.id}className="filme">
                            <img src={filme.posterURL} alt={filme.title}></img>
                        </div>
                    )
                })}
            </div>
            </>
        );
    }
}