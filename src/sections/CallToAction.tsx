'use client'

import { useEffect, useRef, useState } from 'react';
import { AnimationPlaybackControls, useAnimate, motion } from 'framer-motion';

export default function CallToAction() {

    const [isHovered, setIsHovered] = useState(false)

    const [scope, animate] = useAnimate();

    const animation = useRef<AnimationPlaybackControls>()

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 20, ease: 'linear', repeat: Infinity }
        );
    });

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }

    }, [isHovered])

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    className="flex flex-none gap-16 pr-16 text-7xl font-medium group cursor-pointer"
                    ref={scope}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i}>
                            <span className="text-lime-400">&#10038;</span>
                            <span className='group-hover:text-lime-400'>Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
