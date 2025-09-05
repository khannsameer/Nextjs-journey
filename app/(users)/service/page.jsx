"use client";

import Image from "next/image";
import planet from "@/public/planet.jpg";
import { easeIn, easeInOut, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// export const metadata = {
//   title: "Service Page",
//   description: "This is a service page",
//   keywords: ["nextjs", "reactjs", "JavaScript"],
// };

const Services = () => {
  const cardRef = useRef();
  const hoverTween = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = cardRef.current;
      //(set) means this is a initial state

      gsap.set(element, {
        opacity: 0,
        y: 50,
        scale: 1,
      });
      //(to) means to animate
      gsap.to(element, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power2.Out",
      });
    });
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    if (hoverTween.current) {
      hoverTween.current.kill();
    }
    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.3,
      y: -50,
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    //kill any existing hover animation
    if (hoverTween.current) {
      hoverTween.current.kill();
    }
    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.3,
      y: 0,
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      ease: "power2.in",
    });
  };

  return (
    <>
      <h1>Hello Services</h1>
      <section className="font-fugaz">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Team
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: easeIn }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.7 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg "
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1, ease: easeInOut }}
                className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center"
              >
                <Image
                  src="/planet.jpg"
                  width={500}
                  height={500}
                  alt="Planet Image"
                  className="w-full h-full rounded-full"
                  priority={false}
                />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: easeIn, delay: 0.4 }}
                className="text-lg font-semibold text-center text-gray-800"
              >
                Alice
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: easeIn, delay: 1 }}
                className="text-sm text-gray-600 text-center mt-2"
              >
                Frontend Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: easeIn, delay: 1.5 }}
                className="text-xs text-gray-500 text-center mt-1"
              >
                JavaScript & React
              </motion.p>
            </motion.div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
              <div className="w-full h-full bg-blue-200 relative rounded-full mx-auto mb-4 flex items-center justify-center">
                <Image
                  src={planet}
                  // width={500}
                  // height={500}
                  alt="Food Image"
                  fill={true} // if we use fill prop must have to use relative, fixed, or absolute in parent element
                  quality={100}
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur" // it we want to show the image blue then have to import the image
                  blurDataURL=""
                />
              </div>
            </div>

            {/* Team Member 3 */}
            <div
              ref={cardRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg"
            >
              <div className="w-24 h-24 bg-cyan-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-600">C</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Charlse
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">DevOps</p>
              <p className="text-xs text-gray-500 text-center mt-1">Linux</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-lime-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-lime-600">D</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Den
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
                Full-Stack
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                MERN Stack
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">E</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Ellie
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">Testing</p>
              <p className="text-xs text-gray-500 text-center mt-1">Android</p>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">F</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Fiona
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
                IOS Developer
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                Flutter & React Native
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
