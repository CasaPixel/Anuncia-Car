import React, { useState } from 'react';
import data from './FAQComponents/Data';
import SingleQuestion from './FAQComponents/FAQ';
import "./FAQComponents/FAQ.css";

const FAQApp = () => {
  const [questions] = useState(data);

  return (
    <main>
      <div className='container'>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default FAQApp;