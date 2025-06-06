"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<main className='min-h-screen'>
			{/* Hero Section - Full Page */}
			<section className='relative min-h-screen flex flex-col items-center justify-center px-2 py-8 md:h-screen md:px-0 md:py-0'>
				<div
					className='absolute inset-0 bg-cover bg-center'
					style={{
						backgroundImage:
							"url('https://downtownrideau.com/wp-content/uploads/2023/09/211288756_2052684204881947_5264638277219889446_n.jpg')",
						filter: "blur(3px)",
					}}></div>
				<div className='absolute inset-0 bg-black/50'></div>
				<div className='relative z-10 text-center text-white max-w-4xl px-4'>
					<div className='mb-8'>
						<p className='text-xl font-medium text-gray-200 mb-2'>Est. 1991</p>
						<h1 className='text-5xl md:text-7xl font-bold mt-2 mb-6'>
							Eric's Bikes & Repairs
						</h1>
						<p className='text-2xl md:text-3xl mb-8 font-light'>
							Serving the Ottawa community for over 30 years!
						</p>
					</div>

					<Link href='/book'>
						<Button
							size='lg'
							className='bg-red-700 hover:bg-red-800 text-white px-12 py-8 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300'>
							Book a Repair
							<ArrowRight className='ml-2 h-5 w-5' />
						</Button>
					</Link>

					<div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto'>
						<div className='text-center'>
							<Shield className='mx-auto h-12 w-12 text-white mb-3' />
							<h3 className='text-lg font-semibold mb-1'>100% Satisfaction</h3>
							<p className='text-gray-200 text-sm'>Guaranteed on all repairs</p>
						</div>
						<div className='text-center'>
							<Clock className='mx-auto h-12 w-12 text-white mb-3' />
							<h3 className='text-lg font-semibold mb-1'>Fast Service</h3>
							<p className='text-gray-200 text-sm'>
								Same-day repairs available
							</p>
						</div>
						<div className='text-center'>
							<MapPin className='mx-auto h-12 w-12 text-white mb-3' />
							<h3 className='text-lg font-semibold mb-1'>Local Experts</h3>
							<p className='text-gray-200 text-sm'>Proudly serving Ottawa</p>
						</div>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className='absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 text-white w-full flex justify-center'>
					<div className='flex flex-col items-center'>
						<span className='text-sm mb-2 hidden md:inline'>Learn More</span>
						<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' />
						</svg>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className='py-20 bg-white'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
						<div>
							<h2 className='text-4xl font-bold mb-6 text-gray-800'>
								Why Choose Eric's?
							</h2>
							<p className='text-lg text-gray-700 mb-8 leading-relaxed'>
								For over three decades, we've been the trusted choice for
								cyclists throughout Ottawa. From daily commuters navigating
								downtown streets to weekend warriors exploring the Gatineau
								Hills, we understand what Ottawa cyclists need.
							</p>
							<div className='space-y-6'>
								<div className='flex items-start'>
									<Shield className='h-6 w-6 text-red-700 mr-4 mt-1 flex-shrink-0' />
									<div>
										<h3 className='font-semibold text-gray-800 mb-1'>
											Expert Technicians
										</h3>
										<p className='text-gray-600'>
											Certified mechanics with decades of combined experience
										</p>
									</div>
								</div>
								<div className='flex items-start'>
									<Clock className='h-6 w-6 text-red-700 mr-4 mt-1 flex-shrink-0' />
									<div>
										<h3 className='font-semibold text-gray-800 mb-1'>
											Quick Turnaround
										</h3>
										<p className='text-gray-600'>
											Most repairs completed same-day or next-day
										</p>
									</div>
								</div>
								<div className='flex items-start'>
									<MapPin className='h-6 w-6 text-red-700 mr-4 mt-1 flex-shrink-0' />
									<div>
										<h3 className='font-semibold text-gray-800 mb-1'>
											Convenient Location
										</h3>
										<p className='text-gray-600'>
											Easy to reach in downtown Ottawa
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='relative'>
							<img
								src='/images/bike-repair-shop.jpg'
								alt='Ottawa bike repair shop interior'
								className='rounded-lg shadow-xl w-full h-96 object-cover'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg'></div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Preview */}
			<section className='py-20 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold mb-4 text-gray-800'>
							Our Services
						</h2>
						<p className='text-xl text-gray-600 max-w-2xl mx-auto'>
							From basic tune-ups to complete overhauls, we handle all your bike
							repair needs
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
						<div className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<img
								src='/images/bike-wheel-repair.jpg'
								alt='Bike wheel and tire repair'
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-3 text-gray-800'>
									Wheel & Tire Service
								</h3>
								<p className='text-gray-600 mb-4'>
									Flat tire repairs, tube replacements, wheel truing, and
									complete wheel rebuilds.
								</p>
								<ul className='text-sm text-gray-500 space-y-1'>
									<li>• Puncture repairs</li>
									<li>• Tire replacements</li>
									<li>• Wheel truing & tensioning</li>
								</ul>
							</div>
						</div>

						<div className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<img
								src='/images/brake-gear-service.jpeg'
								alt='Bike brake and gear adjustment'
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-3 text-gray-800'>
									Brake & Gear Service
								</h3>
								<p className='text-gray-600 mb-4'>
									Professional brake adjustments, gear tuning, and drivetrain
									maintenance.
								</p>
								<ul className='text-sm text-gray-500 space-y-1'>
									<li>• Brake pad replacement</li>
									<li>• Gear shifting adjustments</li>
									<li>• Cable & housing replacement</li>
								</ul>
							</div>
						</div>

						<div className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
							<img
								src='/images/complete-tuneup.jpg'
								alt='Complete bike tune-up service'
								className='w-full h-48 object-cover'
							/>
							<div className='p-6'>
								<h3 className='text-xl font-semibold mb-3 text-gray-800'>
									Complete Tune-ups
								</h3>
								<p className='text-gray-600 mb-4'>
									Comprehensive bike maintenance to keep you riding smoothly all
									season.
								</p>
								<ul className='text-sm text-gray-500 space-y-1'>
									<li>• Full safety inspection</li>
									<li>• Lubrication & cleaning</li>
									<li>• Performance optimization</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='text-center mt-12'>
						<Link href='/book'>
							<Button
								size='lg'
								className='bg-red-700 hover:bg-red-800 text-white px-8 py-4 text-lg'>
								Get Your Bike Serviced
								<ArrowRight className='ml-2 h-5 w-5' />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Footer - Simplified */}
			<footer className='bg-gray-800 text-white py-6'>
				<div className='flex flex-col mx-auto px-4 justify-between items-center gap-2'>
					<div className='flex flex-col md:flex-row justify-center items-center'>
						<div className='flex items-center mb-4 md:mb-0'>
							<span className='font-bold text-lg mr-2'>
								Eric's Bikes & Repairs
							</span>
							<span className='text-gray-300 text-sm'>•</span>
							<span className='text-gray-300 text-sm mx-2'>
								123 Rideau St, Ottawa
							</span>
							<span className='text-gray-300 text-sm'>•</span>
							<span className='text-gray-300 text-sm mx-2'>(613) 123-4567</span>
						</div>
					</div>
					<div className='text-gray-300 text-sm mx-2'>
						Designed by Eric & Team
					</div>
				</div>
			</footer>
		</main>
	);
}
