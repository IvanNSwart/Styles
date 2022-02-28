export default function ServiceCard(props: any) {
	const { topic } = props
	console.log(topic)
	return (
		<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ml-4 mr-4">
			<img
				src={`https://source.unsplash.com/random?${topic}`}
				alt="Logo"
				className="h-8 w-8 mr-2 mb-4 rounded-full"
			/>
			<p className="font-bold">{topic}</p>
			<p>
				It is a long established fact that the reader
				wiull be distracted by the readable content.
			</p>
		</div>
	)
}
