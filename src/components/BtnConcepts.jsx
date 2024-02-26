import getRandom from "../utils/getRandom"
import image from '../utils/arr.json'
import concept from '../utils/concepts.json'
import './style/BtnConcepts.css'

const BtnConcepts = ({setImageRandom, setConceptRandom}) => {
  
    const handlerBtn = () => {

        setImageRandom(getRandom(image))
        setConceptRandom(getRandom(concept))

    }

    return (
    <button className="btn" onClick={handlerBtn}>Nuevo Concepto</button>
  )
}

export default BtnConcepts