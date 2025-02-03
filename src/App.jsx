import React, {useState} from 'react'
import './App.css'
import { puppyList } from './data'






function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)



  
  console.log(puppies)
  return (
    <>
    <div className='App'>
      { featPupId && <p>{featPupId}</p>}
      {
        puppies.map((puppy) => {
          return <p className='pups' onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
      }
    </div>
    { featPupId && (
        <div className='container'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li> Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  )
}

export default App
 