import React, { useState } from "react";
import Note from "./Note"
import AddIcon from '@material-ui/icons/Add';
var arr=[]
function CreateArea() {
 const [notes,setnotes]=useState([])
  const [pnote,setpnote]=useState({
    Title:"",
    Note:""
  });
  function Onchange(event)
  {setpnote({...pnote,Note:event.target.value})}
  function OnTitle(event)
  {setpnote({...pnote,Title:event.target.value})}
  function createnote(event)
  {
    arr.push(pnote)
    setnotes(arr)
    event.preventDefault();
  }
  function deletenode(id)
  {var tarr;console.log(id)
    tarr=(notes.filter((x,index)=>{return index!==id}))
    setnotes(tarr);
  }
  return (
    <div>
      <form onSubmit={createnote} >
        <input name="title" placeholder="Title" onChange={OnTitle}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={Onchange} />
        <button type="submit"><AddIcon/></button>
      </form>
  {notes.map(function(x,index){return (<Note id={index} key={index} title={x.Title} content={x.Note} onDelete={deletenode}/> )})}
      </div>)
   
}

export default CreateArea;
