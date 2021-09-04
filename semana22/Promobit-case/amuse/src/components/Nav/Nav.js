import React,{useState, useEffect} from 'react';
import {NavBoard, NavLogo, NavAvatar} from "./styled";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY>100){
              //handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <NavBoard>
            <NavLogo>amuse</NavLogo> 
            <NavAvatar src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
        </NavBoard>
    )
}

export default Nav;
