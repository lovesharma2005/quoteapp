import React from 'react'
import styles from './Quote.module.css'
import { useNavigate } from 'react-router-dom';
const Quote = (props) => {
  let navigate = useNavigate();
  return (
    <li className={styles.quote}>
      <span>
        <p>{props.text}</p>
        <h4>by :- {props.author}</h4>
      </span>
      <button onClick={()=>navigate(`/quotes/${props.id}`)}>View full</button>
    </li>
  )
}

export default Quote