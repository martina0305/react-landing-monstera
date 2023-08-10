import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img style={{height: 600, width: 1600}} className={styles.img_hero} src='./assets/7.jpg' alt=''/>
      <div className={styles.container_titles}>
        <h1>Monstera Lovers Community</h1>
        <p>a place where plant enthusiasts come together to share their passion for all things green. From houseplants to outdoor gardening, we're here to help you grow and care for your plants.</p>
        <button className={styles.learn_more}>Learn more</button>
        <button className={styles.join_us}>Join us</button>
      </div>
    </div>
  )
};

export default Hero