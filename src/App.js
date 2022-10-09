 import React, { useState } from "react";
 import "./App.css";
//import { useState } from "react";
//import ControlPointIcon from '@mui/icons-material/ControlPoint';
//import AddIcon from '@mui/icons-material/Add';
// import { IoAdd } from "react-icons/io5";
// import { AiFillDelete } from "react-icons/ai";



//=======>>>> use for material ui todo list project
// import Button from '@mui/material/Button';
// import { AiOutlinePlus,AiFillDelete } from "react-icons/ai";


//=====>>>>>>>>>>> using of bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



//=====>>>>>>>>>>>>>>>>> Google keep app clone

import Header from "./googlekeep/Header";
import Footer from "./googlekeep/Footer";
import CreateNote from "./googlekeep/CreateNote";
import Note from "./googlekeep/Note";
//import "./";



function App(){

    //======>>>>>>   increment and decrement operation
// const[num, setNum] = useState(0);


// const Incum=()=>{
//     setNum(num+1);
// }
// const Decum=()=>{
//     if(num>0){
//         setNum(num-1);
//     }else{
//         alert("sorry, Zero limit reached");
//         setNum(0);
//     }
   
// }
//========>>>>>> project on TODO list of material ui
// const[item,setItem]=useState();
// const[newItem, setNewItem]=useState([]);
// const itemEvent=(event)=>{
//  setItem(event.target.value);
// };
// const liofItme=()=>{
// setNewItem((preVal)=>{
//     return[ ...preVal,item];
// });
//  setItem(" ");
// };

// const delText=()=>{
//   //Style={textDecoration: "line-through"} ;
// }





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
        //=====>>>>>> increment and decrement operation
    // <>

    //     <div className="main_div">
    //     <div className="center_div">
    //         <br/>
    //         <h1>
    //             {num}
    //         </h1>
    //         <br/>
    //         <div className="btn_div">
    //             <Button onClick={Incum}> <IoAdd/>  </Button>
    //             <Tooltip title="Delete">
    //             <Button onClick={Decum}> <AiFillDelete/>  </Button> </Tooltip>
    //         </div>
    //     </div>


    //     </div>
    // </>


    //======>>>>>>>>project on TODO lis of material ui

    // <>
    // <div className="main_div">
    //     <div className="center_div">
    //              <br/>
    //              <h1> ToDo list App</h1>
    //                 <br/>
    //                 <div>
    //                 <input type="text"
    //                    placeholder="Add an Items"
    //                    value={item}
    //                     onChange={itemEvent}
    //                    />
    //                 <Button className="newBtn" onClick={liofItme}>  <AiOutlinePlus/>   </Button>
    //                 </div>
    //                 <ol>  {newItem.map((cval) => {
    //                     return   <li> <AiFillDelete className="deleteIcon" onClick={delText}/> {cval}</li>
    //                 })};
                  

    //                 </ol>


                 
    //     </div>
    // </div>


    // </>




    //===>>>>>>>>>>>>>>>>>>
//     <>
//         <h1 className="btn btn-success text-danger text-center mt-5 text-xl-center text-lg-center text-uppercase text-sm-center"> Suraj singh rajawat</h1>
//         <h1> Welcome to you World</h1>
//         <div className="container text-center">
//   <div className="row">
//     <div className="col"><div class="card"/>
//   <img src="https://picsum.photos/200/301" class="card-img-top" alt="..." height="200px"/>

//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div></div>
//     <div className="col"><div class="card">
//   <img src="https://picsum.photos/201/300" class="card-img-top" alt="..."
//     height="200px"
//   />

//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div></div>
//     <div className="col"><div class="card">
//   <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>

//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div></div>
//   </div>

//     </>
 

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