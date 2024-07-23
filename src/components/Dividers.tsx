interface DivProps {
	query: boolean
	className?: string
}

export default function Dividers({ query, className }: DivProps) {
	return (
		<figure>
			{query ? (
				<svg
					width='295'
					className={className}
					height='16'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g
						fill='none'
						fillRule='evenodd'
					>
						<path
							fill='#4F5D74'
							d='M0 8h122v1H0zM173 8h122v1H173z'
						/>
						<g
							transform='translate(138)'
							fill='#CEE3E9'
						>
							<rect
								width='6'
								height='16'
								rx='3'
							/>
							<rect
								x='14'
								width='6'
								height='16'
								rx='3'
							/>
						</g>
					</g>
				</svg>
			) : (
				<svg
					width='444'
					className={className}
					height='16'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g
						fill='none'
						fillRule='evenodd'
					>
						<path
							fill='#4F5D74'
							d='M0 8h196v1H0zM248 8h196v1H248z'
						/>
						<g
							transform='translate(212)'
							fill='#CEE3E9'
						>
							<rect
								width='6'
								height='16'
								rx='3'
							/>
							<rect
								x='14'
								width='6'
								height='16'
								rx='3'
							/>
						</g>
					</g>
				</svg>
			)}
		</figure>
	)
}
