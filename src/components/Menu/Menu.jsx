import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import { FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { TbMailFilled } from 'react-icons/tb'
import { RiInstagramFill } from 'react-icons/ri'

const Menu = ({ onClick }) => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.menuList}>
				<li className={styles.menuItem}>
					<Link href='/' onClick={onClick}>
						Main
					</Link>
				</li>
				<li className={styles.menuItem}>
					<Link href='/about' onClick={onClick}>
						About Me
					</Link>
				</li>
				<li className={styles.menuItem}>
					{' '}
					<Link href='/services' onClick={onClick}>
						Services
					</Link>
				</li>
				<li className={styles.menuItem}>
					{' '}
					<Link href='/projects' onClick={onClick}>
						Projects
					</Link>
				</li>
				<li className={styles.menuItem}>
					{' '}
					<Link href='/contact' onClick={onClick}>
						Contact
					</Link>
				</li>
			</ul>
			<ul className={styles.socialList}>
				<li className={styles.socialItem}>
					<a href='mailto:alkeev.iv@gmail.com'>
						<TbMailFilled />
					</a>
				</li>
				<li className={styles.socialItem}>
					<a href='https://t.me/alkeevivan'>
						<FaTelegramPlane />
					</a>
				</li>
				<li className={styles.socialItem}>
					<a href='https://github.com/alkeev00'>
						<FaGithub />
					</a>
				</li>
			</ul>
			{/* <div className={styles.menuItem}>
				<Link href={'/privacy'} onClick={onClick}>
					Privacy
				</Link>
			</div> */}
		</nav>
	)
}

export default Menu
