import React from 'react'

type Props = {}

function Footer({}: Props) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-32 py-14 bg-gray-100 text-gray-600">
			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold uppercase">About</h5>
				<p>How Airbnb works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb Plus</p>
				<p>Airbnb Luxe</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold uppercase">Community</h5>
				<p>Accessibility</p>
				<p>This is not a real site</p>
				<p>Its a pretty awesome clone</p>
				<p>Refferals accepted</p>
				<p>Papafam</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold uppercase">Host</h5>
				<p>Meedoo</p>
				<p>Presents</p>
				<p>New Airbnb</p>
				<p>Web app</p>
				<p>Running on Next.js</p>
			</div>

			<div className="space-y-4 text-xs text-gray-800">
				<h5 className="font-bold uppercase">support</h5>
				<p>Help Center</p>
				<p>Trust & Safety</p>
				<p>Say Hi Youtube</p>
				<p>Easter Eggs</p>
				<p>For the Win</p>
			</div>
		</div>
	)
}

export default Footer
