import { useState } from 'react'

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [best, setBest] = useState(0)
  const [votesCount, setVotesCount] = useState(Array(8).fill(0))

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * 8))
  }

  const handleVote = () => {
    const updatedVotesCount = [...votesCount]
    updatedVotesCount[selected] += 1
    setVotesCount(updatedVotesCount)

    for (let i = 0; i < updatedVotesCount.length; i++) {
      const vote = updatedVotesCount[i];
      if (vote > updatedVotesCount[best]) setBest(i)
    }
  }



  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votesCount[selected]} votes</p>
      <div>
        <Button handleClick={handleVote} text="vote" />
        <Button handleClick={handleNext} text="next anecdote" />
      </div>
      <h1>Anecdote with the most votes</h1>
      <div>
        {anecdotes[best]}
        <p>has {votesCount[best]} votes</p>
      </div>
    </div>
  )
}

export default App