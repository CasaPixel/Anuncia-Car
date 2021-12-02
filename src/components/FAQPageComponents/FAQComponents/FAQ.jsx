import React, { useState } from 'react';
import { AiOutlineUp, AiOutlineRight } from 'react-icons/ai';


const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
          {title}
        </h4>
        <button className='btn-question' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineUp  /> : <AiOutlineRight />}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  )
}

export default Question;