import {Route, Routes} from 'react-router-dom';
import Home from '../views/home/Home';

export default function AppRoutes(){
    return(
        <Routes>
            {/* routes */}
            <Route path='/' exact element={<Home/>}/>
        </Routes>
    )
}