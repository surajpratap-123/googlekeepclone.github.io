import './App.css';
import {useState} from "react";
//let state = useState();








//======>>>>> slot machine project

//   const SlotM = (props) =>{
//       let x=  props.x;
//       let y=  props.y;
//       let z=  props.z;
//       if((x===y) && (y===z)){
//         return(
//             <>
//                 <div style={{textAlign:"center"}} >
//                     <h1>{x} {y} {z}</h1>
//                     <h1 style={{textTransform:"uppercase"}}> this is matching</h1>
//                     <hr/>
//                 </div>
//             </>
//         )
//       }else{
//         return(
//             <>
//                 <div style={{textAlign:"center"}} >
//                     <h1>{x} {y} {z}</h1>
//                     <h1 style={{textTransform:"uppercase"}}> oops!! this is not matching</h1>
//                     <hr/>
//                 </div>
//             </>
//         )

//       }
//   }




function App(){
    

        //======>>>>>> slot machine project
    //     <>
    //    <h1 className = "heading_style"> 🎰 welcome to <span style={{fontWeight:"bold"}}>Slot machine game</span> 🎰 </h1>


    //     <div>
    //     <SlotM  x='😄' y='😄' z='😄'/>
    //   <SlotM x='😄' y='🎅' z='😄'/>
    //   <SlotM x= '😻' y='😄' z='😄'/>
    //     </div>
     
    //     </>
    //=====>>>>>  use state project of counting 123456789
    // const [count, setCount] = useState(0);
    // const IncNum =()=>{
    //     setCount (count+1);
    // };


    //=====>>>>>> project of continious running of digital clock
    // let newtime = new Date().toLocaleTimeString(); 
    // let [ctime, settime] = useState(newtime);   
    // const Updatetime =()=> {
    //    let newtime= new Date().toLocaleTimeString();
    //     settime(newtime);                                   //updated value must be in functional component
    // };
    // setInterval(Updatetime,1000);


    //======>>>>>>> experiment on event handler!!!!!!

    // const purple= "black";
    // const [bg, setBg] = useState(purple);
    // const [name,setname] =useState('click me');

    // const bgchange = () => {
    //     let newBg="white";
    //     setBg(newBg);
    //     setname('oop!!!! 😮');
    // };
    // const bgBack=()=>{
    //     setBg(purple);
    //     setname('aayyooo 😠');
    // }



    ////======>>>>>>> react controled component with input field.....
    //  const[name, setName]= useState()
    //  const[fullNme,setfullName]=useState();

    //   const inputevent=(event)=>{
    //     setName(event.target.value);
    //   };
    //    const onsubmit =()=>{
    //       setfullName(name)
    //    };





       //=====>>>>>> (...) use of spread operator
      //  const shootergames= ['call of duty', 'far cry', 'resident evil'];
      //  const[first,...remaining]=shootergames;
      //  console.log(first);
      //  console.log(remaining);




      //===>>>>>> TODO list project 
      const [inputList, setInputlist]=useState("");
      const [Item,setItemlist]= useState([]);

      const itemEvent=(event)=>{
        setInputlist(event.target.value);
      };
      const listofItem=()=>{
        setItemlist((oldItems)=>
          {return [...oldItems,inputList ]
        })
        setInputlist(" ");
      };


    return(
        //=====>> use state project of counting 123456789
        //  <>
        //      <h1>{count}</h1>
        //      <button onClick={IncNum}> Click me</button>
        //  </>
        // <div>
        //      <h1>{ctime}</h1>                              
        // {/* <button onClick={Updatetime}>Get time</button> */}

        // </div>

        //=====>>>>> experiment on event handler!!!!!!
       
        // <>
        //     <div style= {{ backgroundColor:bg}}>
        //         <button onClick=  {bgchange} onDoubleClick={bgBack}>{name}</button>
        //     </div>
        // </>



     //==========>>>>>>>  react controled component with input field



        // <>
        
        //       <div>
        //       <h1> Hello {fullNme} </h1>
        //         <input
        //         type="text"
        //         placeholder='enter your name'
        //         onChange={inputevent}
        //          // value={name}
        //         />
        //         <button onClick={onsubmit}> Click Me</button>
        //       </div>
        // </>
        <>
          <div className="main_div">
            <div className='center_div'>
            <br/>
            <h1>
              Todo List
            </h1>
            <br/>
            <input type="text"
            placeholder="Add a text"
            value={inputList}
            onChange={itemEvent} />
            <button onClick={listofItem}> + </button>



               <ol>
               <i  class="fa fa-times" aria-hidden="true"/>
               {Item.map((itmeval) => { return <li>{itmeval}</li>})}
                
               </ol>

            </div>
          </div>
        </>
       
    )


    
};


export default App;