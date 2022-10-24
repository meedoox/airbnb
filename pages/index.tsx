import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

type Location = {
	img: string
	location: string
	distance: string
}

type Cards = {
	img: string
	title: string
}

type Props = {
	exploreData: Location[]
	cardsData: Cards[]
}

const Home = ({ exploreData, cardsData }: Props) => {
	return (
		<div className="">
			<Head>
				<title>Airbnb</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Banner />

			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exploreData?.map(({ img, distance, location }, i) => (
							<SmallCard key={i} img={img} distance={distance} location={location} />
						))}
					</div>
				</section>

				<section>
					<h2 className="text-4xl font-semibold py-5">Live anywhere</h2>
					<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
						{cardsData?.map(({ img, title }, i) => (
							<MediumCard key={i} img={img} title={title} />
						))}
					</div>
				</section>

				<section>
					<LargeCard
						img="https://links.papareact.com/4cj"
						title="The Greatest Outdoors"
						description="Wishlist curated by Airbnb."
						buttonText="Get Inspired"
					/>
				</section>
			</main>

			<Footer />
		</div>
	)
}

export async function getStaticProps() {
	const exploreData: Location[] = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res) => res.json())
	const cardsData: Cards[] = await fetch('https://www.jsonkeeper.com/b/VHHT').then((res) => res.json())
	return {
		props: {
			exploreData,
			cardsData,
		},
	}
}

export default Home
