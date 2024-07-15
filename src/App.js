// import image from "./cover.png";
import "./App.css";
import { useState, useEffect } from "react";
import logo from "./download.jpeg";
import moon from "./images/moon.png";
import mountains1 from "./images/mountains_behind.png";
import mountains2 from "./images/mountains_front.png";
import star from "./images/stars.png";
import react from "./images/react.png"
import spring from "./images/spring-boot2.webp"
import html from "./images/html.png"
import css from "./images/CSS-Logo.png"
import js from "./images/js.png"
import mysql from "./images/sql.png"
import java from "./images/java.svg"
import project1 from "./projectimg/project1.png"
import project2 from "./projectimg/project2.png"
import github from "./images/GitHub.png"
// import email from "./images/email.webp"
// import call from "./images/call1.jpg"
import profile1 from "./images/profile2.png"
import mgr from "./images/mgr.png"
function App() {
const[quan,setquant]=useState(0);
const[span1,setSpan1]=useState(0);
const quantChange=()=>{
  
  setquant(prev=>{
    if(prev===0)
    {
      setSpan1(57)
     return 7
    }
      // setSpan1(78)
    else if(prev===6) {
      setSpan1(0)
       return 0  
    }
    }   

  )
}
  useEffect(() => {
    const stars = document.getElementById("star");
    const moon = document.getElementById("moon");
    const mountains_behind = document.getElementById("mountains_behind");
    const mountains_front = document.getElementById("mountains_front");
    const secondSection = document.querySelector(".second");
    const tex = document.getElementById("text")
    if (stars && moon && mountains_behind && mountains_front && secondSection && tex) {
      window.addEventListener("scroll", () => {
        const secondSectionTop = secondSection.offsetTop;
        const scrollY = window.scrollY;

        if (scrollY >= secondSectionTop) {
          const value = scrollY - secondSectionTop;
          stars.style.left = value * 0.25 + "px";
          moon.style.top = value * 1.05 + "px";
          mountains_behind.style.top = value * 0.5 + "px";
          mountains_front.style.top = value * 0.5 + "px";
          tex.style.left=value*0.5+"px";
        }
      });
    }
    console.log(tex)
  }, [quan]);

  return (
    <>
      <div class="bg-black h-lvh home">
        <nav class="flex justify-between px-10 py-6 items-center gap-10">
          <div class="mx-5">
            <img
              src={logo}
              class="w-20 h-16 p-0 rounded-full"
              alt=" "
            /> 
          </div>
          <div class="basis-1/2">
            <ul class="text-blue-50 flex justify-evenly font-medium">
              <li>
                Home<span></span>
              </li>
              <li>
                <a href="#about">About</a>
                <span></span>
              </li>
              <li >
                <a  href="#project">Projects</a><span></span>
              </li>
              <li>
                <a href="#contact">Contacts</a><span></span>
              </li>
            </ul>
          </div>
        </nav>
        
        <div class="flex justify-around mid items-center gap-10">
          <div class="name">
            <h1>I'm a  Developer</h1>
            <h1>Kabila kannan</h1>
          </div>
          <div class='w-1/2'>
               <img src={profile1} class='w-2/4 h-2/4 rounded-xl ms-72' alt=" "/>
          </div>
        </div>
      </div>
      <div className="second">
        <img src={moon} id="moon" alt=" "/>
        <img src={mountains1} id="mountains_behind" alt=" "/>
        <h2 id="text" class='py-3 px-8 bg-purple-700 rounded-full text-white'>Scroll Down</h2>
        <img src={mountains2} id="mountains_front" alt=" "/>
        <img src={star} id="star" alt=" "/>
      </div>
      <div className="third flex items-center justify-center" id="about">
        <div>
          <h1 class="font-bold  text-4xl">About Me</h1>
          <p class="text-white  w-1/2  py-10  text-xl">
            An aspiring developer passionate about creating beautiful and
            functional web experiences. Although I don't have professional
            experience yet, I've dedicated myself to learning and honing my
            skills in web development.
          </p>
        </div>
        <div className="flip">
          <div className="container">
            <div className="card">
              <div className="front bg-purple-950 flex justify-center flex-col items-center gap-5 text-white">
              <i class="fa-solid fa-user-group text-white "></i>
              <h2 class='font-bold'>Education</h2>
              <p class='text-center'>Master in Computer<br></br>science</p>
              </div>
              <div className="back bg-white">
                 <img src={mgr} alt=" "/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="four flex flex-col items-center bg-black  ">
        <h1 class="text-white my-10 text-8xl">Skills</h1>
        <div class='button'>
          <span onClick={
            quantChange} style={{'left':`${span1}%`}}></span></div>
        <div class="banner">
        <div class="slider" style={{"--quantity":quan}} >
            <div class="item" style={{"--position":1}}><img src={react} alt="" /></div>
            <div class="item" style={{"--position":2}}><img src={spring} alt="" /></div>
            <div class="item" style={{"--position":3}}><img src={html} alt="" /></div>
            <div class="item" style={{"--position":4}}><img src={css} alt="" /></div>
            <div class="item" style={{"--position":5}}><img src={js} alt="" /></div>
            <div class="item" style={{"--position":6}}><img src={mysql} alt="" /></div>
            <div class="item" style={{"--position":7}}><img src={java} alt="" /></div>
            {/* <div class="item" style="--position: 6"><img src="images/dragon_6.jpg" alt=""></div>
            <div class="item" style="--position: 7"><img src="images/dragon_7.jpg" alt=""></div>
            <div class="item" style="--position: 8"><img src="images/dragon_8.jpg" alt=""></div>
            <div class="item" style="--position: 9"><img src="images/dragon_9.jpg" alt=""></div>
            <div class="item" style="--position: 10"><img src="images/dragon_10.jpg" alt=""></div> */}
        </div>
        </div>
      </div>
    <div class='projectMain  h-dvh py-10' id="project">
         <h1 class='text-6xl text-white font-bold text-center'>Projects</h1>
         <div class='flex justify-around h-1/2 m-32  gap-2'>
             <div class='w-1/3 bg-white h-5/6 relative overflow-hidden z-10 project rounded-xl' >
             <img class='w-full h-full' src={project1} alt=""/>
                  <div class='w-full flex justify-center flex-col gap-10 items-center h-full absolute  left-0 project1'>
                       <h1 class='text-2xl font-semibold'> Bank Application</h1>
                        <a href="https://github.com/Kabilakannan/Bank-Applications">
                           <img src={github} class='w-24 h-14'/>
                        </a>
                  </div>
             </div>
             <div class='w-1/3 bg-white h-5/6 relative overflow-hidden  project rounded-xl' >
             <img class='w-full h-full' src={project2}/>
                  <div class='w-full flex justify-center items-center flex-col gap-10  h-full absolute  left-0 project1'>
                          <h1 class='text-2xl font-semibold'> E-commerce</h1>
                          <div class='flex justify-between'>
                        <a href="https://github.com/Kabilakannan/E-commerce">
                           <img src={github} class='w-24 h-14' alt=" "/>
                        </a>
                        <a href="https://main--kabilecommerce.netlify.app/" class='ms-10'>
                        <p class='bg-black px-2 py-1 text-white'>Live Demo</p></a>
                        </div>
                  </div>
             </div>
         </div>
    </div>
    <section class='contact flex w-full h-dvh bg-black justify-center items-center' id="contact">
         <div class='flex flex-col w-1/2 gap-10 ps-60  '>
               <h1 class='text-5xl font-semibold my-10'>Contact Me</h1>
               <div class='text-white p-0'>
               <a href="mailto:kabilakannan18@gmail.com"><i class="fa-solid fa-envelope p-2  bg-purple-400 rounded-full me-5"></i></a> Kabilakannan18@gmail.com</div>
               <div class='text-white'>
               {/* <img class='w-5 h-5 inline-block me-5 p-0' src={call}></img> */}
               <i class="fa-solid fa-phone p-2  bg-purple-400 rounded-full me-5"></i> 
                7550258450</div>
               <div>
               <a href="https://github.com/Kabilakannan"><i class="fa-brands fa-github p-2  bg-purple-400 rounded-full me-5  transform text-white border-4 transition duration-300 relative hover:bottom-3 hover:scale-150"></i></a>
               <a href="https://linkedin.com/in/kabila-kannan-0463b6184"><i class="fa-brands fa-linkedin p-2  bg-purple-400 rounded-full me-5 text-white border-4 transition duration-300 relative hover:bottom-3 hover:scale-150"></i> </a>
               <i class="fa-brands fa-instagram p-2  bg-purple-400 rounded-full me-5 text-white
               border-4 transition duration-300 relative hover:bottom-3 hover:scale-150"></i> 
               <i class="fa-brands fa-twitter p-2  bg-purple-400 rounded-full text-white border-4 transition duration-300 relative hover:bottom-3 hover:scale-150"></i> 
               </div>
               <button class='w-60 p-3 bg-purple-500 text-white rounded-full'>Download Cv</button>
         </div>
         <div class='flex flex-col w-1/3 gap-8 '>
         <input type="text" class="h-10 p-5 bg-gray-300 text-black placeholder-gray-700 outline-none font-semibold" placeholder="Your Name "></input>
         <input type="text" class="outline-none h-10 p-5 bg-gray-300 placeholder-gray-700 text-black font-semibold" placeholder="Your Email"></input>
         <input type="tel" class='h-40 placeholder-gray-700  bg-gray-300 text-black outline-none ps-3 font-semibold' placeholder="Your Message "></input>
         <button class='bg-purple-400 w-1/3 text-white p-2 rounded'>Submit</button>
         </div>
    </section>

    </>
  );
}

export default App;
