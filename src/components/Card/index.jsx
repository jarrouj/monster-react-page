import React from 'react';
import './card.styles.css';
import { useNavigate } from 'react-router-dom';

export const Card=({item})=>{

    const {id, name, email}= item;
    const navigate=useNavigate();

    return (
        <div onClick={()=> navigate(`${id}`)} className="flex overflow-hidden break-words flex-col space-y-2 w-full md:w-64 mb-2 rounded-lg px-6 py-4 text-white text-md shadow-md bg-purple-600 hover:scale-105 transition-all cursor-pointer   ">
            <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
    







