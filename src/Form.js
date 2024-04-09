import { useState } from "react";

function Form({ addReading }) {
    const [question, setQuestion] = useState('')

    function getReading(e) {
        e.preventDefault()
        return fetch('https://api.quotable.io/quotes/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Uh oh! Flip a coin.')
                } else {
                    return response.json()
                }
            })
            .then(reading => handleSubmit(question, reading[0].content))
            .catch(err => console.log(err))

    }

    function makeReading(ask, res) {
        return {
            question: ask,
            response: res
        }
    }

    function handleSubmit(ask, res) {
        const newReading = makeReading(ask, res);
        addReading(newReading)
        setQuestion('')
    }

    return (
        <form onSubmit={(e) => {getReading(e)}}>
            <label htmlFor="question-input">Get your fortune told!</label>
            <input type="text" id="question-input" value={question} placeholder="Will I get a pony?" required onChange={(e) => {setQuestion(e.target.value)}}></input>
            <input type="submit"></input>
        </form>
    )
}

export default Form