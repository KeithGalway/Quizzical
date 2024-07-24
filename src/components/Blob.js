import { useContext } from 'react'
import { MainContext } from './Main'

const Blob = ({ className, smallBlob }) => {

    const startQuiz = useContext(MainContext)
    const littleBlob = startQuiz ? smallBlob : ''

    return (
        <div className={`${className} ${littleBlob}`}></div>
    )
}

export default Blob