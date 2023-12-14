import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';

export const EndScreen = () => {

    const {score, setScore, setGameState} = useContext(QuizContext);

    const resetQuiz = () => {
        setScore(0);
        setGameState("menu")
    }

  return (
    <div>
        <h2>Quiz Finished</h2>
        <p>{score}/{Questions.length}</p>
        <button onClick={resetQuiz}>Reset</button>
    </div>
  )
}
 