'use client'
import { useEffect, useRef, useState } from "react";
import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { twMerge } from "tailwind-merge";

const text = `Your creative process deserves better. You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

const words = text.split(' ')

export default function Introduction() {

    const scrollTarget = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ['start', 'end']
    })

    useMotionValueEvent(scrollYProgress, 'change', (latest) => (
        console.log(latest)
    ))

    const [currentWord, setCurrentWord] = useState(0)

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length])

    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(latest)
        })
    }, [wordIndex])

    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Introducing Layers</Tag>
                    </div>
                    <div className="md:text-6xl text-4xl lg:text-7xl text-center font-medium mt-10">
                        <span>
                            {
                                words.map((word, wordIndex) => (
                                    <span className={twMerge("transition duration-500 text-white/15", wordIndex < currentWord && 'text-white')} key={wordIndex}>{`${word} `}</span>
                                ))
                            }
                        </span>
                        <span className="text-lime-400 block">That's why we built Layers</span>
                    </div>
                </div>
                <div ref={scrollTarget} className="h-[150vh]"></div>
            </div>
        </section>
    )
}
