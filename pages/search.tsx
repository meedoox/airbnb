import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'

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

export default function Search({ searchResults }: Props) {
	console.log(searchResults)
	const router = useRouter()
	const { location, startDate, endDate, noOfGuests } = router.query

	const startDateString: string = startDate !== undefined && !Array.isArray(startDate) ? startDate : ''
	const endDateString: string = endDate !== undefined && !Array.isArray(endDate) ? endDate : ''
	const formattedStartDate = format(new Date(startDateString), 'dd. MMMM yyyy')
	const formattedEndDate = format(new Date(endDateString), 'dd. MMMM yyyy')
	const range = `${formattedStartDate} - ${formattedEndDate}`

	return (
		<div>
			<Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
			<main className="flex">
				<section className="flex-grow pt-14 px-6">
					<p className="text-xs ">
						300+ Stays | {range} | for {noOfGuests} guests
					</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
					<div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms and Beds</p>
						<p className="button">More Filters</p>
					</div>
					<div className="flex flex-col">
						{searchResults.map(({ img, description, location, title, star, price, total }, index) => (
							<InfoCard
								key={index}
								img={img}
								description={description}
								location={location}
								price={price}
								total={total}
								title={title}
								star={star}
							/>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then((res) => res.json())

	return {
		props: {
			searchResults,
		},
	}
}
