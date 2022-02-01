import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



// GETTING THE DATA FROM THE LOCAL STORAGE OF LOGIN PAGE
const LocalStorageUserData = () => {
    let localUserData = localStorage.getItem("User");

    if (localUserData) {
        return JSON.parse(localStorage.getItem("User"));
    } else {
        return [];
    }
}


const LoginPage = () => {

    const navigate = useNavigate();

    const navigateHandler = () => {
        if (inputData.username === 'Admin' && inputData.password === '12345') {
            localStorage.setItem("currentUser", inputData.username)
            navigate('/createBlog')
        } else {
            return ("error")
        }
    }

    const [inputData, setinputData] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState('');

    const [changeInputData, setchangeInputData] = useState(LocalStorageUserData());



    useEffect(() => {
        localStorage.setItem("User", JSON.stringify(changeInputData));
    }, [changeInputData])


    const handleChange = (event) => {
        const { name, value } = event.target;

        setinputData((prevText) => {
            return {
                ...prevText,
                [name]: value
            };
        });
    }


    const submitInputData = (event) => {
        event.preventDefault();
        if (inputData.username === 'Admin' && inputData.password === '12345') {
            setchangeInputData((prev) => {
                return [...prev, inputData]

            })
            setError("User logged in successfull!")
        } else if (inputData.username === inputData.username && inputData.password === inputData.password) {
            setError(<p style={{color: 'red'}}>invalid Username and Password!</p>)
        } else {
            setError("invalid credential!")
        }
    }


    return (
        <div>
            <div className="field">
                {error}
            </div>
            <form className="ui form" onSubmit={submitInputData}>
                <div className="ui container">
                    <label>Username : </label>
                    <br />
                    <input type="text" onChange={handleChange} value={inputData.username} name="username" required />
                    <br />
                    <label>Password : </label>
                    <br />
                    <input type="password" onChange={handleChange} value={inputData.password} name="password" required />
                    <br />
                    <br />
                    <button onClick={navigateHandler} className="ui button" type="submit">Login</button>
                </div>
            </form>

        </div>
    );
}


export default LoginPage;
