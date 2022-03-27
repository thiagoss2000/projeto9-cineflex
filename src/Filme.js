import { useState, useEffect } from "react";
//import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Filme.css";


export default function Filme() {

    const [filmes, setfilmes] = useState();
    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/1/showtimes`
        );  
        requisicao.then((res) => {
            setfilmes(res.data);
        });
    }, []);
    if (filmes === undefined){
        return <p>loading</p>
    }else{
        console.log(filmes.days[1]);
        return (
            <>
            <div className="subtitulo">
                <p>Selecione o horário</p>
            </div>
            {filmes.days.map((day) => {
                return (
                    <div className="horario" key={day.id}>
                        <p>{day.weekday} - {day.date}</p>
                        {day.showtimes.map((showtime) => {
                            return (<button 
                                className="hora" 
                                key={day.id + showtime.id}>
                                    {showtime.name}
                                </button>);     
                        })}     
                    </div>
                );
                })}
                <div className="espaco"></div>
                <div className="filmeSelecionado">
                    <img src={""} alt="img"></img>
                    <p>Enola Holmes</p>
                </div>
            </>
        );
    }
}