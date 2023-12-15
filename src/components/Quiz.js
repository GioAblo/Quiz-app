import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Contexts';

export const Quiz = () => {
    const {score, setScore, setGameState} = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const [check, setCheck] = useState(false)

    const nextQuestion = () => {
        if(Questions[currQuestion].answer === optionChosen){
          setScore(score + 1);
        }
          setCurrQuestion(currQuestion + 1)
    };

    const finishQuiz = () => {
      if(Questions[currQuestion].answer === optionChosen){
        setScore(score + 1);
      }
      setGameState("endScreen");
    }

    const checkOption = (e) => {
      setOptionChosen(e);
      setCheck(!check)
    }

  return (
    <div className='quiz'>
        <p>{Questions[currQuestion].prompt}</p>
        <div  className='quiz-op'> 
            <button className={`${check ? 'border' : ''}`}  id='bottone1' onClick={() => checkOption("A")}><strong>{Questions[currQuestion].optionA}</strong></button>
            <button className={`${check ? 'border' : ''}`} id='bottone1' onClick={() => checkOption("B")}><strong>{Questions[currQuestion].optionB}</strong></button>
            <button className={`${check ? 'border' : ''}`} id='bottone1' onClick={() => checkOption("C")}><strong>{Questions[currQuestion].optionC}</strong></button>
            <button className={`${check ? 'border' : ''}`} id='bottone1' onClick={() => checkOption("D")}><strong>{Questions[currQuestion].optionD}</strong></button>
        </div>
        {currQuestion == Questions.length - 1 ? (
          <button className='btn' onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button className='btn' onClick={nextQuestion}>Next</button>
        )}
        
    </div>
  )
}
