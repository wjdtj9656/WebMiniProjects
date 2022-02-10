import React, { useRef } from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const Navbar = (props) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        props.onSearch(value);
        
    }
    const onKeyPress = (event) => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    }
    const onClick = () => {
        handleSearch();
    }
        return(
            <div className={styles.navbar}>
                <div className={styles.titleArea}>
                    <FontAwesomeIcon icon={faYoutube} className={styles.faYoutube}/>
                    <h2 className={styles.title}>Youtube</h2>
                </div>
                <div className={styles.searchBar}>
                    <div className={styles.getForm}>
                        <input 
                        ref = {inputRef}
                        type="text" 
                        className={styles.getInput} 
                        placeholder="Search..."
                        onKeyPress={onKeyPress}/>
                        <button className={styles.getButton}
                        onClick={onClick}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.buttonImg}/>
                        </button>
                    </div>
                </div>
            </div>
        )
    };

export default Navbar;