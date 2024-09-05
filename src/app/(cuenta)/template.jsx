'use client';
import { useState } from "react";

// Aca se explicó las diferencias entre layout y template
export default function PerfilTemplate({children}){
    const [input, setInput] = useState("");

    const handlerChange = (e)=>{
        setInput(e.target.value);
    }

    return(
        <>
        <h2>Rutas relativas a la cuenta del usuario</h2>
        {children}
        <input type="text" value={input} onChange={handlerChange}/>
        </>
    );
}