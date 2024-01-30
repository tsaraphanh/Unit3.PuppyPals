import { useState } from 'react'
import { puppyList } from './data.js'
import './app.css'
import './index.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)

  return (
    <div class='container'>
      {
       puppies.map((puppy) => {
        return <p class='featuredPupContainer puppyItem puppyList' onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
       }) 
      }
      { featPupId && (
        <div>
          <h2 class='featuredPupName'>{featuredPup.name}</h2>
          <ul class='featuredPupDetails'>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
