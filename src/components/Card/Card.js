import React from 'react'
import styles from "./Card.module.css"

const Card = ({title, image, lecture, tags}) => { //destructuring en la llamada, usamos destructuring de entrada (sin usar props o .props)
  //const {title, image} = props
  return (
    <div className={styles.card}>
      <img src={image} alt={image}/>
      <div className={styles.info}>
        <div className={styles.container_tags}>
          <h2>{title}</h2>
          <p>{lecture}</p>
          <p>{tags}</p>
        </div>
          <button>Checkout!</button>
      </div>
    </div>
  )
};

export default Card