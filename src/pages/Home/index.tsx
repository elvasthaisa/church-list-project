import React from 'react'
import { Header, Title } from './styles';
import Card from '../../components/card';

const Home = () => {
  return (
    <Header className="App-header">
      <Title>
        Igrejas Católicas em Recife-PE
      </Title>

      <Card subtitle='Barro, Recife' description='Rua Vidal de Negreiros, 211' cardImage="https://www.newhollandwood.com/wp-content/uploads/2019/10/1-Monastery-of-the-Holy-Cross-Chicago.jpg" />
    </Header>
  )
}

export default Home;
