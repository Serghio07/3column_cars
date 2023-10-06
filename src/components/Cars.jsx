import React from 'react'
import './styles/Cars.css'
function Cars(props) 
{
    const cars=props.cars
    const theme=cars.theme
    return(
        <section className={`cars cars-container ${theme}`}>
              
                <img src={cars.imgUrl} alt={cars.title} />
                <h2>{cars.title}</h2>
                <p>{cars.description}</p>
              
        </section>

    )
}
export default Cars