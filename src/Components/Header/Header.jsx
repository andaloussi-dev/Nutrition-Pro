import React from 'react'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <span className={styles.headerText}> Pro Nutritions </span>
        </div>
    )
}
