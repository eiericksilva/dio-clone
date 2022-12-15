import Button from "../../components/button";
import React from "react";
import Header from "../../components/header";
import { Container, Title } from "../home/styles";
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

import { api } from "../../services/api";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email().required("O email é obrigatório"),
    password: yup
      .number("números inteiros")
      .min(6, "A senha deve ter no mínimo 6 digitos")
      .required("A senha é obrigatória"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/feed");
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.senha}`
      );
      if (data.length === 1) {
        navigate("/feed");
        return;
      } else {
        alert("Email ou senha inválido");
      }
      console.log(data);
    } catch (error) {
      alert("houve um erro, tente novamente!");
    }
  };
  console.log(errors);

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register("email", { required: true })}
                control={control}
                placeholder="E-mail"
              />
              <span>{errors.email?.message}</span>
              <Input
                {...register("password")}
                control={control}
                placeholder="Senha"
                type="password"
              />
              <span>{errors.password?.message}</span>
              <Button
                title="Entrar"
                variant="secondary"
                type="button"
                onClick={handleClickSignIn}
              />
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
