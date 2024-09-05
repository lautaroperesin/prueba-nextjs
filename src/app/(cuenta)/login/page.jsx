'use client';
import { useRouter } from "next/navigation";

export default function Login(){
    const router = useRouter();

    const handleClick = ()=>{
        router.push("/");
    }
    
    return(
        <>
        <h1>Iniciar Sesion</h1>
        <button onClick={handleClick}>Regresar al inicio</button>
        </>
    );
}