import './styles.css'
import mole from '../../assets/mole.png'
import hole from '../../assets/hole.png'
import { useEffect, useState } from 'react'

export function WackAMole() {
  const [score, setScore] = useState(0)
  const [moles, setMoles] = useState<boolean[]>(new Array(9).fill(false))

  function handleMoleVisibility(index: number, isVisible: boolean) {
    setMoles((prevMoles) => {
      const newMoles = [...prevMoles]
      newMoles[index] = isVisible
      return newMoles
    })
  }

  function handleClick(index: number) {
    if(!moles[index]) return
    handleMoleVisibility(index, false)
    setScore((score) => score + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length)
      handleMoleVisibility(randomIndex, true)

      setTimeout(() => {
        handleMoleVisibility(randomIndex, false)
      }, 800)
    }, 1000)

    return () => clearInterval(interval)
  }, [moles])

  return (
    <div className="wack-container">
      <h1 className='wack-score'>Score {score}</h1>

      <div className="wack-grid">
        {moles.map((isMole, idx) => (
          <img
            key={idx}
            src={isMole ? mole : hole}
            alt="wackAMole"
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
    </div>
  )
}