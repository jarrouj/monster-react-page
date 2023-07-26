import { Category } from "../Category"
import { Link } from "react-router-dom";

export const Directory=({categories})=>{
    return <div className="grid grid-cols-4 ">
        {categories.map((category)=>{
            const {label, path}= category;
            return <div key={label} className="flex flex-col space-y-2"><Link className="text-white text-lg hover:text-purple-200" to={path}>{label}</Link><Category category={category}/></div>
        })}
        </div>
}