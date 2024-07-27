'use client'

import { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Transition } from '@headlessui/react'

import WorldImage from '@/public/images/worldmap.png'
import UserImage01 from '@/public/images/world-user-01.jpg'
import UserImage02 from '@/public/images/world-user-02.jpg'
import UserImage03 from '@/public/images/world-user-03.jpeg'
import UserImage04 from '@/public/images/world-user-04.jpg'
import UserImage05 from '@/public/images/world-user-05.jpg'
import UserImage06 from '@/public/images/world-user-06.jpg'
import UserImage07 from '@/public/images/world-user-07.jpg'
import UserImage08 from '@/public/images/world-user-08.jpg'

export default function TestimonialsCarousel() {

  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const [autorotateTiming] = useState<number>(7000)

  interface Item {
    img: StaticImageData
    alt: string
    quote: string
    name: string
    role: string
  }  

  const items: Item[] = [
    {
      img: UserImage01,
      alt: 'Testimonial 01',
      quote: '"CyTechAI\'s expertise and proactive approach have significantly enhanced our cybersecurity. Their professional team ensures our data is secure. Highly recommend their exceptional service!"',
      name: 'Aryan Shah',
      role: 'Backend Developer'
    },
    {
      img: UserImage02,
      alt: 'Testimonial 02',
      quote: '“Thanks to CyTechAI, our security framework is robust and reliable. Their knowledgeable team provided seamless integration and excellent support. Highly satisfied!“',
      name: 'Greg Sebastian',
      role: 'Head of Design'
    },
    {
      img: UserImage03,
      alt: 'Testimonial 03',
      quote: '“CyTechAI quickly resolved our vulnerabilities and strengthened our defenses. Their professional and responsive team offers top-notch cybersecurity solutions. Highly recommended!“',
      name: 'Dominik Prasad',
      role: 'Backend Lead'
    }
  ]
  
  const testimonials = useRef<HTMLDivElement>(null)  

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement) testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section>
       <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
       
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-10">

          {/* Section header */}
          <div className="mx-auto text-center pb-12 md:pb-16">
      
          <h1 className="h1 mb-4" data-aos="fade-up" style={{ fontSize: '50px' }}>Work with us to create safe cyberspace</h1>
       </div>

          {/* Check list */}
          <div className="max-w-3xl mx-auto pb-16">
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center items-center text-lg text-gray-400 -mx-3 -my-2">
              <li className="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-testimonialcar]">
                <svg className="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-green-500" cx="12" cy="12" r="12" />
                  <path className="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
                </svg>
                <span>Work Life Balance</span>
              </li>
              <li className="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-testimonialcar]">
                <svg className="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-green-500" cx="12" cy="12" r="12" />
                  <path className="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
                </svg>
                <span>Competitive Salary And Equity</span>
              </li>
              <li className="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-testimonialcar]">
                <svg className="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-green-500" cx="12" cy="12" r="12" />
                  <path className="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
                </svg>
                <span>5 Weeks Paid Vacation</span>
              </li>
              <li className="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-testimonialcar]">
                <svg className="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-green-500" cx="12" cy="12" r="12" />
                  <path className="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
                </svg>
                <span>Generous Gear Credit</span>
              </li>
              <li className="flex items-center mx-3 my-2" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-testimonialcar]">
                <svg className="w-6 h-6 mr-3 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-green-500" cx="12" cy="12" r="12" />
                  <path className="fill-current text-white" d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z" />
                </svg>
                <span>Diversity and Inclusion</span>
              </li>
            </ul>
          </div>

          {/* Carousel area*/}
          <div className="max-w-2xl mx-auto">

            {/* World map */}
            <div className="py-12">
              <div className="relative">
                {/* Map */}
                <div className="absolute inset-0 flex justify-center items-end" aria-hidden="true">
                  <div className="bottom-0 border-l border-dashed border-gray-500 transform translate-y-8" style={{ height: '50%' }}></div>
                </div>
                {/* People pics */}
                <Image src={WorldImage} width={672} height={330} alt="World map" />
                
              </div>
            </div>

            {/* Carousel */}
            <div className="mt-6">

              {/* Testimonials */}
              <div className="transition-all">
                <div className="relative flex flex-col items-start" ref={testimonials}>

                  {items.map((item, index) => (
                    <Transition
                      key={index}
                      show={active === index}
                      className="text-center"
                      enter="transition ease-in-out duration-500 transform order-first"
                      enterFrom="opacity-0 scale-98"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-out duration-300 transform absolute"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-98"
                      beforeEnter={() => heightFix()}
                    >
                      <div className="relative inline-flex flex-col justify-center mb-4">
                        <Image className="rounded-full" src={item.img} width={56} height={56} alt={item.alt} />
                        <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-gray-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                        </svg>
                      </div>
                      <blockquote className="text-lg text-gray-400">{item.quote}</blockquote>
                      <div className="text-gray-700 font-medium mt-3">
                        <cite className="text-gray-200 not-italic">{item.name}</cite> / <span className="text-gray-600">{item.role}</span>
                      </div>
                    </Transition>
                  ))}

                </div>
              </div>

              {/* Bullets */}
              <div className="flex justify-center mt-6">

                {items.map((item, index) => (
                  <button className="p-1 group" key={index} onClick={() => { setActive(index); setAutorotate(false); }}>
                    <span className={`block w-2 h-2 rounded-full group-hover:bg-gray-400 transition duration-150 ease-in-out ${active === index ? 'bg-gray-200' : 'bg-gray-500'}`}></span>
                  </button>
                ))}

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
