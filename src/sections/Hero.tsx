'use client'

import { useEffect } from "react";
import Button from "@/components/Button";
import designExample1Image from '@/assets/images/design-example-1.png';
import designExample2Image from '@/assets/images/design-example-2.png';
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from 'framer-motion';
import cursorImg from '@/assets/images/cursor-you.svg';

export default function Hero() {

    const [leftDesignScope, leftDesignAnimate] = useAnimate();

    const [leftPointerScope, leftPointerAnimate] = useAnimate();

    const [rightDesignScope, rightDesignAnimate] = useAnimate();

    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {

        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
        ])

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: 0, y: [0, 16, 0] }, { duration: 0.5, ease: 'easeIn' }]
        ])

        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
        ])

        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5, ease: 'easeIn' }]
        ])

    })


    return (
        <section className="py-24 overflow-x-clip" style={{
            cursor: `url(${cursorImg.src}), auto`
        }}>
            <div className="container relative">

                <motion.div ref={leftDesignScope} drag initial={{ opacity: 0, y: 100, x: -100, }} className="absolute -left-40 top-40 hidden lg:block">
                    <Image draggable='false' src={designExample1Image} alt="Design img 1" />
                </motion.div>

                <motion.div ref={leftPointerScope} initial={{ opacity: 0, y: 100, x: -200, }} className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Lucas" />
                </motion.div>


                <motion.div ref={rightDesignScope} drag initial={{ opacity: 0, x: 100, y: 100 }} className="absolute -right-64 top- hidden lg:block">
                    <Image draggable='false' src={designExample2Image} alt="Design img 2" />
                </motion.div>


                <motion.div ref={rightPointerScope} initial={{ opacity: 0, x: 200, y: 100 }} className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Melisa" color="red" />
                </motion.div>

                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold text-center">
                        $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl front-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&apos;t slow you down. Layers powerful features with an intituive interface that in your creative flow.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input type="email" placeholder="Enter your email" className="bg-transparent px-4 md:flex-1 w-full" />
                    <Button variant="primary" className="whitespace-nowrap" size="sm">Sign up</Button>
                </form>
            </div>
        </section>
    );
}
