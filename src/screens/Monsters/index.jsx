import { Directory } from "../../components"

const CATEGORIES=[
    {
    path:'pokemon',
    label:'Pokemon',
    imageUrl:'/assets/pokemon.jpg'
    },
    {
        path:'dragon-ball',
        label:'Dragon Ball',
        imageUrl:'/assets/dragon-ball.jpg'
    },
    {
        path:'bakugan',
        label:'Bakugan',
        imageUrl:'/assets/bakugan.jpg'
    },
]

export const Monsters=()=>{
    return <div className="h-screen p-6 bg-gradient-to-b from-purple-600 to-orange-300"  >
        <Directory categories={CATEGORIES}/>
    </div>
}