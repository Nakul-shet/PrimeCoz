'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const imageItems = [
  { src: "/male_influ.jpeg"},
  { src: "/female_influ.png"},
  { src: "/female_influ.png"},
  { src: "/male_influ.jpeg"},
  { src: "/female_influ.png"},
  { src: "/female_influ.png"},
  { src: "/male_influ.jpeg"},
  { src: "/female_influ.png"},
  { src: "/male_influ.jpeg"},
]

function getRandomAnimation() {
  const animations = [
    {
      initial: { opacity: 0, rotateY: 90 },
      animate: { opacity: 1, rotateY: 0 },
    },
    {
      initial: { opacity: 0, rotateX: 90 },
      animate: { opacity: 1, rotateX: 0 },
    },
    {
      initial: { opacity: 0, scale: 0.6, rotate: -10 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
    },
    {
      initial: { opacity: 0, y: -30 },
      animate: { opacity: 1, y: 0 },
    },
  ]
  return animations[Math.floor(Math.random() * animations.length)]
}

export default function AnimatedImageGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-3 gap-4"
    >
      {imageItems.map((item, index) => {
        const delay = Math.random() * 1.5
        const duration = 2 + Math.random() * 2
        const rotateHover = Math.random() * 15 - 7
        const { initial, animate } = getRandomAnimation()

        return (
          <motion.div
          key={index}
          initial={initial}
          animate={animate}
          transition={{
            delay,
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.05,
            rotate: rotateHover,
            zIndex: 20,
          }}
          className={`transform-style-3d perspective-1000 rounded-full overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700`}
        >
          <Image
            src={item.src}
            width={80}
            height={80}
            alt="Creator"
            className="w-full h-full object-cover"
          />
        </motion.div>
        )
      })}
    </motion.div>
  )
}
