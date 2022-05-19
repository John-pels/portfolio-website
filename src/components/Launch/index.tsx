import styled from "styled-components";

export interface ILaunchButton {
    url: string;
    text1: string;
    text2: string;
}

const LaunchButton = ({ url, text1, text2 }: ILaunchButton) => {
    return (
        <LaunchButtonContainer className="ls">
            <LaunchText href={url} target="_blank" rel="noreferrer">
                {text1}
                <br />
                {text2}
            </LaunchText>
        </LaunchButtonContainer>
    );
};

export { LaunchButton };

const LaunchButtonContainer = styled.div`
  position: absolute;

  bottom: 1rem;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;

  transform: scale(0) translateY(200px);
  opacity: 0;
  transition: 0.5s;
  cursor: pointer;
`;

const LaunchText = styled.a`
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.32);

  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-weight: 300;

  font-size: 20px;
  line-height: 94.5%;
  color: #fff;

  font-family: ${({ theme }) => theme.fontFamilies.manhope.light};

  text-decoration: none;
`;
