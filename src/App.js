
import LoginPage from "./components/LoginPage";
import CreateBlog from "./components/CreateBlog";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Header from "./components/Header";
import React from "react";




const App = () => {

    // const navigate = useNavigate();


    const isUserLogin = localStorage.getItem("currentUser");




    return (
        <BrowserRouter>

            <div className="ui container">
                <Header />
                <Routes>

                    {isUserLogin ? <Route
                        path="/createBlog"
                        element={<CreateBlog />}
                    /> : <Route
                        path="/"
                        element={<LoginPage />}
                    />}
                    <Route
                        path="/createBlog"
                        element={<CreateBlog />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}



export default App;