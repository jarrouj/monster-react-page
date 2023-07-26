import './navigation.styles.css'

import { Link, Outlet } from 'react-router-dom'

 export const Navigation=()=>{
    return(<>
            <nav className='flex justify-between  p-4 bg-purple-600 border-b border-white'>
            <Link href="/"><img className='h-16 ' src={process.env.PUBLIC_URL + '/assets/monster.png'} alt="Logo"></img></Link>
                <ul className='flex items-center space-x-4 text-white text-lg '>
                    <li className='hover:text-purple-200'><Link to="/">Home</Link></li>
                    <li className='hover:text-purple-200'><Link to="/monsters">monsters</Link></li>
                    <li className='hover:text-purple-200'><Link to="/about-us">About Us</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}


