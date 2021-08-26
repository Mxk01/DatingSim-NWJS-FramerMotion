import React,{useState} from 'react'
import './Girl1.css'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
function Girl1() {
  // when turn is true it's my turn ,otherwise anime girl's turn
  let [turn,setTurn] = useState(false);
  let [url,setURL] = useState("https://i.imgur.com/tfCChIH.png")
  let [name,setName] = useState("")

    return (
        <div className="girl1__container">
            <Link to="/" style={{textDecoration:"none",color:'white'}}>Home</Link>
             <motion.div className="box" style={{margin:'10px'}}
             initial={{opacity:0}}
             animate={{opacity:1}}    
             transition={{type:"tween" }}>
               
               <h1>{name}</h1>
               
               <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolores! Eius harum esse quas eveniet. Temporibus id fugiat reiciendis voluptate error blanditiis rem porro quae atque voluptatum facere, voluptas animi.</span>
               <DoubleArrowIcon className="girl1__forward"  onClick={()=>{
                 
                 setTurn(!turn)
                 switch(turn)
                 {
                   case false:
                     setURL('https://i.imgur.com/tfCChIH.png')
                     setName('Siesta')
                     break;

                  case true: 
                     setURL('https://i.imgur.com/PUOgST6.png')
                     setName('Player')
                     break;

                  default:
                    setURL('')
                 }
                 }}/> 
             </motion.div>
            
              <motion.img className="girl1__render" src={url} alt=""
                animate={{opacity:1}} initial ={{opacity:0}} transition={{delay:.2,type:'tween'}}
              />
        </div>
    )
}

export default Girl1
  