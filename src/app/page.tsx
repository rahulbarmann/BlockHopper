"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Block {
    id: string;
    x: string;
    y: string;
}

const BlockGrid = () => {
    const [blocks, setBlocks] = useState<Block[]>([]);

    useEffect(() => {
        const gridSize = 8;
        const newBlocks: Block[] = [];
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                newBlocks.push({
                    id: `${i}-${j}`,
                    x: `${(j / gridSize) * 100}%`,
                    y: `${(i / gridSize) * 100}%`,
                });
            }
        }
        setBlocks(newBlocks);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {blocks.map((block) => (
                <motion.div
                    key={block.id}
                    className="absolute w-4 h-4 bg-black rounded-sm"
                    style={{ left: block.x, top: block.y }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: Math.random() * 3,
                    }}
                />
            ))}
        </div>
    );
};

export default function Home() {
    return (
        <div className="h-screen bg-[#f3f3f2] text-black flex flex-col justify-center items-center p-8 overflow-hidden relative">
            <BlockGrid />

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 z-10"
            >
                <motion.h1
                    className="font-bold text-6xl mb-8"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, stiffness: 200 }}
                >
                    BlockHopper
                </motion.h1>
                <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Link
                        href="#"
                        className="bg-black text-[#f3f3f2] px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300 flex items-center justify-center"
                    >
                        Get Started <ArrowRight className="ml-2" />
                    </Link>
                    <Link
                        href="#"
                        className="bg-[#f3f3f2] text-black px-6 py-3 rounded-full font-semibold border-2 border-black hover:bg-gray-200 transition duration-300 flex items-center justify-center"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                {[
                    {
                        icon: Box,
                        title: "Secure Storage",
                        description: "Keep your assets safe",
                    },
                    {
                        icon: Zap,
                        title: "Lightning Fast",
                        description: "Blazing fast transactions",
                    },
                    {
                        icon: ArrowRight,
                        title: "Easy Integration",
                        description: "Seamless system integration",
                    },
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#f3f3f2] p-4 rounded-lg border-2 border-black text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <feature.icon className="w-8 h-8 mx-auto mb-2 text-black" />
                        <h2 className="text-lg font-semibold mb-1">
                            {feature.title}
                        </h2>
                        <p className="text-sm">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
