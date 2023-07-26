
import { useParams } from "react-router-dom";

import MONSTERS from '../../data/monsters.mock.json'
import { useEffect, useMemo, useState } from "react";
import { Card } from "../../components";


export const Category=()=>{
    const {category}=useParams();

    const [monsters, setMonsters]= useState([]);
    const [filtered, setFiltered]= useState(monsters);
    const [search, setSearch]=useState("");



    const handleSearch=(event)=>{
      const {value}= event.target;
      setSearch(value); 
    }

    useMemo(()=>{
         const newFiltered= monsters.filter((monster)=>{
            return monster.name.toLowerCase().includes(search.toLowerCase());
          });
      setFiltered(newFiltered);
    
    },[monsters, search])

    
    useEffect(()=>{
      new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({data: MONSTERS[0][category], statusCode: 200});
        },2000)
      }).then((response)=>setMonsters(response.data))
    },[category])

    return(
            <div className="h-screen flex flex-col gap-8 bg-gradient-to-b p-6 from-purple-600 to-orange-300">
              <input className="w-48 self-end rounded-md px-4 py-2 text-md text-purple-600 placeholder:text-purple-600 focus:outline-none" type="text" placeholder="Search" onChange={handleSearch}/>
            <div className="  grid grid-cols-1 gap-4  md:grid-cols-4 ">
              {filtered.length!==0 &&  filtered.map((monster)=>{
              return (
              <Card item={monster}/>
              );
            })
              }
              </div>
              </div>
          
    )
}