import { redirect } from 'next/navigation';

async function fetchTeam(id: any) {
    if(id > 900){
        redirect('/dashboard')
    }
}

export default async function Profile({ params }: any) {
    console.log(params.id)
    const team = await fetchTeam(params.id);
    return <h1>Hola</h1>
    // ...
}