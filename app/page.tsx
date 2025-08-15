'use client';

import { useState } from 'react';
import { MessageCircle, Video, Shield, Gamepad, Globe, ArrowRight, Youtube, Volume2 } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[white] to-[ghostwhite]">
      {/* Navigation */}
      <nav className="top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start md:justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black">TheForest</span>
            </div>
            <ul className='hidden md:flex gap-10 font-medium'>
              <li><a href="#home" className='hover:underline'>Home</a></li>
              <li><a href="#about_us" className='hover:underline'>About us</a></li>
              <li><a href="#story" className='hover:underline'>Our Story</a></li>
            </ul>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="https://discord.gg/wQeV3trJZ2" className="p-3 pr-[2em] pl-[2em] rounded-3xl font-medium bg-black text-white">Get in now!</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <section className=" h-[70vh] inline xl:flex pr-[3em] pl-[3em]" id='home'>
        <div className='md:flex-1 w-full h-full flex flex-col justify-center gap-5 pl-[2rem] pr-[2rem]'>
          <h1 className='font-black text-[4rem] md:text-[5.9rem] leading-none'>Because we are <span className='underline'>Family</span> not just friend's</h1>
          <p className='font-medium text-gray-500 text-[1.3rem]'>We’re more than just friends — we’re family. Through the highs and lows, we stand by each other with unwavering support, care, and encouragement.</p>
          <a href="https://discord.gg/wQeV3trJZ2" className='bg-black p-2 w-fit text-white pl-[2em] rounded-[4rem] hover:bg-transparent group border-2 border-black'>
            <div className='flex items-center gap-2 group-hover:text-black font-medium'>
              <p>Join Community</p>
              <span className='w-10 h-10 bg-[#006cf7] rounded-3xl flex justify-center items-center group-hover:text-white'>→</span>
            </div>
          </a>
        </div>
        <div className='md:flex-1 w-full h-full'></div>
      </section>

      {/* Features Section 1 */}
      <section className="p-4 w-full h-fit mt-10" id='about_us'>
        <div className='w-full h-full bg-[#006cf7] rounded-[2rem] border-l border-t border-[6px] border-[#1656c4] overflow-hidden'>

          <div className='inline-block lg:flex w-full h-fit'>
            <div className='flex-1 min-h-[10vh] p-6 md:p-10'></div>

            <div className='flex-1 min-h-[10vh] text-white flex flex-col gap-5 p-6 md:p-10'>
              <h1 className='font-bold text-xl md:text-2xl'>We keep stronger each other, always support and care together!
                Join with us for a journey filled with growth, friendship, and shared success — where every step forward, we take together.</h1>
              <p className='font-medium opacity-70 text-lg md:text-[1.4rem]'>Whether you’re having a bad day or celebrating your biggest wins, we’ll be right here by your side — to listen, to cheer, and to lift each other higher every time.</p>
              <div className='h-[0vh] lg:h-[20vh]'></div>
            </div>

          </div>

          <div className='w-full p-4 flex justify-around text-white'>

            <div className='flex flex-col text-center gap-4'>
              <h1 className='font-bold text-3xl md:text-4xl'>100+</h1>
              <p className='font-medium text-sm md:text-xl text-gray-200'>Members joined</p>
            </div>

            <div className='flex flex-col text-center gap-4'>
              <h1 className='font-bold text-3xl md:text-4xl'>20+</h1>
              <p className='font-medium text-sm md:text-xl text-gray-200'>Admin & Staff</p>
            </div>

            <div className='flex flex-col text-center gap-4'>
              <h1 className='font-bold text-3xl md:text-4xl'>1,200Hrs</h1>
              <p className='font-medium text-sm md:text-xl text-gray-200'>Gameplay</p>
            </div>
          </div>

        </div>
      </section>

      {/* features section 2 */}
      <section className='h-fit pr-[3em] pl-[3em] md:pr-[1em] md:pl-[1em] xl:pr-[7em] lg:pl-[7em] bg-transparent min-h-[10vh] mt-[2em]' id='story'>
        <h1 className='p-2 pl-[1.2em] pr-[1.2em] shadow-md w-fit rounded-3xl font-medium'>📝 The Truth</h1>

        <div className='inline-block lg:flex mt-3 mb-3'>
          <h1 className='flex-1 font-bold text-[4rem] leading-none mb-5 lg:mb-0'>Here’s What Our Story Tells You</h1>
          <p className='flex-1 flex items-end font-medium text-lg text-gray-500'>See, we have a beautiful story — our owner created this to greet everyone with warmth and kindness, building a space where friendship, fun, and laughter come together.</p>
        </div>

        <div className='inline-block lg:flex gap-4'>

          <div className='flex-1 p-10 font-bold text-2xl bg-[yellow] rounded-2xl bg-[#f8f8f8] shadow-xl'>
            <h1>"I want to create a society that feels like home — where everyone is welcomed, supported, and encouraged to grow together. A place where we share laughs, face challenges as one, and celebrate every little victory."</h1>

            <div className='w-full flex mt-4'>
              <div className='w-fit'>
                <div className='shadow-md w-20 h-20 bg-gray-300 rounded-xl justify-center text-white flex items-center'>KL</div>
              </div>
              <div className='flex-[2] p-4 leading-none'>
                <h1>Kayy louise</h1>
                <p className='text-gray-400 font-medium text-lg'>Owner</p>
              </div>
            </div>
          </div>

          <br />

          <div className='flex-[2] flex flex-col justify-between p-10 font-bold text-2xl bg-[yellow] rounded-2xl bg-[#f8f8f8] shadow-xl'>
            <h1 >" I want to create a society that brings people from all walks of life together — a place where kindness is the common language, laughter is shared freely, and every member feels valued. Here, we celebrate each other’s victories, support one another in tough times, and create unforgettable memories. This isn’t just about playing games or chatting online; it’s about building connections that last far beyond the screen."</h1>

            <div className='w-full flex mt-4'>
              <div className='w-fit'>
                <div className='shadow-md w-20 h-20 bg-gray-300 rounded-xl justify-center text-white flex items-center'>V</div>
              </div>
              <div className='flex-[2] p-4 leading-none'>
                <h1>Vanskyy</h1>
                <p className='text-gray-400 font-medium text-lg'>Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* footer */}

      <section className='min-h-[10vh] bg-gradient-to-b from-[#fafaff] to-[#d9eaff]'></section>
      <footer className='w-full'>
        <div className='bg-gradient-to-b from-[#d9eaff] to-[#c8e2fe] min-h-[10vh] pl-4 pt-4 pr-4'>
          <div className='min-h-[10vh] mt-4 bg-white rounded-xl inline-block lg:flex p-9 w-full gap-5'>

            <div className='flex-[2] flex flex-col gap-3'>
              <h1 className='font-bold text-2xl'>TheForest.</h1>
              <p className='font-medium text-gray-500 text-sm'>Help us grow our community by playing games together on Discord and Roblox — a place where fun meets friendship. Connect, chat, team up for epic adventures</p>

              <br />

              <h1 className='font-bold text-lg'>got a project with us?</h1>
              <div className='w-full h-fit flex justify-center border-2 border-black p-2 rounded-[50px] pl-4'>
                <input type="text" id='project' placeholder='Kaylouise@example.com' className='outline-none w-full' />
                <a href='' className='w-10 h-10 rounded-3xl bg-black flex items-center justify-center text-white'>→</a>
              </div>
              <h1 className='font-bold text-lg'>Follow us on</h1>
              <div className='flex gap-3 text-lg'>
                <a href="https://discord.gg/wQeV3trJZ2">
                  <i className="fa-brands fa-discord"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </div>
            </div>

            <div className='flex-1 flex flex-col pl-0 lg:pl-10 gap-4 mt-4 lg:mt-0'>
              <h1 className='font-bold text-lg'>Slide to</h1>
              <ul className='flex flex-col gap-2 font-medium'>
                <li><a href="#home" className='hover:underline'>Hero</a></li>
                <li><a href="#about_us" className='hover:underline'>About</a></li>
                <li><a href="#" className='hover:underline'>Our story</a></li>
              </ul>

            </div>

            <div className='flex-1 flex flex-col pl-0 lg:pl-10 gap-4 mt-4 lg:mt-0'>
              <h1 className='font-bold text-lg'>Resources</h1>
              <ul className='flex flex-col gap-2'>
                <li><a href="#" >linkto</a></li>
                <li><a href="#" >linkto</a></li>
                <li><a href="#" >linkto</a></li>
              </ul>

            </div>

            <div className='flex-1 flex flex-col pl-0 lg:pl-10 gap-4 mt-4 lg:mt-0'>
              <h1 className='font-bold text-lg'>Contact</h1>
              <ul className='flex flex-col gap-2 font-medium'>
                <li><a href="#" className='hover:underline'>Kayy louise</a></li>
                <li><a href="#" className='hover:underline'>PawPaw</a></li>
                <li><a href="#" className='hover:underline'>Brelnical</a></li>
                <li><a href="#" className='hover:underline'>Yayel</a></li>
              </ul>

            </div>

          </div>
          {/* space */}
          <div className='w-full p-3 flex gap-2 justify-center items-center mt-3'>
            <h1>Copyright 2025 forest team</h1>
            |
            <h1 className='text-sm'>Created with love <a href='https://www.rekakarya.studio/' className='font-bold underline'>Rekakarya</a></h1>
          </div>


        </div>

      </footer>
    </div>
  );
}
