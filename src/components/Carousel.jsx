import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';

const DEFAULT_ITEMS = [
    {
        title: 'My Linkedin Profile Picture',
        description: "Maybe some people recognize me from this picture (cause I sure do recognize a lot of people with their linkedin pfp)",
        id: 1,
        image: "/faces/1.jpg",
    },
    {
        title: 'A picture of me in Hanoi',
        description: "I owe my ability to drive a motorcycle and my taste buds to being Vietnamese",
        id: 2,
        image: "/faces/2.jpg",
    },
    {
        title: 'A cool picture i took',
        description: "I love Seventeen, so I flew to Bangkok while they were on tour to see them :) This is the Follow tour if anyone's curious",
        id: 3,
        image: "/faces/3.jpg",
    },
    {
        title: 'Me on stage',
        description: "I just wanted an excuse to put a video of me dancing on my website that's all. This is a piece that I did with DHCollective Hiphop Division for UBC Dance Horizons' Year-End Show 2025",
        id: 4,
        video: "/faces/video.mp4",
    }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
    items = DEFAULT_ITEMS,
    baseWidth = 1000,
    autoplay = false,
    autoplayDelay = 5000,
    pauseOnHover = false,
    loop = false,
    round = false
}) {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    const containerRef = useRef(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex(prev => {
                    if (prev === items.length - 1 && loop) {
                        return prev + 1;
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

    const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;
        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            if (loop && currentIndex === items.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
            }
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            if (loop && currentIndex === 0) {
                setCurrentIndex(items.length - 1);
            } else {
                setCurrentIndex(prev => Math.max(prev - 1, 0));
            }
        }
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0
            }
        };

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden p-4 ${round ? 'rounded-full border border-white' : 'rounded-[24px] border border-card'
                }`}
            style={{
                width: `${baseWidth}px`,
                ...(round && { height: `${baseWidth}px` })
            }}
        >
            <motion.div
                className="flex"
                drag="x"
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                    x
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(currentIndex * trackItemOffset) }}
                transition={effectiveTransition}
                onAnimationComplete={handleAnimationComplete}
            >
                {carouselItems.map((item, index) => {
                    const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
                    const outputRange = [90, 0, -90];
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const rotateY = useTransform(x, range, outputRange, { clamp: false });
                    return (
                        <motion.div
                            key={index}
                            className={`relative shrink-0 flex flex-col ${round
                                ? 'items-center justify-center text-center bg-[#060010] border-0'
                                : 'items-start justify-between bg-card border border-card rounded-[12px]'
                                } overflow-hidden cursor-grab active:cursor-grabbing`}
                            style={{
                                width: itemWidth,
                                height: round ? itemWidth : '100%',
                                rotateY: rotateY,
                                ...(round && { borderRadius: '50%' })
                            }}
                            transition={effectiveTransition}
                        >
                            {item.video ? (
                                <div>
                                    <video
                                        src={item.video}
                                        controls
                                        className="object-cover rounded-xs" />
                                </div>
                            ) : (
                                <div>
                                    <img src={item.image} className="object-cover rounded-xs" />
                                </div>
                            )}

                            <div className="p-5">
                                <div className="mb-1 font-black text-lg text-foreground font-bold">{item.title}</div>
                                <p className="text-sm text-foreground">{item.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
            <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
                <div className="mt-4 flex w-[150px] justify-between px-8">
                    {items.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                                ? round
                                    ? 'bg-white'
                                    : 'bg-card'
                                : round
                                    ? 'bg-[#555]'
                                    : 'bg-[rgba(71,71,71,0.4)]'
                                }`}
                            animate={{
                                scale: currentIndex % items.length === index ? 1.2 : 1
                            }}
                            onClick={() => setCurrentIndex(index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
