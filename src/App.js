 import React, { useState } from "react";
 import "./App.css";




//=====>>>>>>>>>>>>>>>>> Google keep app clone

import Header from "./googlekeep/Header";
import Footer from "./googlekeep/Footer";
import CreateNote from "./googlekeep/CreateNote";
import Note from "./googlekeep/Note";




function App(){

   
//====>>>>>>>>>>>  google keep clone project

const[addItem,setAddItem]=useState([]);


const addNote=(note) => {
    // alert('i am clicked');
setAddItem((prevalue)=>{
    return [...prevalue,note]; 
});

}
const onDelete=(id)=>{
    setAddItem((olddata)=>{
        olddata.filter((currdata,index)=>{
            return index !== id
        })
    })

};

    return(
   

<>
  <Header />
 <CreateNote passNote={addNote} />
 {/* <Note/>
 */}

      { addItem.map((val,index) => {
        return (<Note   
         key={index}
        id={index}
            title={val.title}
            content={val.content}
                deleteItem={onDelete}
            />  );
    })
    }

 
  <Footer />
</>

    )
};
export default App;
