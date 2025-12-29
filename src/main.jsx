import { StrictMode } from 'react'

// important the createRoot function from react-dom/client
import { createRoot } from 'react-dom/client'

import './index.css'
//import App from './App.jsx'
const root = createRoot(document.getElementById('root'))
root.render(<ul>
  <li>First react app</li>
  <li>new to react</li>
  <li>didn't know much</li>
  <li>will learn more</li>
  <li>I'm learning</li>
</ul>
)
var score = 0;
const btn = createRoot(document.getElementById('button'))
btn.render(
  <button onClick={() => addScore()}>Click Me!</button>
)

function addScore(){
  score += 1;
  root1.render(
    <h5>{score}</h5>
  )
}

const root1 = createRoot(document.getElementById('r1'))
root1.render(
<h5>{score}</h5>)
