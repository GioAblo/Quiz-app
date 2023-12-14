import React, {useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';

export const MainMenu = () => {
    const {gameState, setGameState} = useContext(QuizContext);

  return (
    <div>
        <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  )
}
