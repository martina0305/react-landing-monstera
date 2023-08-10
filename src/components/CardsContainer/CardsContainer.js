import React from 'react'
import Card from '../Card/Card'
import styles from './CardsContainer.module.css'


const data =[
  {
    title: "Propagating Plants: A Beginner's Guide to Plant Propagation",
    image: "assets/8.jpg",
    lecture: "2' min",
    tags: "indoor"
  },
  {
    title: "The Best Houseplants for Low-Light Environments",
    image: "./assets/6.jpg",
    lecture: "4' min",
    tags: "indoor"
  },
  {
    title: "How to Water Your Plants: A Guide to Proper Plant Hydration",
    image: "assets/5.jpg",
    lecture: "5' min",
    tags: ["monstera albo"]
  }
]

const CardsContainer = () => {

  return (
    <section className={styles.cards_container}>
      <h2>Easy Tips for Caring for Your Indoor Jungle</h2>
      <p className={styles.cards_container_p}>Turn your home into a vibrant oasis with our simple yet effective indoor plant care tips. From watering techniques to lighting requirements, we'll show you how to keep your leafy companions thriving and your space brimming with life.Get ready to enjoy the benefits of a flourishing indoor jungle!</p>
      {data.map((art)=> (
        <Card title={art.title} image={art.image} lecture ={art.lecture} tags={art.tags}/>
      ))}
    </section>
  )
};

export default CardsContainer