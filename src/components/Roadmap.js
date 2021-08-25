import React from 'react'
import './Roadmap.css'
import Thumbnail from './Thumbnail.js'
import {thumbnails} from '../thumbnails.js'
function Roadmap() {
   
    return (
        <div className="roadmap__container">
          {thumbnails.map( (thumbnail)=>   <Thumbnail url={thumbnail.url} title={thumbnail.title} /> ) }
        </div>
    )
}

export default Roadmap
