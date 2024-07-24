import { useState, useEffect, useContext } from 'react'
import Question from './Question'
import GameButtons from './GameButtons'
import Questions from './Questions'
import { MainContext } from './Main'

const Quiz = () => {

    const startQuiz = useContext(MainContext)
    const [data, setData] = useState([])
    const [questionsAnswered, setQuestionsAnswered] = useState(false)
    const [newGame, setNewGame] = useState(false)

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple')
            .then(res => res.json())
            .then(data => {
                const appendedData = data.results.map(data => {
                    return {
                        ...data,
                        answerChosen: '',
                        isAnswered: false
                    }
                })
                setData(appendedData)
            })
    }, [newGame])

    const renderQuestions = data.map(data => {
        return <Question questionsAnswered={questionsAnswered} key={data.question} data={data} setData={setData} />
    })

    const correctAnswers = data.filter(item => item.answerChosen === item.correct_answer)

    return (
        <>
            <Questions renderQuestions={renderQuestions} />
            <div className="bottom-section">
                {questionsAnswered && <> <p className="result">You scored {correctAnswers.length}/{data.length} correct answers</p></>}
                <GameButtons 
                    questionsAnswered={questionsAnswered}
                    data={data}
                    setData={setData}
                    setQuestionsAnswered={setQuestionsAnswered}
                    setNewGame={setNewGame}
                />
            </div>
        </>
    )
}

export default Quiz