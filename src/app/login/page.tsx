"use client"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();
    const hola = () =>{
        Cookies.set('login', "true");
        router.push('/dashboard');
    }
    return(
       <div>
         <h1>SOy el login</h1>
         <button onClick={hola}>Entrar</button>
       </div>
    )
}