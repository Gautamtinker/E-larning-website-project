import React, { useEffect, useState } from "react";
import "./public/my_profile.css"
import axios from "axios";

function Note(props) {

  //const [like, setLike]  = useState(props.email_liked.length);
  const [isLiked, setIsLiked] = useState(false);

  function click(){
    console.log("click")
    props.del(props.id) 
  }

  return (
    <div className="blog">
      <h1>{props.title} </h1>
      <p>{props.content}</p>
      
      { props.permission == "modify" && <button className="deletebutton" onClick = {click} >DELETE</button>}
      </div>
  );
}

export default Note;
