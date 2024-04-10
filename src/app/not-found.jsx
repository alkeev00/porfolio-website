import React from 'react'
import styles from '../styles/notFound.module.css'
import Link from 'next/link'
import { IoIosArrowRoundBack } from 'react-icons/io'

const NotFound = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>
				<span>404</span>
				<p>error</p>
			</h1>
			<p className={styles.subtitle}>we can’t find that page</p>
			<p className={styles.description}>
				Sorry, the page you are looking for doesn’t exist or has been moved{' '}
			</p>
			<div className={styles.buttons}>
				<Link href={'/'}>
					<button className={styles.btn}>
						<IoIosArrowRoundBack className={styles.btnIcon} />
						<p className={styles.btnText}>go home</p>
					</button>
				</Link>
			</div>
		</div>
	)
}

export default NotFound
