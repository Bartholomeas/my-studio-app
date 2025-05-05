import Image from "next/image";

import { motion } from "framer-motion";

import { Text } from "../text";
import { Title } from "../title";

export const MotionTitle = motion(Title);
export const MotionText = motion(Text);
export const MotionImage = motion(Image);