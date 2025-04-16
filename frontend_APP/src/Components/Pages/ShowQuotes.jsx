import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
const ShowQuotes = () => {
  const {id} = useParams();
  const [quote,setQuote] = useState({author:'',text:''});
  async function getQuote(id){
    let res = await axios.get(`http://localhost:5000/quotes/${id}`);
    let {author,text} = res.data;
    setQuote({author,text});
  }
  useEffect(()=>{
    getQuote(id);
  },[id])
  return (
    <div style={{fontSize:"4rem"}}>
        {quote.text ? <span>
            <h3>author -{quote.author}</h3>
            <h6>quote -{quote.text}</h6>
        </span> : <h1>Loading..</h1>}
    </div>
  )
}

export default ShowQuotes