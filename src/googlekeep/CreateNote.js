import React, { useState } from "react";
import { MdOutlineAddCircle} from "react-icons/md";
import Button from '@mui/material/Button';


const CreateNote=(props)=> {


  const [note,setNote]=useState({
    title: "",
    content: "",
  });


  const InputEvent=(event)=>{

    const value=event.target.value;
    const name=event.target.name;
    setNote((prevalue)=>{
      return{
        ...prevalue,[name]:value,            //if name==title{ store in note .title}else if (name==content){store in content}
      };
    });
  }
  const addEvent=()=>{
     props.passNote(note);

     setNote({
      title: "",
      content: "",
    });
  };
return(
      <>
        <div className="main_note">
        <form>
            <input type="text"
             placeholder="Title" 
             value={note.title}
              name="title"
              onChange={InputEvent} 
             />
            <textarea  row="" 
            column=""
             placeholder="write a note....." 
             value={note.content}
              name="content"
              onChange={InputEvent}
             />


        </form>
        <Button  onClick={addEvent}  className="Btn"> <MdOutlineAddCircle   className="plus_sign"/>
        </Button>

        </div>
      </>
);
}
export default CreateNote;