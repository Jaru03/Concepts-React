import './style/Concepts.css'

const Concepts = ({tittle, concept}) => {
  return (

    <div className="card">
      
      <h2 className="card__tittle">{tittle}</h2>
      <p className="card__concept">{concept}</p>
  
    </div>
  )
}

export default Concepts