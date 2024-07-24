import { useEffect } from 'react'
import he from 'he'

const Question = ({ data, questionsAnswered, setData }) => {

    const { question, correct_answer, incorrect_answers } = data

    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ]
        }

        return array
    }

    useEffect(() => {
        setData((data) => data.map((item) => ({
            ...item,
            answerArray: shuffle([...item.incorrect_answers, item.correct_answer])
        })))
    }, [setData])

    const handleAnswerChange = (event) => {
        const selectedValue = event.target.value
        setData((data) => data.map((item) =>
            item.question === question
                ? { ...item, isAnswered: true, answerChosen: selectedValue }    
                : item
        ))
    }

    const renderAnswers = data.answerArray ? data.answerArray.map((answer, i) => {
        const isSelected = data.answerChosen === answer
        const isCorrect = answer === data.correct_answer
        const isIncorrect = questionsAnswered && isSelected && !isCorrect
        const isAfterCheck = questionsAnswered && !isSelected && !isCorrect

        const answerClasses = [
            "radio-label",
            isSelected ? "selected-answer" : "",
            questionsAnswered && isCorrect ? "correct-answer" : "",
            isIncorrect ? "incorrect-answer" : "",
            isAfterCheck ? "after-check" : ""
        ]

        return (
            <label className={answerClasses.join(" ")} key={i}>
                <input 
                    type="radio"
                    name="answer"
                    className="radio"
                    value={answer}
                    onChange={handleAnswerChange}
                    disabled={questionsAnswered}
                />
                {he.decode(answer)}
            </label>
        )
    }) : null

    return (
        <div className="question">
            <h1 className="question-title">{he.decode(question)}</h1>
            <div className="answers">
                {renderAnswers}
            </div>
        </div>
    )
}

export default Question