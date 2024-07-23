import './App.scss'
import useSEO from './hooks/useSEO'
import useAdvice from './hooks/useAdvice'
import Dividers from './components/Dividers'
import Footer from './components/Footer'
import { useMediaQuery } from 'react-responsive'

export default function App() {
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const { advice, adviceId, handleClick, rotate } = useAdvice()

	useSEO({
		title: `#${adviceId} - Advice generator`,
    description: "",
	})

	return (
		<main className='container'>
			<article className='card'>
				<h6>Advice #{adviceId}</h6>
				<p>{`“${advice}”`}</p>
				<Dividers
					query={isMobile}
					className='divider'
				/>
				<button onClick={handleClick}>
					<svg
						width='24'
						className={rotate ? 'rotateA' : 'rotateB'}
						height='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'
							fill='#202733'
						/>
					</svg>
				</button>
			</article>
			<Footer author='YeiserBytes' />
		</main>
	)
}
