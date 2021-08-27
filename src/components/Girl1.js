import React,{useState,useEffect} from 'react'
import './Girl1.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import {girlreplies} from './girlreplies';
import {playerreplies} from './playerreplies';


import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
function Girl1() {
  // when turn is true it's my turn ,otherwise anime girl's turn
  let [turn,setTurn] = useState(false);
  let [url,setURL] = useState("https://i.imgur.com/TKzf0yV.png")
  let [name,setName] = useState("")
  let [playerCount,setPlayerCount ] = useState(0)
  let [girlReplies,setReplies] = useState(girlreplies);
  let [playerReplies,setPlayerReplies] = useState(playerreplies);

  let [count,setCount] = useState(0);

  useEffect(()=>{
    let userAnswer =  prompt('Please insert your username : ') 
    localStorage.setItem('name',userAnswer)
    setName(userAnswer || ""); 
  },[])
    return (
        <div className="girl1__container">
            
            <Link to="/" style={{textDecoration:"none",color:'white',margin:'20px'}}><HomeIcon/></Link>
             <motion.div className="box" style={{margin:'10px'}}
             initial={{opacity:0}}
             animate={{opacity:1}}    
             transition={{type:"tween" }}>
                
               <h1  >{name || "" }</h1>
             
               {turn === true ? (
               
               <span>{girlReplies[count].reply}</span>
               
               ):
               (
                 count < playerReplies.length-1 ? <span>{playerReplies[setPlayerCount].reply}</span> : ''
               )}
               <DoubleArrowIcon className="girl1__forward"  onClick={()=>{
                 
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
                     setName(localStorage.getItem('name') || "")
                     if(playerCount<playerReplies.length-1) setPlayerCount(playerCount+1)
                     break;

                  default:
                    setURL('')
                 }
                 }}/> 
             </motion.div>
             {turn ? (
               <div style={{display:'flex',transform:`translateY(-500px)`}}>   
               <FavoriteIcon className="girl1__heart"/>
               <FavoriteIcon className="girl1__heart" />
               <FavoriteIcon className="girl1__heart"/>
               </div>

               ) : ''}
              <motion.img className="girl1__render" src={url} alt=""
                animate={{opacity:1}} initial ={{opacity:0}} transition={{delay:.2,type:'tween'}}
              />
        </div>
    )
}

export default Girl1
  