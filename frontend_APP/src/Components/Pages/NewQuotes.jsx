import React,{useRef} from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import styles from "./NewQuotes.module.css"
const NewQuotes = () => {
  const navigate = useNavigate();
  let usernameInputRef = useRef();
  let quoteInputRef = useRef();
  function addQuoteHandler(e){
    e.preventDefault();
    const author = usernameInputRef.current.value;
    const text = quoteInputRef.current.value;
    try{
      let res = axios.post("http://localhost:5000/addQuotes",{author,text});
      // console.log(res);
      navigate("/");
    }
    catch(e){
      console.log("error in post request "+e);
    }
  }
  return (
    <form className={styles.inp} onSubmit={addQuoteHandler}>
      <div>
        <label htmlFor='author'>Author: </label>
        <input type='text' id='author' placeholder="Author's name" ref={usernameInputRef}/>
      </div>
      <div>
        <label htmlFor='quote'>Quote: </label>
        <textarea name="" id="quote" cols={15} rows={4} placeholder="Author's Quote" ref={quoteInputRef}></textarea>
      </div>
      <button>Add Quote</button>
    </form>
  )
}

export default NewQuotes