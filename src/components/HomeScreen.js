import Button from './Button'

const HomeScreen = ({ setStartQuiz }) => {
    return (
        <>
            <h1 className="quiz-title">Quizzical</h1>
            <p className="decription">Some description if needed</p>
            <Button onClick={setStartQuiz} className="start-quiz">Start quiz</Button>
        </>
    )
}

export default HomeScreen