import styled from "styled-components";

interface Image {
  image: string;
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  border-radius: 8px;
`;

export const CardImage = styled.div<Image>`
  background-image: url(image);
  background-size: cover;
  background-position: center;

  width: 100%;
  height: auto;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`;

export const Subtitle = styled.div`
  font-family: "Lora", serif;
  font-size: 1rem;
  color: #193238;
  font-weight: 500;
`;

export const Description = styled.div`
  font-family: "Lora", serif;
  font-size: 14px;
  color: #7e8a8c;
  font-weight: 400;
`;
