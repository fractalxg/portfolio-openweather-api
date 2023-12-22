import React, { useState, useEffect } from 'react'
import './Population.css'
import Footer from './Footer'

const AnimatedPopulation = ({ population }) => {
  const [displayedPopulation, setDisplayedPopulation] = useState(0)

  useEffect(() => {
    const populationDecrease = 500
    const velocity = 1000
    let startPopulation = population - populationDecrease > 0 ? population - populationDecrease : 0 
    const populationIncrement = (population - startPopulation) / populationDecrease

    const interval = setInterval(() => {
      startPopulation += populationIncrement
      if (startPopulation >= population) {
        clearInterval(interval)
        startPopulation = population
      }
      setDisplayedPopulation(Math.floor(startPopulation))
    }, velocity) 

    return () => clearInterval(interval)
  }, [population])

  return <p>{displayedPopulation.toLocaleString()}</p>
}

const Population = ({ weather }) => {
    

  return (
    <div>
      {weather &&
        weather.map((data) => (
          <div key={data.city.id}>
            <div className="population">
              <div className="text">
                <p>População</p>
              </div>
              <div className="data">
                <AnimatedPopulation population={data.city.population} />
              </div>
            </div>
            <Footer />
          </div>
          
        ))}
        
    </div>
  )
}

export default Population
