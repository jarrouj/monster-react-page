import { useNavigate } from "react-router-dom"

export const Category=({category})=>{
    const {path, imageUrl}= category;
   const navigate=useNavigate();
    return <div style={{backgroundImage:`url(${process.env.PUBLIC_URL+ imageUrl})`}} onClick={()=>{
        navigate(path)
    }} className="w-64 h-48 rounded-md shadow-sm bg-cover bg-center hover:scale-105 hover:shadow-none cursor-pointer active:scale-100 transition-all  mt-2"></div>
}