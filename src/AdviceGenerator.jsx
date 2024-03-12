import React, { useState, useEffect } from "react";
import dividerDesktop from '../src/assets/pattern-divider-desktop.svg';
import dividerMobile from '../src/assets/pattern-divider-mobile.svg';
import dice from '../src/assets/icon-dice.svg';

function AdviceGenerator() {
   const [data, setData] = useState("");

   useEffect(() => {
      randomizeAdvice();
   }, []);

   function randomizeAdvice() {
      fetch('https://api.adviceslip.com/advice')
         .then(response => response.json())
         .then(data =>
            setData(data.slip)
         )
         .catch(error => console.error(error));
   }

   return (
      <div className="container">
         <span className="advice-id">Advice #{data.id}</span>
         <p className="quote">
            "{data.advice}"
         </p>
         <img src={dividerDesktop} className="divider-desktop" />
         <img src={dividerMobile} className="divider-mobile" />
         <button className="dice-button" onClick={randomizeAdvice}>
            <img src={dice} />
         </button>
      </div>
   );
}

export default AdviceGenerator