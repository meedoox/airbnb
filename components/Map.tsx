import React, { SetStateAction, useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

type Viewport = { width?: string; height?: string; latitude: number; longitude: number; zoom: number }

type Booking = {
	description: string
	img: string
	lat: number
	location: string
	long: number
	price: string
	star: number
	title: string
	total: string
}

type Props = {
	searchResults: Booking[]
}

type Coordinates = {
	latitude: number
	longitude: number
}

function Map({ searchResults }: Props) {
	const coordinates = searchResults.map((result) => ({
		latitude: result.lat,
		longitude: result.long,
	}))

	const center = getCenter(coordinates) as Coordinates

	const [viewport, setViewport] = useState<SetStateAction<Viewport>>({
		width: '100%',
		height: '100%',
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	})

	return (
		<ReactMapGL
			mapStyle="mapbox://styles/meedoox/cla05yf2r00ir14p0kbhl4fgp"
			mapboxAccessToken={process.env.mapbox_key}
			{...viewport}
			onMove={(nextMove) => setViewport(nextMove.viewState)}
		>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker longitude={result.long} latitude={result.lat}>
						<p className="cursor-pointer text-2xl animate-bounce">🤩</p>
					</Marker>
				</div>
			))}
		</ReactMapGL>
	)
}

export default Map
