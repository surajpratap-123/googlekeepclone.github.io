import React from "react";

import {AiOutlineDelete } from "react-icons/ai";
import Button from '@mui/material/Button';




const Note=(props)=>{

    const deleteNote=()=>{
        props.deleteItem(props.id);
    }
    return(
        <>
            <div className="note">
            <form><h1>  {props.title}</h1>
            <br/>
            <p> {props.content} </p></form>
            
         
            </div>
            {/* <br/> */}
            <Button onClick={deleteNote} className="Btn" ><AiOutlineDelete className="deleteIcon"/>
</Button>
        </>
    );
}
export default Note;