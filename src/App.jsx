import { useState } from 'react'
import './App.css'
import concepts from './utils/concepts.json'
import Concepts from './components/Concepts'
import BtnConcepts from './components/BtnConcepts'
import getRandom from './utils/getRandom'
import arr from './utils/arr.json'

function App() {

  const initialConcept = getRandom(concepts)
  const [conceptRandom, setConceptRandom] = useState(initialConcept)
  const {tittle, concept} = conceptRandom

  const initialImage = getRandom(arr)
  const [imageRandom, setImageRandom] = useState(initialImage)

  const objStyle = {
    backgroundImage: `url(./img/fondo${imageRandom}.png)`
  }
  

  return (
    <div className="app" style={objStyle}>
      <h1 className="app__tittle">Conceptos de React</h1>
      
      <section className="app__section">
      <Concepts concept={concept} tittle={tittle} />
      <BtnConcepts setImageRandom={setImageRandom} setConceptRandom={setConceptRandom}/>
      </section>

    </div>
  )
}

export default App
