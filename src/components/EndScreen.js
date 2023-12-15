import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import "../App.css"

export const EndScreen = () => {

    const {score, setScore, setGameState} = useContext(QuizContext);

    const resetQuiz = () => {
        setScore(0);
        setGameState("menu")
    }

  return (
    <div className='endscreen'>
        <h2>Quiz Finished</h2>
        <p>{score} correct answers out of {Questions.length} </p>
        <button className='btn' onClick={resetQuiz}>Reset</button>
    </div>
  )
}
 