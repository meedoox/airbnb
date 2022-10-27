import React, { useState } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, Bars3Icon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon, UsersIcon } from '@heroicons/react/24/solid'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRange, DateRangePicker, DateRangePickerProps, DateRangeProps, RangeKeyDict } from 'react-date-range'
import { useRouter } from 'next/router'

type Props = {}

export default function Header({}: Props) {
	const [searchInput, setSearchInput] = useState('')
	const [startDate, setStartDate] = useState<Date>(new Date())
	const [endDate, setEndDate] = useState<Date>(new Date())
	const [noOfGuests, setNoOfGuests] = useState(1)
	const router = useRouter()

	const handleSelect = ({ selection }: RangeKeyDict) => {
		if (selection.startDate === undefined || selection.endDate === undefined) {
			return
		}

		setStartDate(selection.startDate)
		setEndDate(selection.endDate)
	}

	const resetInput = () => {
		setSearchInput('')
	}

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	}

	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
			{/* Left */}
			<div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
			</div>

			{/* Middle - Search */}
			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					type="text"
					placeholder="Start your search"
					className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
				/>
				<MagnifyingGlassIcon className="hidden md:inline-flex h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
			</div>

			{/* Right */}
			<div className="flex space-x-4 items-center justify-end text-gray-500">
				<p className="hidden md:inline-flex cursor-pointer">Become a host</p>
				<GlobeAltIcon className=" hidden sm:inline-flex h-6 w-6 cursor-pointer" />

				<div className="flex items-center space-x-2 border-2 rounded-full p-2">
					<Bars3Icon className="h-6 cursor-pointer" />
					<UserCircleIcon className="h-6 cursor-pointer" />
				</div>
			</div>

			{searchInput && (
				<div className="flex flex-col col-span-3 mx-auto mt-5">
					<DateRangePicker
						ranges={[selectionRange]}
						minDate={new Date()}
						rangeColors={['#FD5B61']}
						onChange={handleSelect}
					/>
					<div className="flex items-center border-b mb-4">
						<h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
						<UsersIcon className="h-5" />

						<input
							min="1"
							type="number"
							className="w-12 pl-2 text-lg outline-none text-red-400"
							value={noOfGuests}
							onChange={(e) => setNoOfGuests(parseInt(e.target.value))}
						/>
					</div>
					<div className="flex">
						<button className="flex-grow text-gray-500" onClick={resetInput}>
							Cancel
						</button>
						<button className="flex-grow text-red-400">Search</button>
					</div>
				</div>
			)}
		</header>
	)
}
