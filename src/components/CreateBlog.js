
import React, { useState, useEffect } from "react";




// GETTING THE DATA FROM THE LOCAL STORAGE OF CREATE BLOG
const localStorageData = () => {
    let list = localStorage.getItem('Data');

    if (list) {
        return JSON.parse(localStorage.getItem('Data'));
    } else {
        return [];
    }
}


// REMOVE DATA FROM THE LOCAL STORAGE
const remove = () => {
    localStorage.removeItem('Data');
}


// CREATEBLOG COMPONENT FUNCTION
const CreateBlog = () => {

    const currentDate = new Date().toDateString();

    // NAVIGATE FUNCTION TO REDIRECT TO ANOTHER PAGE

    // DEFINING STATES

    const [isActive, setIsActive] = useState(false);

    const [blogText, setblogText] = useState({
        title: "",
        content: "",
        // date: ""
    });

    const [blogTextChange, setblogTextChange] = useState(localStorageData());



    // USING EFFECT TO SET THE DATA OF  BLOG IN LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem('Data', JSON.stringify(blogTextChange));
    }, [blogTextChange])


    // CHANGE THE DATA OF CREATEBLOG COMPONENTS 
    const handlerChange = (event) => {
        const { name, value } = event.target;

        setblogText((prevText) => {
            return {
                ...prevText,
                [name]: value
            }
        });
    }


    // SUBMIT DATA OF CREATE BLOG
    const onSubmitHandler = (event) => {
        event.preventDefault();

        setblogTextChange((prev) => {
            return [...prev, blogText];
        })
    }


    // FUNCTION WHICH DISPLAY THE DATA ON CLICK 
    const handleActive = () => {
        setIsActive((prev) => {
            return !prev
        })
    }

    // RETURN DATA THROUGH JSX
    return (
        <div>

            <form onSubmit={onSubmitHandler} className="ui form" >

                <label>Title:</label>
                <input onChange={handlerChange} type="text" name="title" value={blogText.title} />
                <br />
                <br />
                <label>Content:</label>
                {/* <input onChange={handlerChange} type="date" name="date" value={blogText.date} /> */}
                {/* <br />
                <br /> */}
                <input onChange={handlerChange} type="text" name="content" value={blogText.content} />
                <br />
                <br />
                <button className="ui button">Submit</button>
            </form>
            <hr />
            <br />
            <i onClick={handleActive} className="chevron circle down icon"></i>
            {isActive ? <div className="card">

                {blogTextChange.map((blog, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="header">{blog.title}</div>
                            <div className="meta">{currentDate}</div>
                            <div className="description">
                                {blog.content}
                            </div>
                        </React.Fragment>
                    );
                })}
            </div> : ''}
            <button className="ui button" onClick={remove}>Remove Data</button>
        </div>
    );
}



export default CreateBlog;