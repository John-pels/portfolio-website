import { motion, useAnimation, Variants } from "framer-motion";
import styled from "styled-components";
import { Bubble } from "../icons/bubble";


const Loader = ({ setDone }: any) => {
    const animation = useAnimation();

    const variants: Variants = {
        initial: {},
        final: {
            scale: 7,
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 60,
            },
        },
    };

    return (
        <LoaderContainer>
            <motion.div
                onAnimationComplete={() => {
                    setDone(true);
                }}
                variants={variants}
                initial="initial"
                animate={animation}
            >
                <Bubble
                    onDone={() => {
                        animation.start("final");
                    }}
                />
            </motion.div>
        </LoaderContainer>
    );
};

const LoaderContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Loader };
