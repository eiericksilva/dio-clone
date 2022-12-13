import React from 'react'
import { Container, Row, Wrapper,BuscarInputContainer,Menu,MenuRight,Input } from './styles'
/* import {
    Container, 
    Row, 
    Wrapper,
    BuscarInputContainer,
    Menu, 
    MenuRight, 
    Input  
} from './styles' */
import Button from '../button'
import logo from '../../assets/logo-dio.png'


const Header = () => {
    
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da DIO"/>
                <BuscarInputContainer>
                    <Input placeholder="Buscar..." />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>
            <Row>
                <MenuRight href='#'>Home</MenuRight>
                <Button title="Entrar"/>
                <Button title="Cadastrar"/>
            </Row>
        </Container>
    </Wrapper>
  )
}

export default Header