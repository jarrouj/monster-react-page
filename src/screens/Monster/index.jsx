import { useParams } from "react-router-dom"
import MONSTERS from '../../data/monsters.mock.json'

export const Monster=()=>{
    const {category, monster: id}=useParams();

    
    const monster= MONSTERS[0][category].find((m)=>{
        return m.id===parseInt(id);
    })

    const {name , username, email, phone, website}=monster

    return <div className="h-screen bg-gradient-to-b from-purple-600 to-orange-300 flex flex-col gap-4 text-white p-6">
        <h1 className="text-4xl font-italic">{name}</h1><h2 className="text-xl font-bold ">{username}</h2><p className="mt-6">Email: {email}</p> <p>Phone: {phone}</p><p>Website: {website}</p>  </div>
}