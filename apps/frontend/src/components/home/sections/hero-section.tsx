'use client';

import {useCallback, useMemo} from "react";

import {motion} from "framer-motion";

import {SectionScaleRotate} from "@/components/common/animations/section-scale-rotate";
import {useMousePositionContext} from "@/components/common/special/cursor-handler/use-mouse-position-context";
import {Text} from "@/components/common/text";
import {CtaCircle} from "@/components/common/special/cta-circle";

export const HeroSection = () => {
    const {smoothMouse, isHovering, setIsHovering} = useMousePositionContext();
    const size = useMemo(() => isHovering ? 400 : 0, [isHovering]);

    const onMouseEnter = useCallback(() => {
        setIsHovering(true);
    }, [setIsHovering]);

    const onMouseLeave = useCallback(() => {
        setIsHovering(false);
    }, [setIsHovering]);

    return (
        <SectionScaleRotate
            className={"sticky top-0 flex h-screen flex-col items-center justify-center bg-background pb-[10vh] text-[3.5vw]"}>
            <motion.div
                className={"hover-mask-circle flex size-full cursor-default items-center justify-center text-[64px] text-foreground"}
                animate={{
                    WebkitMaskPosition: `${smoothMouse.x.get() - (size / 2)}px ${smoothMouse.y.get() - (size / 2)}px`,
                    WebkitMaskSize: `${size}px`
                }}
                transition={{type: 'tween', ease: 'backOut', duration: 0.5}}
            >
                <Text
                    className={"p-[40px]"}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >We create
                    web apps, websites, and designs that stand out in the digital landscape.
                </Text>
            </motion.div>

            <div
                className={"flex size-full cursor-default items-center justify-center text-[64px] text-foreground-muted"}>
                <Text className={"p-[40px]"}>Our studio focuses on delivering high-quality & impactful digital
                    experiences. Our company shines out of others.</Text>
            </div>
            <CtaCircle/>
        </SectionScaleRotate>
    );
};
