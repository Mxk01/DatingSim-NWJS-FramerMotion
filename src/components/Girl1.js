import React,{useState,useEffect} from 'react'

import FavoriteIcon from '@material-ui/icons/Favorite';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import HomeIcon from '@material-ui/icons/Home';


import './Girl1.css'


import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
 

import {girlreplies} from './girlreplies';
 
function Girl1() {
  // when turn is true it's my turn ,otherwise anime girl's turn
  let [turn,setTurn] = useState(false);
  let [url,setURL] = useState("https://i.imgur.com/TKzf0yV.png")
  let [name,setName] = useState("")
  let [girlReplies,setReplies] = useState(girlreplies);

   let [count,setCount] = useState(0);

  // useEffect(()=>{
  //   let userAnswer =  prompt('Please insert your username : ') 
  //   localStorage.setItem('name',userAnswer)
  //   setName(userAnswer || ""); 
 
  // },[])

  let changeTurns = ()=>{
                 
    setTurn(!turn)
    switch(turn)
    {
      case false:
        setURL('https://i.imgur.com/TKzf0yV.png')
        setName('Girl')
        if(count<girlReplies.length-1) setCount(count+1)
        break;

     case true: 
        setURL('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2da2644-316a-4273-9472-b791c8d758f9/dcgwfsf-bc8d7c84-4216-41f5-b24c-077aad23b29e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyZGEyNjQ0LTMxNmEtNDI3My05NDcyLWI3OTFjOGQ3NThmOVwvZGNnd2ZzZi1iYzhkN2M4NC00MjE2LTQxZjUtYjI0Yy0wNzdhYWQyM2IyOWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.s0se15qAkIc02hfTY-bkM2Kf1SXqYnoW_oNXVEoqyCo')
        // setName(localStorage.getItem('name') || "")
        break;

     default:
       setURL('')
    }
    }

 let hearts =  [1,2,3].map((e)=> (<FavoriteIcon  className="girl1__heart"/>));
    return (
        <div className="girl1__container">
            
            <Link to="/" style={{textDecoration:"none",color:'white',margin:'20px'}}><HomeIcon/></Link>
             <motion.div className="box" style={{margin:'10px'}}
       >
                
               {/* <h1  >{name || "" }</h1> */}
             
               {turn ? (
               
               <span>{girlReplies[count].reply}</span>
               
               ):
               (
                 <span></span> 
               )}
               <DoubleArrowIcon className="girl1__forward"  onClick={()=>changeTurns()}/> 
             </motion.div>
             {turn ? (
               <div style={{display:'flex',transform:`translateY(-500px)`}}>   
               {  hearts }
               
               </div>

               ) : ''}
              <motion.img className="girl1__render" src={url} alt=""
                animate={{opacity:1}} initial ={{opacity:0}} transition={{delay:.2,type:'tween'}}
              />
        </div>
    )
}

export default Girl1
  