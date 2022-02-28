import ServiceCard from "./ServiceCard"

function App() {
	return (
		<body>
			<div className="container mx-auto px-60">
				<nav className="bg-white fixed top-0 inset-x-0 h-24">
					<div className="container flex mx-auto px-60 gap-10">
						<div className="mr-auto">
							<a
								href="#"
								className="flex items-center py-4 px-2"
							>
								<img
									src="https://source.unsplash.com/random?logo"
									alt="Logo"
									className="h-8 w-8 mr-2 rounded"
								/>
							</a>
						</div>

						<div className="items-center space-x-1 flex justify-end">
							<a
								href="#home"
								className="py-4 px-2 text-blue-500 border-b-4 font-semibold"
							>
								Home
							</a>
							<a
								href="#about"
								className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
							>
								About
							</a>
							<a
								href="#services"
								className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
							>
								Services
							</a>
							<a
								href=""
								className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
							>
								Team
							</a>
						</div>

						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-2 mb-2 shadow-lg shadow-blue-500/50">
							Get Started
						</button>
					</div>
				</nav>
				<div
					className="box-border font-bold text-5xl w-3/6 pt-10 font-serif mt-24"
					id="home"
				>
					Simplify your company systems with our
					IT soulution
				</div>

				<div
					className="box-border flex justify-evenly mt-5 mb-20 bg-gradient-to-t from-black-500 to-slate-100"
					id="about"
				>
					<img
						src="https://source.unsplash.com/random?car"
						alt="Logo"
						className="h-80 w-80 mt-10 mb-10 mr-48 rounded-2xl object-cover"
					/>
					<div>
						<div className="mb-10 mt-10">
							<h4>
								Project
								Discussion
							</h4>
							<p>
								It is a long
								established fact
								that the reader
								wiull be
								distracted by
								the readable
								content.
							</p>
						</div>
						<div className="mb-10 mt-10">
							Case Study
							<p>
								It is a long
								established fact
								that the reader
								wiull be
								distracted by
								the readable
								content.
							</p>
						</div>
						<div className="mb-10 mt-10">
							Execute Project
							<p>
								It is a long
								established fact
								that the reader
								wiull be
								distracted by
								the readable
								content.
							</p>
						</div>
					</div>
				</div>
				<div
					className="box-border flex justify-center mt-20"
					id="services"
				>
					<div className="font-bold text-5xl w-6/6 pt-10 font-serif">
						Here are the services we provide
						<p className="text-sm flex justify-center text-gray-500">
							The point of using lorum
							ipsum is that it has.
						</p>
					</div>
				</div>

				<div className="box-border mt-32 mb-10 flex justify-evenly">
					<ServiceCard topic="Development" />
					<ServiceCard topic="System Application" />
					<ServiceCard topic="Network Solutions" />
				</div>
				<div className="box-border flex justify-evenly mt-10 mb-32">
					<ServiceCard topic="A.I" />
					<ServiceCard topic="Web/App Development" />
					<ServiceCard topic="IT Consulting" />
				</div>

				<div className="box-border flex justify-evenly mt-30 mb-20 mr-4">
					<div className="w-3/6">
						<p className="font-bold text-5xl w-6/6 pt-10 font-serif">
							Get Handling now
						</p>
						<p className="text-gray-500 mt-3 mb-10">
							It is a long established
							fact that the reader
							wiull be distracted by
							the readable content.It
							is a long established
							fact that the reader
							wiull be distracted by
							the readable content.It
							is a long established
							fact that the reader
							wiull be distracted by
							the readable content.
						</p>
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							Get Started
						</button>
					</div>
					<img
						src="https://source.unsplash.com/random?portrait"
						alt="Logo"
						className="h-80 w-3/6 mt-4 mb-4 rounded ml-4 object-cover"
					/>
				</div>
				<div className="box-border flex justify-center mt-20">
					<div className="font-bold text-5xl w-6/6 pt-10 font-serif">
						Recent news from the blog
						<p className="text-sm flex justify-center text-gray-500">
							The point of using lorum
							ipsum is that it has.
						</p>
					</div>
				</div>
				<div className="box-border mt-32 mb-10 flex justify-evenly">
					<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ml-4 mr-4">
						<img
							src="https://source.unsplash.com/random?technology"
							alt="Logo"
							className="rounded-t-xl h-60 w-full object-cover"
						/>
						<p className="font-bold">
							lorem ipsum dor set
							elipsum um
						</p>
						<p>
							It is a long established
							fact that the reader
							wiull be distracted by
							the readable content. It
							is a long established
							fact that the reader
							wiull be distracted by
							the readable content.
						</p>
						<p className="flex justify-end mt-8">
							Read More
						</p>
					</div>
					<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ml-4 mr-4">
						<img
							src="https://source.unsplash.com/random?bussiness"
							alt="Logo"
							className="rounded-t-xl h-60 w-full object-cover"
						/>
						<p className="font-bold">
							orem ipsum dor set
							elipsum um
						</p>
						<p>
							It is a long established
							fact that the reader
							wiull be distracted by
							the readable content.It
							is a long established
							fact that the reader
							wiull be distracted by
							the readable content.
						</p>
						<p className="flex justify-end mt-8">
							Read More
						</p>
					</div>
					<div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ml-4 mr-4">
						<img
							src="https://source.unsplash.com/random?news"
							alt="Logo"
							className="rounded-t-xl h-60 w-full object-cover"
						/>
						<p className="font-bold">
							orem ipsum dor set
							elipsum um
						</p>
						<p>
							It is a long established
							fact that the reader
							wiull be distracted by
							the readable content.It
							is a long established
							fact that the reader
							wiull be distracted by
							the readable content.
						</p>
						<p className="flex justify-end mt-8">
							Read More
						</p>
					</div>
				</div>
			</div>
			<div className="text-center lg:text-left bg-[url('https://source.unsplash.com/random?people')] w-full h-96 text-white flex items-baseline justify-center">
				<div className="box-border flex justify-center mt-20">
					<div className="font-bold text-5xl w-6/6 pt-10 font-serif">
						Get to know how we reach you
						<p className="text-sm flex justify-center text-gray-500">
							It is a long established
							fact that the reader
							wiull be distracted by
							the readable content.
						</p>
					</div>
				</div>
			</div>
			<footer className="text-center lg:text-left bg-gray-700 text-white">
				<div className="container mx-auto px-60">
					<div className="mx-6 py-10 text-center md:text-left">
						<div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="">
								<h6 className="font-semibold mb-2 flex items-center justify-center md:justify-start">
									Logo
								</h6>
								<p>
									Since
									1987
									established
									fact
									that a
									reader
									will be
									distracted
									by the
									readable
									content
									of the
									page.
								</p>
							</div>
							<div className="">
								<h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
									company
								</h6>
								<p className="mb-4">
									<a
										href="#home"
										className="text-white"
									>
										Home
									</a>
								</p>
								<p className="mb-4">
									<a
										href="about"
										className="text-white"
									>
										About
									</a>
								</p>
								<p className="mb-4">
									<a
										href="#services"
										className="text-white"
									>
										Services
									</a>
								</p>
								<p>
									<a
										href="#!"
										className="text-white"
									>
										Team
									</a>
								</p>
								<p>
									<a
										href="#!"
										className="text-white"
									>
										Careers
									</a>
								</p>
							</div>
							<div className="">
								<h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
									Others
								</h6>
								<p className="mb-4">
									<a
										href="#!"
										className="text-white"
									>
										Pricing
									</a>
								</p>
								<p className="mb-4">
									<a
										href="#!"
										className="text-white"
									>
										Settings
									</a>
								</p>
								<p className="mb-4">
									<a
										href="#!"
										className="text-white"
									>
										Orders
									</a>
								</p>
								<p>
									<a
										href="#!"
										className="text-white"
									>
										Help
									</a>
								</p>
							</div>
							<div className="">
								<h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
									Request
									Call
								</h6>
								<p className="flex items-center justify-center md:justify-start mb-4">
									<input
										className="rounded text-white bg-grey-600"
										placeholder="Enter phone number..."
									/>
								</p>
								<p className="flex items-center justify-center md:justify-start mb-4">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
										Free
										Consult
									</button>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center text-white p-6 bg-gray-800">
					<span>
						© 2021 Copyright: by Ivan Swart
						- all rights reserved
					</span>
				</div>
			</footer>
		</body>
	)
}

export default App
