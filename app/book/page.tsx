"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	ArrowLeft,
	Phone,
	MapPin,
	Clock,
	CheckCircle,
	Mail,
} from "lucide-react";
import Link from "next/link";

export default function BookRepair() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [bookingNumber, setBookingNumber] = useState("");

	const generateBookingNumber = () => {
		const prefix = "EBR";
		const randomNum = Math.floor(Math.random() * 900000) + 100000;
		return `${prefix}-${randomNum}`;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		const newBookingNumber = generateBookingNumber();
		setBookingNumber(newBookingNumber);
		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	return (
		<main className='h-screen bg-gray-50 flex flex-col'>
			{/* Header */}
			<header className='bg-white shadow-sm border-b flex-shrink-0'>
				<div className='container mx-auto px-4 py-3'>
					<div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
						<div className='flex items-center justify-between'>
							<Link
								href='/'
								className='flex items-center text-gray-600 hover:text-gray-800 transition-colors'>
								<ArrowLeft className='h-5 w-5 mr-2' />
								<span className='hidden xs:inline'>Back to Home</span>
							</Link>
						</div>
						<div className='text-center flex-1'>
							<h1 className='text-lg sm:text-xl font-bold text-gray-800'>
								Eric's Bikes & Repairs
							</h1>
							<p className='text-xs text-gray-600'>Est. 1991</p>
						</div>
						<div className='flex items-center justify-end text-gray-600 mt-2 sm:mt-0'>
							<Phone className='h-4 w-4 mr-2' />
							<span className='text-sm'>(613) 123-4567</span>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<div className='flex-1 flex items-center justify-center p-4'>
				<div className='w-full max-w-4xl'>
					{!isSubmitted ? (
						<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
							{/* Form */}
							<div className='lg:col-span-2'>
								<div className='bg-white rounded-lg shadow-lg p-8'>
									<div className='text-center mb-6'>
										<h2 className='text-2xl font-bold text-gray-800 mb-2'>
											Book Your Bike Repair
										</h2>
										<p className='text-gray-600'>
											Fill out the form below and we'll contact you within 24
											hours
										</p>
									</div>

									<form onSubmit={handleSubmit} className='space-y-4'>
										<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
											<div>
												<Label
													htmlFor='name'
													className='text-gray-700 font-medium'>
													Name *
												</Label>
												<Input
													id='name'
													placeholder='Your full name'
													className='mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500'
													required
													disabled={isSubmitting}
												/>
											</div>
											<div>
												<Label
													htmlFor='email'
													className='text-gray-700 font-medium'>
													Email *
												</Label>
												<Input
													id='email'
													type='email'
													placeholder='your@email.com'
													className='mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500'
													required
													disabled={isSubmitting}
												/>
											</div>
											<div>
												<Label
													htmlFor='phone'
													className='text-gray-700 font-medium'>
													Phone
												</Label>
												<Input
													id='phone'
													type='tel'
													placeholder='(613) 555-0123'
													className='mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500'
													disabled={isSubmitting}
												/>
											</div>
											<div>
												<Label
													htmlFor='bike'
													className='text-gray-700 font-medium'>
													Bike Make/Model *
												</Label>
												<Input
													id='bike'
													placeholder='e.g., Trek FX 3'
													className='mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500'
													required
													disabled={isSubmitting}
												/>
											</div>
										</div>

										<div>
											<Label
												htmlFor='issue'
												className='text-gray-700 font-medium'>
												What's wrong? *
											</Label>
											<Select required disabled={isSubmitting}>
												<SelectTrigger className='mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500'>
													<SelectValue placeholder='Select the main issue' />
												</SelectTrigger>
												<SelectContent className='bg-white'>
													<SelectItem
														value='flat-tire'
														className='hover:bg-red-100 focus:bg-red-100 transition-colors'>
														Flat tire
													</SelectItem>
													<SelectItem
														value='brake-issue'
														className='hover:bg-red-100 focus:bg-red-100 transition-colors'>
														Brake issue
													</SelectItem>
													<SelectItem
														value='gear-problem'
														className='hover:bg-red-100 focus:bg-red-100 transition-colors'>
														Gear problem
													</SelectItem>
													<SelectItem
														value='chain-off'
														className='hover:bg-red-100 focus:bg-red-100 transition-colors'>
														Chain came off
													</SelectItem>
													<SelectItem
														value='tune-up'
														className='hover:bg-red-100 focus:bg-red-100 transition-colors'>
														General tune-up
													</SelectItem>
													<SelectItem
														value='other'
														className='hover:bg-red-100 focus:bg-red-100 transition-colors'>
														Other
													</SelectItem>
												</SelectContent>
											</Select>
										</div>

										<div>
											<Label
												htmlFor='details'
												className='text-gray-700 font-medium'>
												Additional Details
											</Label>
											<Textarea
												id='details'
												placeholder='Describe the issue...'
												className='mt-1 border-gray-300 focus:border-red-500 focus:ring-red-500'
												rows={3}
												disabled={isSubmitting}
											/>
										</div>

										<Button
											type='submit'
											className='w-full bg-red-700 hover:bg-red-800 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
											disabled={isSubmitting}>
											{isSubmitting ? (
												<div className='flex items-center justify-center'>
													<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
													Submitting...
												</div>
											) : (
												"Submit Repair Request"
											)}
										</Button>
									</form>
								</div>
							</div>

							{/* Sidebar */}
							<div className='space-y-4'>
								<div className='bg-white rounded-lg shadow-lg p-6'>
									<h3 className='text-lg font-semibold text-gray-800 mb-4'>
										What Happens Next?
									</h3>
									<div className='space-y-3'>
										<div className='flex items-center space-x-3'>
											<div className='w-6 h-6 bg-red-700 text-white rounded-full flex items-center justify-center text-sm font-bold'>
												1
											</div>
											<div>
												<p className='font-medium text-gray-800 text-sm'>
													We Review
												</p>
												<p className='text-xs text-gray-600'>
													Your repair details
												</p>
											</div>
										</div>
										<div className='flex items-center space-x-3'>
											<div className='w-6 h-6 bg-red-700 text-white rounded-full flex items-center justify-center text-sm font-bold'>
												2
											</div>
											<div>
												<p className='font-medium text-gray-800 text-sm'>
													We Contact You
												</p>
												<p className='text-xs text-gray-600'>Within 24 hours</p>
											</div>
										</div>
										<div className='flex items-center space-x-3'>
											<div className='w-6 h-6 bg-red-700 text-white rounded-full flex items-center justify-center text-sm font-bold'>
												3
											</div>
											<div>
												<p className='font-medium text-gray-800 text-sm'>
													Schedule Service
												</p>
												<p className='text-xs text-gray-600'>
													Book convenient time
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className='bg-white rounded-lg shadow-lg p-6'>
									<h3 className='text-lg font-semibold text-gray-800 mb-3'>
										Need Help Right Away?
									</h3>
									<p className='text-gray-600 text-sm mb-3'>
										For urgent repairs:
									</p>
									<Button
										variant='outline'
										className='w-full border-red-700 text-red-700 hover:bg-red-700 hover:text-white'
										size='sm'>
										<Phone className='h-4 w-4 mr-2' />
										(613) 123-4567
									</Button>
								</div>

								<div className='bg-white rounded-lg shadow-lg p-6'>
									<h3 className='text-lg font-semibold text-gray-800 mb-3'>
										Visit Our Shop
									</h3>
									<div className='space-y-2 text-sm'>
										<div className='flex items-start'>
											<MapPin className='h-4 w-4 text-red-700 mr-2 mt-0.5 flex-shrink-0' />
											<div>
												<p className='font-medium'>123 Rideau Street</p>
												<p className='text-gray-600'>Ottawa, ON K1N 5X4</p>
											</div>
										</div>
										<div className='flex items-center'>
											<Clock className='h-4 w-4 text-red-700 mr-2' />
											<p className='text-gray-600'>Mon-Fri: 9AM-6PM</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : (
						/* Success Animation */
						<div className='flex items-center justify-center'>
							<div className='bg-white rounded-lg shadow-xl p-12 text-center max-w-2xl mx-auto animate-in fade-in duration-500'>
								<div className='mb-6'>
									<CheckCircle className='h-20 w-20 text-green-500 mx-auto mb-4 animate-in zoom-in duration-700 delay-200' />
									<h2 className='text-3xl font-bold text-gray-800 mb-2 animate-in slide-in-from-bottom duration-500 delay-300'>
										Appointment Confirmed!
									</h2>
									<p className='text-gray-600 animate-in slide-in-from-bottom duration-500 delay-400'>
										Your bike repair request has been successfully submitted
									</p>
								</div>

								<div className='bg-gray-50 rounded-lg p-6 mb-6 animate-in slide-in-from-bottom duration-500 delay-500'>
									<div className='text-center'>
										<p className='text-sm text-gray-600 mb-2'>
											Your Booking Number
										</p>
										<p className='text-2xl font-bold text-red-700 font-mono tracking-wider'>
											{bookingNumber}
										</p>
										<p className='text-xs text-gray-500 mt-2'>
											Please save this number for your records
										</p>
									</div>
								</div>

								<div className='space-y-4 animate-in slide-in-from-bottom duration-500 delay-600'>
									<div className='flex items-center justify-center text-gray-700'>
										<Mail className='h-5 w-5 mr-2 text-red-700' />
										<span>We will contact you via email within 24 hours</span>
									</div>

									<div className='flex items-center justify-center text-gray-700'>
										<Phone className='h-5 w-5 mr-2 text-red-700' />
										<span>For urgent matters, call us at (613) 123-4567</span>
									</div>
								</div>

								<div className='mt-8 animate-in slide-in-from-bottom duration-500 delay-700'>
									<Link href='/'>
										<Button className='w-full bg-red-700 hover:bg-red-800 text-white mb-3'>
											Return to Home
										</Button>
									</Link>
									<Button
										variant='outline'
										className='w-full border-gray-300 text-gray-700 hover:bg-gray-50'
										onClick={() => {
											setIsSubmitted(false);
											setBookingNumber("");
										}}>
										Submit Another Request
									</Button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
