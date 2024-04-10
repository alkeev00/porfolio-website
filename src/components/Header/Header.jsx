'use client'

import React, { useState } from 'react'
import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { CSSTransition } from 'react-transition-group'

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false)

	const handleOpenMenu = () => {
		setMenuIsOpen(!menuIsOpen)
	}

	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.menu}>
				<button className={styles.menuButton} onClick={handleOpenMenu}>
					{menuIsOpen ? (
						<FiMinus className={styles.minusIcon} />
					) : (
						<FiPlus className={styles.plusIcon} />
					)}
					Menu
				</button>
				{menuIsOpen ? (
					<div
						onClick={() => setMenuIsOpen(false)}
						className={styles.menuWrapper}
					></div>
				) : (
					''
				)}
				<CSSTransition
					in={menuIsOpen}
					classNames={{
						enter: styles.menuEnter,
						enterActive: styles.menuEnterActive,
						enterDone: styles.menuEnterDone,
						exitActive: styles.menuExitActive,
						exitDone: styles.menuExitDone,
					}}
					timeout={400}
					mountOnEnter
					unmountOnExit
				>
					<Menu
						className={styles.menuEffect}
						onClick={() => setMenuIsOpen(false)}
					/>
				</CSSTransition>
			</div>
		</header>
	)
}

export default Header
