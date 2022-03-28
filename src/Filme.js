import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {Loading, Subtitulo, Horario, Hora, Espaco, FilmeSelecionado} from "./Styles"
import loading from "./assets/Rolling-1s-187px.svg"

export default function Filme() {
    
    const { idFilme } = useParams();
    
    const [filmes, setfilmes] = useState();

    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        );  
        requisicao.then((res) => {
            setfilmes(res.data);
        });
    }, []);
    if (filmes === undefined){
        return <Loading src={loading} alt="loading..."></Loading>
    }else{
        return (
            <>
            <Subtitulo>
                <p>Selecione o horário</p>
            </Subtitulo>
            {filmes.days.map((day) => {
                return (
                    <Horario key={day.id}>
                        <p>{day.weekday} - {day.date}</p>
                        {day.showtimes.map((showtime) => {
                            return (<Hora 
                                className="hora" 
                                key={day.id + showtime.id}>
                                    <Link to={`/assentos/${showtime.id}`} style={{ textDecoration: 'none' }}>
                                        <p>{showtime.name}</p>
                                    </Link>
                                </Hora>);     
                        })}     
                    </Horario>
                );
                })}
                <Espaco></Espaco>
                <FilmeSelecionado>
                    <img src={filmes.posterURL} alt="img"></img>
                    <p>{filmes.title}</p>
                </FilmeSelecionado>
                {/* <div>
                    <p1>{filmes.overview}</p1>
                </div> */}
            </>
        );
    }
}