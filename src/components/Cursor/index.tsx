import { useEffect, useRef } from "react";
import styled from "styled-components";

const CustomCursor = () => {
    const mouseRef = useRef<HTMLDivElement>(null);

    const mouse = (e: MouseEvent) => {
        if (mouseRef.current) {
            mouseRef.current.style.top = String(e.clientY - 10) + "px";
            mouseRef.current.style.left = String(e.clientX - 10) + "px";
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", mouse);
        return () => {
            window.removeEventListener("mousemove", mouse);
        };
    }, []);

    return (
        <Container ref={mouseRef}>
            <Content />
        </Container>
    );
};

const Container = styled.div`
  position: fixed;
  transition: 0.3s;
  z-index: 10001;
  pointer-events: none;

  ${({ theme }) => theme.media.md} {
    display: none;
  }
`;

const Content = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.gradients.secondary[1]};
  border-radius: 50%;
`;

export default CustomCursor;
