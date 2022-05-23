import { useEffect, useState } from "react"

const PostDoctor = () => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)



	useEffect(() => {
		const getData = async () => {
			try {
				const res = await fetch(`api/v1/doctors`)
				if (!res.ok) {
					throw new Error(`This is an HTTP error: The status is ${res.status}`)
				}
				let actualData = await res.json()
				setData(actualData)
				setError(null)
			}
			catch (err) {
				setError(err.message)
				setData(null);
			}
			finally {
				setLoading(false)
			}
		}
		getData()
	}, [])

	const doctorRenderer = data && data.map((d) => (
		<div className="container" key={d.id}>
			<h1>{`${d.first_name} ${d.last_name}`}</h1>
			<h2>{`${d.professional_statement}`}</h2>
			{d.specialization && d.specialization.length > 0 && (
				<div className="specializations">
					{d.specialization.map((specialization, idx) => (
						<div key={idx}>
							<h3 key={specialization}>
								{specialization.specialization_name}
							</h3>
						</div>))}
				</div>
			)}
			<img src={d.image_url} />
		</div>
	))

	return (
		<div>
			{doctorRenderer}
		</div>
	)
}

export default PostDoctor
