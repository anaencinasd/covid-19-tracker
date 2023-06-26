import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from "../Pages/LandingPage"
import CountryInfo from '../Pages/CountryInfo'

const RouterItem = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}></Route>
                <Route path='/countryInfo' element={<CountryInfo />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;