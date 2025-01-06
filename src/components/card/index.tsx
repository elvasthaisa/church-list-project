import React from 'react';
import { CardBody, CardContainer, CardImage, Description, Subtitle } from './styles';
// import myImage from '../../assets/';

interface CardProps {
  cardImage?: any,
  subtitle: string,
  description: string
}

const Card = ({ cardImage, subtitle, description}: CardProps) => {
  return (
    <CardContainer>
      <CardImage image={cardImage} />
      <CardBody>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </CardBody>
    </CardContainer>
  )
}

export default Card;
