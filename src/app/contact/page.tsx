import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className=' min-h-screen bg-white'>

            <div
                className="absolute bottom-[30%] left-0 w-full h-[100vh] bg-cover bg-center"
                style={{ backgroundImage: "url('/contact-hero-image.png')" }}
            ></div>



            <div className="relative z-10">
                <Navbar />
            </div>



            <div className="relative z-10 flex items-center justify-between px-30 pt-20">
                <div className="max-w-xl">
                    <h1 className="text-2xl font-extrabold text-[#3A2E2B]">
                        Got a theory? Let’s test it.
                    </h1>
                    <p className="mt-4 text-lg text-[#3A2E2B]/80 leading-relaxed">
                        Collab ideas, curious queries, or hypotheses about how we can work together — type away, genius.
                    </p>
                </div>



                <div>
                    <Image
                        src={'/contact-header.png'}
                        alt="vector"
                        width={200}
                        height={200}
                        className="object-contain absolute right-10"
                    />
                </div>




            </div>



            <div className="min-h-[50vh] w-[70%] text-black mt-[20%] mx-auto ">
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <h2 className="text-xl font-bold text-[#3A2E2B]">
                        Here’s what to expect
                    </h2>
                    <p className="text-[#3A2E2B]/80 max-w-lg mt-2 lg:mt-0">
                        Once your form lands in our inbox, we’ll circle back within 24–48 hours
                        with brainpower locked and loaded.
                    </p>
                </div>

               
                <hr className="border-t border-[#ccc] mb-8" />

                
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        placeholder="Full Name*"
                        className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email Address*"
                        className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Mobile Number*"
                        className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                        required
                    />
                    <label className="md:col-span-1 flex items-center text-[#3A2E2B]">
                        What do you need help with?*
                    </label>
                    <select
                        className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                        required
                    >
                        <option>Select One</option>
                        <option>SEO</option>
                        <option>Paid Marketing</option>
                        <option>Web Development</option>
                        <option>Other</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Company / Brand Name"
                        className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                    />
                    <div className="md:col-span-3 flex justify-center mt-4">
                        <button
                            type="submit"
                            className="mt-4 px-6 py-2 bg-[#00c2ff] text-white font-semibold rounded-lg hover:bg-[#00aadd]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <Footer />

        </div>
    )
}

export default page