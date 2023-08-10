import React from 'react'
import styles from './Newsletter.module.css'

const Newsletter = () =>{

    return( 
        <section className={styles.newsletter_section}>
            <div className={styles.background}></div>
                <img src='assets/1.jpg' alt="image bakcground leaf"/>

                <div className={styles.container_text}>
                    <h3>Warning: our newsletter may cause extreme excitement and obsession with houseplants. Join at your own risk!</h3>
                    <p>Sign up for our newsletter and stay up-to-date on the latest plant trends, news, and tips. Just enter your email address in the form below and hit "subscribe" to start receiving our newsletter.</p>
                    <form>
                        <input type="text" placeholder="loverplants@monstera.com"></input>
                        <button type="submit">I want to suscribe</button>
                    </form>
                </div>
        </section>
    )
};

export default Newsletter;
