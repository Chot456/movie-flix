import React, { useState, useEffect } from 'react';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
       window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
       }); 
       return () => {
           window.removeEventListener("scroll");
       }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://imgix.bustle.com/inverse/60/ce/89/7d/8ccb/4a6f/9e82/2f8185f4d866.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
                alt="Netflix Logo"     
            />

            <img 
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Avatar"     
            />
        </div>
        
    )
}

export default Nav
