import { motion, Variants } from "framer-motion";

interface ISlideInWrapper {
    children: React.ReactNode;
    stagger?: number;
    once?: boolean;
    alt?: boolean;
    scrollTriggered?: boolean;
}

const SlideInWrapper = ({
    children,
    stagger = 0.3,
    once = true,
    scrollTriggered = true,
}: ISlideInWrapper) => {
    const variants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
            },
        },
    };
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView={scrollTriggered ? "visible" : undefined}
            animate={scrollTriggered ? undefined : "visible"}
            viewport={{ once }}
        >
            {children}
        </motion.div>
    );
};

interface ISlideChild {
    children: React.ReactNode;
    stiffness?: number;
    y?: number;
    x?: number;
    alt?: boolean;
}

export const SlideChild = ({
    children,
    stiffness = 100,
    y = 200,
    x = 200,
    alt = false,
}: ISlideChild) => {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: alt ? 0 : y,
            x: alt ? x : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: "spring",
                stiffness,
            },
        },
    };

    return <motion.div variants={variants}>{children}</motion.div>;
};

export { SlideInWrapper };
