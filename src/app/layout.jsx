import { Lexend_Exa, Shadows_Into_Light } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header/Header'

const lexend = Lexend_Exa({ subsets: ['latin'], variable: '--font-lexend' })
const shadows = Shadows_Into_Light({
	subsets: ['latin'],
	variable: '--font-shadows',
	weight: '400',
})

export const metadata = {
	title: 'Ivan Alkeev - Portfolio Website',
	description: 'Portfolio Website',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${shadows.variable} ${lexend.variable}`}>
				<Header />
				<div className='wrapper'>{children}</div>
			</body>
		</html>
	)
}
