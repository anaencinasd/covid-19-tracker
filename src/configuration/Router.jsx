import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from "../Pages/LandingPage"

const RouterItem = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;