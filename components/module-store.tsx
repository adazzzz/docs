import { useEffect, useState } from 'react'
import { Code, Pre } from 'nextra/components'

export default function ModuleStore() {
	const [isLoading, setIsLoading] = useState(true)
	const [modules, setModules] = useState([])

	useEffect(() => {
		const fetchModules = async () => {
			try {
				setIsLoading(true)
				const res = await fetch(
					'https://raw.githubusercontent.com/Crossbell-Box/Crossbell-Contracts/main/deployments/modules.json'
				).then(res => res.json())

				setModules(res)
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchModules()
	}, [])

	return (
		<div>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div>
					<p>Found {modules.length} modules.</p>

					<br />

					{modules.map(module => (
						<div key={module.id}>
							<h2 className="text-3xl">
								<Code>{module.name}</Code>{' '}
								<span
									className="text-sm uppercase bg-yellow-300 text-black rounded-md p-1"
									title="Mint Module"
								>
									{module.type}
								</span>
							</h2>

							<Pre
								hasCopyCode
								filename="metadata"
								data-lang="json"
								data-theme="default"
							>
								{JSON.stringify(module, null, 2)}
							</Pre>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
