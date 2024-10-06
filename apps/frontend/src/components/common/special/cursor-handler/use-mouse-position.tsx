'use client';

import {useEffect, useState} from "react";

import {type SpringOptions, useMotionValue, useSpring} from "framer-motion";

const smoothMouseConfig: SpringOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
};

export const useMousePosition = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const cursorSize = 15;
    const hoverSize = 80;

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouse = {
        x,
        y
    };

    const smoothMouse = {
        x: useSpring(mouse.x, smoothMouseConfig),
        y: useSpring(mouse.y, smoothMouseConfig),
    };

    const manageMouseMove = (e: globalThis.MouseEvent) => {
        // const targetAttribute = (e.target as HTMLElement).getAttribute('data-cursor-type');
        //
        // if (targetAttribute === 'menu') {
        //     setIsHovering(true);
        // } else if (targetAttribute === 'mask-circle') {
        //     console.log("Circkle")
        //     setIsHovering(false);
        // } else {
        //     setIsHovering(false);
        // }

        const {clientX, clientY} = e;
        setMousePosition({x: clientX, y: clientY});

        mouse.x.set(clientX - (isHovering ? cursorSize / 2 : cursorSize / 2));
        mouse.y.set(clientY - (isHovering ? cursorSize / 2 : cursorSize / 2));
    };


    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        };
    }, []);


    return {
        mouse,
        smoothMouse,
        mousePosition,
        x: x.get(),
        y: y.get(),
        isHovering,
        cursorSize,
        hoverSize,
        setIsHovering
    };
};