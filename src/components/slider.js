import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import review from './review.js';

const Slider = () => {

    const [people, setPeople] = useState(review);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);


  return (
    <section className="section">

      <div className="title">
        <h2 className='heading3'>
          REVIEWS
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, name, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>

              <p className="text">{quote}</p>
              <h4>{name}</h4>
              <FaQuoteRight className="icon" />

            </article>
          );
        })}

        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>

      </div>
      
    </section>
  )
}

export default Slider