//import logo from './logo.svg';
import './App.css';
//import Add, {Sub, Multi, Div} from "./calc";         //======>>>>>   for the project of calc


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const fname = "suraj";
// const lname = "pratap";
// const currTime = new Date().toLocaleTimeString();
// const currDate = new Date().toLocaleDateString();
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/200/300?grayscale";
// const imgr = "https://picsum.photos/seed/picsum/200/300";


// for show good moring project~~~~~~~~

// let curDate = new Date(2022,9,26,2);
// curDate=curDate.getHours();

// let greeting ='';
//  const cssStyle ={};


// if(curDate >= 1 && curDate  < 12 ){
//  greeting ="good morning";  
//  cssStyle.color ='green';
// } else if(curDate >= 12 && curDate <19){
//   greeting= "good afternoon";
//   cssStyle.color = 'yellow';
// }else {
//   greeting="good night";
//   cssStyle.color = 'orange';
// }



//=====>>>> netflix front page



function Card(props){
  return(
    
<div className="cards">
<div className="card">
  <img src={props.imgsrc}
    alt="my_pic"
    className="card_img"
  />
  <div className="card_info"><span className="card_category">{props.title}</span>
    <h3 className="card_title" > {props.sname}</h3>
    <a href={props.link} target="blank">
      <button> Watch Now</button>
    </a>

  </div>

</div>
</div>
  )
}
function App() {
  return (
    // <>
    //   <h1> my namme is {fname} {lname} </h1>

    //   <p>this is my first para</p>
    // </>
    // ======>>>>> now show your name , current date and time in react app
    // <>
    //   <h1> my name is {fname} {lname}</h1>
    //   <p> current date is = {currDate}</p>
    //   <p> current time  is = {currTime}</p>

    // </>
    //========>>>>>>> experiment with img tag
    // <>
    //        <h1 className='heading'> my name is {fname} {lname}</h1>
    //        <div className='img_div'>
    //        <img src={img1} alt="some random images" />
    //       <img src= {imgr} alt ="some random img" />
    //       <a href ="https://www.youtube.com/watch?v=OloAP8p1k1w&t=37s" target = "_youtube">
    //        <img src ={img2} alt="_some random img" />
    //       </a>
    //        </div>
    // </>
    //     ======>>>>>>>> inline css styling
    // <>
    //         <h1 style={{
    //           color : "#fa9191",textTransform: "capitalize",textAlign: "center", }}>my name is {fname} {lname}</h1>
    //         <div className='img_div'>
    //         <img src={img1} alt="some random images" />
    //         <img src= {imgr} alt ="some random img" />
    //         <a href ="https://www.youtube.com/watch?v=OloAP8p1k1w&t=37s" target = "_youtube">
    //         <img src ={img2} alt="_some random img" />
    //         </a>
    //         </div>


    // </>
    //=====>>>>>show good morning time is b/w 1 to 11am show good afternoon time is 11 to 7pm and good night till midnight





    //  <div>
    //   <h1> Hello Sir, <spam style = {cssStyle}> {greeting} </spam> </h1>
    //  </div>




    //=======>>>>>> calculator project on react js
    // <>
    //   <ul>
    //     <li> The sum of two number is {Add(10,5)}</li>
    //     <li> The subtraction of two number is {Sub(10,5)}</li>
    //     <li> The multiply of two number is {Multi(10,5)}</li>
    //     <li> The division of two number is {Div(13,5)}</li>

    //   </ul>
    // </>



    //=====>>>> netflix front page

 
<>
<h1 className="heading_style"> The list of top netflix series</h1>
  <Card imgsrc="https://i.pinimg.com/564x/a4/23/0f/a4230f6c4e62f8a5928d7e48dfc0c823.jpg"
    title=" A NETFLIX ORIGINAL SERIES"
    sname="DARK"
    link="https://www.netflix.com/in/title/80100172"
  />,

  <Card imgsrc="https://dnm.nflximg.net/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeM0ufnLeyZwPTtc9T2-ZkcVGJQ7vKl28yRsoknVQbbCk6ASP_ecL5TsXpvm0bV41Va3FSUj2L0hhNDDCuJfnrf6ZM-YtHhxTewrEtr2gSUuPec_UVGqSDpQ2oHw3NAtjhy6ew.jpg?r=aaf"   
   title=" A NETFLIX ORIGINAL SERIES"
    sname="ETRA CURRICULAR"
    link="https://www.netflix.com/in/title/80990668"/>

    <Card imgsrc="https://m.media-amazon.com/images/I/81PrM6OSfBL._AC_SY741_.jpg"   
   title=" A NETFLIX ORIGINAL SERIES"
    sname="STRANGER THINGS"
    link="https://www.netflix.com/in/title/80057281"/>


    <Card imgsrc="https://wwwflickeringmythc3c8f7.zapwp.com/q:i/r:1/wp:1/w:362/u:https://cdn.flickeringmyth.com/wp-content/uploads/2022/06/The-Sandman-poster-600x750.jpg"   
   title=" A NETFLIX ORIGINAL SERIES"
    sname="THE SANDMAN"
    link="https://www.netflix.com/in/title/81150303"/>

<Card imgsrc="https://assets-prd.ignimgs.com/2022/07/28/lockekey-poster2-1658980029738.jpg"   
   title=" A NETFLIX ORIGINAL SERIES"
    sname="LOCKE & KEY"
    link="https://www.netflix.com/in/title/80241239"/>

<Card imgsrc="https://flxt.tmsimg.com/assets/p12079367_b_v8_an.jpg"   
   title=" A NETFLIX ORIGINAL SERIES"
    sname="THE LAST KINGDOM"
    link="https://www.netflix.com/in/title/80074249"/>
</>













  )
}


export default App;
