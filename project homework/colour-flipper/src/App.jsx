import { useState } from 'react'
import './styles.css'

const simpleColors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function App() {
  const [mode, setMode] = useState('simple')
  const [color, setColor] = useState('#f1f5f8')

  const getRandomNumber = (max) => Math.floor(Math.random() * max)

  const clickColor = () => {
    if (mode === 'hex') {
      let hexColor = '#'

      for (let i = 0; i < 6; i += 1) {
        hexColor += hexValues[getRandomNumber(hexValues.length)]
      }

      setColor(hexColor)
      return
    }

    const randomColor = simpleColors[getRandomNumber(simpleColors.length)]
    setColor(randomColor)
  }

  return (
    <>
      <nav>
        <div className="nav-center">
          <h4>color flipper</h4>
          <ul className="nav-links">
            <li>
              <a href="#" onClick={() => setMode('simple')}>simple</a>
            </li>
            <li>
              <a href="#" onClick={() => setMode('hex')}>hex</a>
            </li>
          </ul>
        </div>
      </nav>

      <main style={{ backgroundColor: color }}>
        <div className="container">
          <h2>
            background color : <span className="color">{color}</span>
          </h2>
          <button className="btn btn-hero" id="btn" onClick={clickColor}>
            click me
          </button>
        </div>
      </main>
    </>
  )
}

export default App
