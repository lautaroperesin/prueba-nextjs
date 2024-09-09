'use client';
import Prediccion from "@/components/Prediccion";
import {useState} from "react";

export default function Predicciones(){
    const [fecha, setFecha] = useState(16);

    const handlerClickFechaMas = () =>{
        setFecha(fecha + 1);
    }
    
    const handlerClickFechaMenos = () =>{
        setFecha(fecha - 1);
    }
    return(
        <>
        <h1>Pagina de Predicciones</h1>
        <h2>Partidos de la fecha {fecha}</h2>
        <Prediccion local="Boca" visitante="River"/>
        <Prediccion local="Racing" visitante="Independiente"/>
        <aside>
            <p>Seleccionar fecha</p>
            <button onClick={handlerClickFechaMas}>+</button>
            <button onClick={handlerClickFechaMenos}>-</button>
        </aside>
        </> 
    );
}