/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface IBubble {
    onDone: () => void;
}

const Bubble = ({ onDone }: IBubble) => {
    const [count, setCount] = useState(0);

    const v = useMotionValue("100%");

    const yy = useSpring(v, {
        duration: 6000,
    });

    useEffect(
        () =>
            yy.onChange((latest: string) => {
                const number = Number(latest.split("%")[0]);
                setCount(100 - Math.floor(number));

                if (number === 0) {
                    setTimeout(() => {
                        onDone();
                    }, 1000);
                }
            }),
        []
    );

    useEffect(() => {
        yy.set("0%");
    }, []);

    return (
        <Container>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                style={{ display: "none" }}
            >
                <symbol id="wave">
                    <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                    <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                    <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                    <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                </symbol>
            </svg>
            <div className="box">
                <div className="percent">
                    <div className="percentNum" id="count">
                        {count}
                    </div>
                    <div className="percentB">%</div>
                </div>
                <motion.div
                    transition={{ duration: 10000 }}
                    style={{ y: yy }}
                    className="water"
                    onAnimationComplete={() => {
                        console.log("done");
                    }}
                >
                    <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
                        <use xlinkHref="#wave"></use>
                    </svg>
                    <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
                        <use xlinkHref="#wave"></use>
                    </svg>
                </motion.div>
            </div>
        </Container>
    );
};

const boxColor = "#E6F5F3";
const waterFColor = "#E9D7E4";
const waterBColor = "#CFE4F5";

const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamilies.manhope.extraLight};

  .box {
    height: 280px;
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${boxColor};
    border-radius: 100%;
    overflow: hidden;
    .percent {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      justify-content: center;
      color: #000;
      font-size: 64px;
    }
    .water {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      transform: translate(0, 100%);
      background: ${waterFColor};
      transition: all 0.3s;
      &_wave {
        width: 200%;
        position: absolute;
        bottom: 100%;
        &_back {
          right: 0;
          fill: ${waterBColor};
          animation: wave-back 1.4s infinite linear;
        }
        &_front {
          left: 0;
          fill: ${waterFColor};
          margin-bottom: -1px;
          animation: wave-front 0.7s infinite linear;
        }
      }
    }
  }
  @keyframes wave-front {
    100% {
      transform: translate(-50%, 0);
    }
  }

  @keyframes wave-back {
    100% {
      transform: translate(50%, 0);
    }
  }
`;

export { Bubble };
