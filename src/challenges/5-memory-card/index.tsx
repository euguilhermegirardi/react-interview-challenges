import { useState } from "react"
import './styles.css'

type TPreviousCard = {
  row: number
  column: number
}

export function MemoryCard() {
  const grid = [
    [0, 1],
    [1, 0],
    [2, 2]
  ]

  const [revealedGrid, setRevealedGrid] = useState(
    new Array(grid.length).fill("").map(() =>
      new Array(grid[0].length).fill(false)
    )
  )

  const [previousCard, setPreviousCard] = useState<TPreviousCard | undefined>()

  function handleCards(rowIndex: number, columnIndex: number) {
    if (revealedGrid[rowIndex][columnIndex]) return

    const clickedCard = grid[rowIndex][columnIndex]
    const newRevealedGrid = [...revealedGrid]

    newRevealedGrid[rowIndex][columnIndex] = true
    setRevealedGrid(newRevealedGrid)


    if (previousCard) {
      const previousClickedCard = grid[previousCard.row][previousCard.column]
      console.log(previousClickedCard)

      if (previousClickedCard !== clickedCard) {
        setTimeout(() => {
          newRevealedGrid[rowIndex][columnIndex] = false
          newRevealedGrid[previousCard.row][previousCard.column] = false
          setRevealedGrid([...newRevealedGrid])
        }, 1000)
      } else {
        const hasWon = revealedGrid.flat().every(isRevealed => isRevealed)

        if (hasWon) {
          setTimeout(() => {
            alert('Uhul! You have won!')
            setRevealedGrid(new Array(grid.length).fill("").map(() =>
              new Array(grid[0].length).fill(false)))
          }, 500)
        }
      }

      setPreviousCard(undefined)
    } else {
      setPreviousCard({
        row: rowIndex,
        column: columnIndex
      })
    }

    console.log(newRevealedGrid)
  }

  return (
    <main className="memory-content">
      {grid.map((row, rowIndex) => (
        <div className="memory-content__row" key={rowIndex}>
          {row.map((number, columnIndex) => (
            <button
              key={columnIndex}
              className={"memory-content__card " + (revealedGrid[rowIndex][columnIndex] ? "revealed" : "")}
              onClick={() => handleCards(rowIndex, columnIndex)}
            >
              {revealedGrid[rowIndex][columnIndex] ? number : ' '}
            </button>
          ))}
        </div>
      ))}
    </main>
  )
}