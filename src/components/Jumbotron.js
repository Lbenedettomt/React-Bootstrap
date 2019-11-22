import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import roadImage from '../assets/roadImage.jpg';

const Styles = styled.div``;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid classname="jumbo">
            <div classname="overlay"></div>
            <Container>
                <h1>Code Life</h1>
                <p>Aprenda a codar pelo meu site!</p>
            </Container>
        </Jumbo>
    </Styles>
)