import Button from "../../components/button";
import React from "react";
import Header from "../../components/header";
import { TitleHighlight, Container, Title, TextContent } from "../home/styles";
import { Input } from "../../components/header/styles";
import {
  Column,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  TitleLogin,
  Wrapper,
} from "./styles";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change.</SubtitleLogin>
            <form>
              <Input placeholder="email" leftIcon={<MdEmail />} />
              <Input placeholder="senha" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary"></Button>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
