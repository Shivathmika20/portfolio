import img from './profile__.png'
import React, { useEffect } from 'react'
import "./portfolio.css"
import Typed from 'typed.js';

const Portfolio = () => {
    const el = React.useRef(null);
    useEffect(()=>{
        const typed = new Typed(el.current, {
          strings: ['<code className="text__normal">Frontend Developer</code>.', '<code>Open Source Contributor.</code>','<code>Web Developer.</code>','<code>Frontend Developer.</code>'],
          typeSpeed: 110,backSpeed:60,loop:true
        })
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
    },[]);
    
  
  return (
    <>
      <div className="parent text-slate-200" >
        <div className="child">
        <header className="navbar p-10">
            <nav className="flex justify-between">
                <a href="/" className="logo pl-8 text-2xl underline underline-offset-8">Shivathmika</a>
                <ul className="list gap-20 flex text-lg">
                    <li><a className="text__normal" href="#">Home</a></li>
                    <li><a className="text__normal" href="/#about">About</a></li>
                    <li><a className="text__normal" href="/#education">Education</a></li>
                    <li><a className="text__normal" href="/#skills">Skills</a></li>
                </ul>
            </nav> 
        </header>

        <div className="root_container flex justify-center ">
            <div className="sidebar w-32 px-10 mt-10">
                <nav>
                    <ul className="tags block fixed text-white">
                        <li className="pb-6 ">
                            <a  href="https://github.com/Shivathmika20" target='_blank'>
                             <svg className=" w-6 h-6" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" classNameName="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                        </li>

                        <li className="pb-6"><a href="https://www.instagram.com/_shivathmika/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank'>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" classNameName="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a></li>

                        <li ><a href="https://www.linkedin.com/in/shivathmika-yeluri-10a923249" target='_blank'>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" classNameName="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a></li>

                        <div className="vl border-l-2 border-[#81757ca5] w-32 h-52 ml-3 mt-4 absolute "></div>
                    </ul>
                </nav>
            </div> 

            <div className="container my-10">    
                <div className="matter text-6xl mt-28 mb-20">
                        <span className="block text__normal mb-3">Hi, I am <span className="text-[#FF3AA4] text__main m-0 p-0">Shivathmika,</span>
                            <span className="block mt-1 mb-1 text__normal">and I am a passionate</span></span>
                            <div className='typed__class'><span className='typed__text' ref={el}  /></div>
                </div> 

                <div id="about" className="about py-16 flex  mb-20">
                    <div className="about-matter mr-20">
                        <span className='flex items-baseline'><h2 className="text-4xl my-12 text__head">About Me</h2><span className='block relative w-60 bottom-2 h-px opacity-30 ml-14 bg-slate-400	'> </span></span> 
                        <div className="text text-slate-300">
                            <p className="leading-9 text__normal">Hello! My name is Y. Shivathmika and I am a passionate student with a deep interest in the fields of  <span className='text-[#FF3AA4]'> Web Development</span> and <span className='text-[#FF3AA4]'>Designing</span>. Currently pursuing my Computer Science Degree with specialization in Information Technology.</p>
                            <p className="leading-9 text__normal">My journey in web development began when I taught myself the basics of HTML and CSS, building simple websites for fun. Since then, I have expanded my knowledge by exploring various frameworks and languages such as Tailwind, Bootstrap, and JavaScript.</p>
                        </div>        
                    </div>
                    <div className="main-bg_img mt-12 h-60 rounded-xl relative">
                        <div className="main-image">
                            <img className="rounded-xl object-cover w-full h-60 border__img" src={img} alt="my picture" />
                            <div className="image-overlay rounded-xl"></div>
                        </div>
                    <div className="img-bd border-2 rounded-xl w-full h-60 border-[#FF3AA4] absolute top-4 left-4"></div>
                </div>
            </div>

                  
                <div id="education" className="education__container relative mb-72"> 
                    <span className='flex items-baseline'><h2 className="text-4xl mb-16 text__head">Education</h2><span className='block relative w-60 bottom-2 h-px opacity-30 ml-14 bg-slate-400	'> </span></span>
                    <div className="education text flex items-center justify-evenly pt-3 text-slate-200 ">
                        <div className="edu">
                            <ul className="leading-8">
                                <li className="text-[#FF3AA4] text__edu font-bold">2019</li>
                                <li className='text__edu'>Primary Education</li>
                                <li className='text__edu'>Gowtham Model School</li>
                            </ul>
                            <div className='line'></div>
                        </div>
                        <div className="edu relative top-56 left-16">
                            <ul className="leading-8">
                                <li className="text-[#FF3AA4] text__edu font-bold">2021</li>
                                <li className='text__edu'>Higher Education</li>
                                <li className='text__edu'>Sri Chaitanya Junior College</li>
                            </ul>
                            <div className='line'></div>
                        </div>
                        <div className="edu w-72 ">
                            <ul className="leading-8">
                                <li className="text-[#FF3AA4] text__edu font-bold">Present</li>
                                <li className='text__edu'>B.Tech</li>
                                <li className='text__edu'>Marri Lakshman Reddy Institute Of Technology
                                    and Management
                                </li>
                            </ul>   
                        </div>
                        
                    </div>
                    <div className="tree flex">
                        <div className="root vl border-l-2  h-12 left-48 relative "></div>
                        <div className="root vl1 border-l-2  h-12  left-3/4 relative  "></div>
                        <div className="root vl3 border-l-2  h-12  relative "></div> 
                    </div>
                    <div className=" m2 border  ml-32 "></div>
                </div> 


                <div id="skills" className="skill">
                <span className='flex items-baseline'><h2 className="text-4xl mb-16 text__head">My Skills</h2><span className='block relative w-60 bottom-2 h-px opacity-30 ml-14 bg-slate-400	'> </span></span>
                    <div className="skills-list mb-20">
                        <ul >
                            <li>
                                <div className=" space flex flex-row">
                                    <h1 className="space-html text__normal">HTML</h1>
                                <span className="prog-html text__normal">90%</span>
                                </div> 
                                <progress className="progress__screen h-1" id="file" value="90" max="100"></progress>
                            </li>
                            <li >
                                <div className=" space flex flex-row">
                                    <h1 className="space-css text__normal">CSS</h1>
                                    <span className='prog-css text__normal'> 85%</span>
                                </div> 
                                <progress className="progress__screen h-1 " id="file" value="85" max="100"> 85% </progress>
                                
                            </li>
                            <li>
                                <div className=" space flex flex-row">
                                    <h1 className="space-tail text__normal" >Tailwind CSS</h1>
                                    <span className='prog-tail text__normal'> 85%</span>
                                </div> 
                                <progress className="progress__screen h-1" id="file" value="85" max="100"> 85% </progress>
                                
                            </li>
                            <li>
                                <div className=" space flex flex-row">
                                    <h1 className="space-js text__normal" >JavaScript</h1>
                                    <span className='prog-js text__normal'> 60%</span>
                                </div> 
                                <progress className="progress__screen h-1" id="file" value="60" max="100"> 60% </progress>
                                
                            </li>
                            <li>
                                <div className=" space flex flex-row">
                                    <h1 className="space-ui text__normal">UI Design</h1>
                                    <span className='prog-ui text__normal'> 80%</span>
                                </div> 
                                <progress className="progress__screen h-1" id="file" value="79" max="100"> 79% </progress>
                                
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="contact">
                <span className='flex items-baseline'><h2 className="text-4xl mb-16 text__head">Get In Touch</h2><span className='block relative w-60 bottom-2 h-px ml-14 opacity-30 bg-slate-400	 rounded-sm'> </span></span>
                    <div className="contain  flex px-16">
                        <div className="col">      
                                <ul className="mail contact__center">
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="#FF3AA4" stroke-width="1"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg></li>
                                    <li className='text__normal'>Email</li>
                                    <li className="underline underline-offset-4 "><a href="mailto: [yelurishivathmika@gmail.com]?subject= &body= " className='text__normal'>yelurishivathmika@gmail.com</a></li>
                                </ul>
                            
                        </div>
                        <div className="col">
                            <ul className="address contact__center">
                                <li><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="#FF3AA4"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-472Z"/></svg></li>
                                <li className='text__normal'>Adress</li>
                                <li className='text__normal'>Hyderabad,India</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar flex justify-center w-32 px-12 pt-80">
                <nav >
                    <ul className="tags  block fixed text-[#81757c] text-sm">
                        <li><a className="my-mail ml-4 text__normal" href="mailto: [yelurishivathmika@gmail.com]?subject= &body= " target='_blank'>
                            yelurishivathmika@gmail.com
                        </a></li>
                        <div className=" border-l-2 border-[#81757ca5] w-32 h-40 ml-6 mt-3 absolute  "></div>
                    </ul>
                </nav>
            </div>
        </div>
        </div> 
    </div>

    </>
  )
}

export default Portfolio
