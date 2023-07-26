import { useNavigate } from "react-router-dom"

import './home.styles.css'

export const Home=()=>{

    const navigate=useNavigate();

    const handleNavigate=()=>{
        navigate('monsters')
    }

    return <div className="flex items-centers justify-center">
        <button className=" border border-purple-600 text-purple-600 text-md rounded-lg px-4 py-2 focus:outline-none hover:bg-purple-600 hover:text-white mt-32 transition-all " onClick={handleNavigate} >Checkout Monsters page</button>
    </div>
}