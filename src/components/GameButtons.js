import Button from './Button'

const GameButtons = ({ questionsAnswered, data, setData, setQuestionsAnswered, setNewGame }) => {

    const unAnsweredQuestions = data.some(item => item.isAnswered === false)

    const resetData = () => {
        setData(data => data.map(data => {
            return {
                ...data,
                answerChosen: '',
                isAnswered: false
            }
        }))
    }

    const handleCheckAnswers = () => {
        setQuestionsAnswered(prev => !prev)
    }

    const handleNewGame = () => {
        setNewGame(prev => !prev)
    }

    return (
        <>
            {!questionsAnswered && <Button disabled={unAnsweredQuestions} onClick={() => {
                handleCheckAnswers()
            }}  className="button check-answers">Check answers</Button>}
            {questionsAnswered && 
                <>
                    <Button onClick={() => {
                        handleCheckAnswers()
                        resetData()
                        }}
                        className="button play-again"
                    >
                        Play again
                    </Button>
                    <Button onClick={() => {
                        handleCheckAnswers()
                        resetData()
                        handleNewGame()
                        }}
                        className="button play-again"
                    >
                        New game
                    </Button>
                </>
            }
        </>
    )
}

export default GameButtons