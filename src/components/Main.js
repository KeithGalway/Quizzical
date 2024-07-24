import { useState, createContext } from 'react'
import HomeScreen from './HomeScreen'
import Quiz from './Quiz'
import Blob from './Blob'

const MainContext = createContext()

const Main = () => {
    const [startQuiz, setStartQuiz] = useState(false)
    return (
        <main className="main">
            <MainContext.Provider value={startQuiz}>
                {startQuiz ? <Quiz /> : <HomeScreen setStartQuiz={setStartQuiz} />}
                <Blob className="first-blob" smallBlob="first-little-blob" />
                <Blob className="second-blob" smallBlob="second-little-blob" />
            </MainContext.Provider>
        </main>
    )
}

export default Main
export { MainContext }