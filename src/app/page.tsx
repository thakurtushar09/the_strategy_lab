import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import GrowthEngine from "@/components/Growth";
import { Slider } from "@/components/Slider";
import { Carme } from "next/font/google";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      <div
        className="w-full h-[70vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero-image.png')" }}
      >
        <Navbar />

        <div className="mt-10 h-[35%] flex flex-col items-center justify-between text-center px-4">
          <h1 className="text-3xl font-extrabold text-outline-black">
            Welcome to the Lab
          </h1>
          <h1 className="text-2xl text-outline-black leading-tight max-w-[600px]">
            Where strategy is tested, results are proven,<br />
            and growth is the only constant.
          </h1>
          <button className="text-white bg-zinc-800 px-12 py-3 rounded-lg ">
            Begin the Experiment!
          </button>
        </div>


        <div className="absolute left-1/2 bottom-[-40px] transform -translate-x-1/2 z-20">
          <div className="border-2 border-black p-2 w-28 h-28 flex items-center justify-center ">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-[15%] mb-10 flex justify-center items-center w-full px-4">
        <div className="max-w-5xl w-full flex flex-col md:flex-row justify-between items-center gap-10">

          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-3">
              The Lab's Core Experiments
            </h1>
            <Link href="/services">
              <button className="bg-sky-300 text-black px-6 py-2 rounded-md cursor-pointer">
                All Services
              </button>
            </Link>
          </div>
          <div className="text-sm text-gray-700 text-center md:text-left md:w-1/2">
            <p>
              This isn't a list of services. <br />
              It's a set of controlled experiments <br />
              designed to engineer real growth.
            </p>
          </div>

        </div>
      </div>

      <div className="relative mt-[25%]">
        <div className="bg-[#4DD1F4] w-full h-[20vh]"></div>

        <div className="absolute top-[-150%] left-1/2 transform -translate-x-1/2 flex gap-6">
          <Card
            icon="/mark-icon.png"
            index="01"
            heading="Performance Advertising"
            para="Results that aren't just impressive. They're profitable."
          />
          <Card
            icon="/development.png"
            index="02"
            heading="Website Development & Maintenance"
            para="A site that performs 24/7 — so you don't have to."
          />
          <Card
            icon="/seo-site.png"
            index="03"
            heading="On-Page & Off-Page SEO"
            para="Get found by the right people, at the right time, for the right reasons."
          />
        </div>



      </div>
      <div className="w-[70%] h-auto border border-[#4DD1F4] border-t-0 mt-0 mx-auto rounded-b-lg pb-7">
        <div className="flex flex-col items-center justify-center mt-0 text-center pt-20">
          <h2 className="text-lg md:text-xl text-gray-800">
            Real Brands. Real Experiments.
          </h2>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            Real Results.
          </h2>
          <Link href="/services"><button className="bg-sky-400 text-white px-6 py-2 rounded-md hover:bg-sky-500 transition cursor-pointer">
            All Services
          </button></Link>

        </div>

        <div className="mt-[7%]">
          <div className="flex items-center justify-between mb-4">
            <div
              className="h-36 w-36 border border-[#4DD1F4] rounded-md ml-30 rotate-[-63deg] bg-cover bg-center">
              <Image
                src="/ARADHANA.png"
                alt="aradhana"
                height={500}
                width={500}
                className="rotate-[63deg] object-cover "
              />
            </div>
            <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[120.12deg] mr-7">
              <Image
                src="/Little-tag.png"
                alt="little-tag"
                height={300}
                width={300}
                className="rotate-[-120deg] object-cover mr-5 "
              />
            </div>

          </div>

          <div className="flex items-center justify-between mt-5 mr-20 mb-0">
            <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[34.85deg] ml-10 mr-0">
              <Image
                src="/one-teacher.png"
                alt="one-teacher"
                height={500}
                width={500}
                className="rotate-[34.85deg] object-cover "
              />
            </div>
            <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[14.96deg] "><Image
              src="/Payal Jain.png"
              alt="payal-jain"
              height={400}
              width={400}
              className="rotate-[14.96deg] object-cover mt-10 "
            /></div>
            <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[29deg] m-0"><Image
              src="/shades.png"
              alt="shades"
              height={300}
              width={300}
              className="rotate-[-20deg] object-cover mt-5"
            /></div>
            <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[-29deg] "><Image
              src="/vaishali.png"
              alt="vaishali"
              height={500}
              width={500}
              className="rotate-[15deg] object-cover mt-10"
            /></div>
            <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[-130deg]"><Image
              src="/ksafe.png"
              alt="ksafe"
              height={500}
              width={500}
              className="rotate-[130deg] object-cover "
            /></div>

          </div>
        </div>

      </div>


      <div className="w-full relative bg-white mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-8 max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 text-center md:text-left">
            Client Observations and <br /> Inference
          </h2>
          <p className="text-gray-600 text-center md:text-left text-base leading-relaxed">
            Hear from the brands that trusted our process — <br />
            and saw the results.
          </p>
        </div>

       
        <div className="w-full h-[50vh] flex items-start justify-between mt-20 relative no-scrollbar">
          <div className="absolute left-0  z-10">
            <Image
              src="/cloud-left.png"
              alt="clouds-left"
              width={300}
              height={300}
              className="w-84 h-auto"
            />
          </div>




          <div className="absolute right-0 z-10">
            <Image
              src="/cloud-right.png"
              alt="clouds-right"
              width={300}
              height={300}
              className="w-84 h-auto"
            />
          </div>

          


          <div className="absolute top-[45%] z-0 w-full">
            <Slider />
          </div>



        </div>


      </div>
      <div className="h-screen mt-[10%] border-2 border-black"></div>


      <div className="bg-[#4DD1F4] w-full h-[20vh]"></div>

      <div className="h-screen w-full flex items-center">
        <div className="w-[50%] h-full flex flex-col justify-center ml-[20%]">
          <h1 className="text-6xl font-extralight">Experiment.</h1>
          <br />
          <h1 className="text-6xl font-extralight">Evolve.</h1>
          <br />
          <h1 className="text-6xl font-extralight">Expand.</h1>

          <p className="mt-6 text-sm text-gray-600 leading-relaxed w-[70%]">
            We believe that brands deserve more than <br />just ‘social media management’ or ‘ad <br /> campaigns’.
            <br /><br />
            So, we built a LAB for it.
          </p>

          <div className="mt-6">
            <h2 className="text-sky-400 font-bold text-lg inline-block">Dhruv Tewari</h2>
            <span className="text-sky-400 font-bold text-lg ml-1">›</span>
            <div className="text-sky-300 text-sm">Founder</div>
          </div>
        </div>

        <div className="w-[50%] h-full">
          <div
            className="mt-[20%] w-72 h-84 rounded-md  bg-[url('/ceo.png')] bg-cover bg-center"
          ></div>
        </div>


      </div>
      <Footer />










    </div>
  );
}
