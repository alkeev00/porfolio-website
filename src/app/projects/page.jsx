import React from 'react'
import Link from 'next/link'
import styles from '../../styles/projects.module.css'

const ProjectsPage = () => {
	return (
		<div className={styles.projects}>
			<div className={styles.content}>
				<div className={styles.title}>
					<h1>Projects</h1>
				</div>
				<ul className={styles.projectsList}>
					<li className={styles.projectItem}>
						<Link href='/projects/1'>Project 1</Link>
					</li>
					<li className={styles.projectItem}>
						<Link href='/projects/1'>Project 2</Link>
					</li>
					<li className={styles.projectItem}>
						<Link href='/projects/1'>Project 3</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ProjectsPage
