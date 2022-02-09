import React from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faSearchengin } from '@fortawesome/free-brands-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const Navbar = (props) => {
        return(
            <div className={styles.navbar}>
                <div className={styles.titleArea}>
                    <FontAwesomeIcon icon={faYoutube} className={styles.faYoutube}/>
                    <h2 className={styles.title}>Youtube</h2>
                </div>
                <div className={styles.searchBar}>
                    <form method="get" className={styles.getForm}>
                        <input type="text" className={styles.getInput} placeholder="Search..."/>
                        <button className={styles.getButton}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.buttonImg}/>
                        </button>
                    </form>
                </div>
            </div>
        )
    };

export default Navbar;