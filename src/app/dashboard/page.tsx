"use client"
import Cookies from "js-cookie"
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter()
    const cerrar = () =>{
        Cookies.remove('login')
        router.push('/login')
    }
    return (
        <div>
            <h1>Soy el Dashboard</h1>
            <button onClick={cerrar}>CerrarSesion</button>
        </div>
    )
}