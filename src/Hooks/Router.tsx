import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../Screens/Login/Login.tsx";
import Home from "../Screens/Home/Home.tsx";

export default function Router(): JSX.Element {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={< Navigate to="/login"/> }/>

        </Routes>
    )
}