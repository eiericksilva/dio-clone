import Button from "../../components/button";
import React from "react";
import Header from "../../components/header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";
import bannerImage from "../../assets/banner.png";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            o o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem Principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
