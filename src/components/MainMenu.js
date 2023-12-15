import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import "../App.css"

export const MainMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext);

  return (
    <div  >
        <button className='btn' onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div >
  )
}
