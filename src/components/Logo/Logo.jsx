import styles from './Logo.module.css'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href={'/'}>
			<h1 className={styles.logo}>
				<div className={`${styles.word} ${styles.ivan}`}>
					<div className={styles.char}>I</div>
					<div className={styles.animation}>VAN</div>
				</div>
				<div className={`${styles.word} ${styles.alkeev}`}>
					<div className={styles.char}>A</div>
					<div className={styles.animation}>LKEEV</div>
				</div>
			</h1>
		</Link>
	)
}

export default Logo
