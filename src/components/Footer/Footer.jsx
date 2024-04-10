import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			Website Developed{' '}
			<a className={styles.link} href='https://github.com/alkeev00'>
				Alkeev Ivan
			</a>
		</footer>
	)
}

export default Footer
