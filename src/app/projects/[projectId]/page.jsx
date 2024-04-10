import React from 'react'
import styles from '../../../styles/project.module.css'

const ProjectPage = ({ params }) => {
	return (
		<div className={styles.project}>
			<div className={styles.content}>
				<div className={styles.title}>
					<h1>Project {params.projectId}</h1>
				</div>
			</div>
		</div>
	)
}

export default ProjectPage
