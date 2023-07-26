import { Navigation} from './components';

import { Monsters, Home, Category, Monster } from './screens';

import { Routes,  Route } from 'react-router-dom';






function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='monsters' element={<Monsters/>}/>
        <Route path='monsters/:category' element={<Category/>}/>
        <Route path='monsters/:category/:monster' element={<Monster/>}/>
      </Route>
  </Routes>

  );
}

export default App;
