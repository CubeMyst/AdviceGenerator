interface footerProp {
	author?: string | null
}

export default function Footer({ author }: footerProp) {
	return (
		<footer className='attribution'>
			Challenge by{' '}
			<a
				href='https://www.frontendmentor.io?ref=challenge'
				target='_blank'
				rel='noreferrer'
			>
				Frontend Mentor
			</a>
			. Coded by{' '}
			<a
				href={`https://github.com/${author}`}
				target='_blank'
				rel='noopener noreferrer'
			>
				{author}
			</a>
			.
		</footer>
	)
}
