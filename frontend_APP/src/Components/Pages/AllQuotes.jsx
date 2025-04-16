import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Quote from '../../Quote/Quote'
const AllQuotes = () => {
  const [quotes,setQuotes] = useState([]);
  async function getQuotes(){
    let res = await axios.get("http://localhost:5000/allQuotes");
    console.log(res);
    setQuotes(res.data);
  }
  useEffect(()=>{
    getQuotes();
  },[])
  return (
    <div>
      <h1 style={{color:"red",textAlign:"center"}}>All quotes</h1>
      <ul>
        {quotes.length==0 ? <h1>Pls create new</h1> : quotes.map((item,idx)=><Quote key={idx} author={item.author} text={item.text} id={item._id} />)}
      </ul>
    </div>
  )
}

export default AllQuotes