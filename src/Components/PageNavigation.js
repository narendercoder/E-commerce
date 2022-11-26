import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
        <NavLink to="/">Home</NavLink>/{title}
    </Wrapper>
  )
}

const Wrapper = styled.section`
height: 10rem;
background-color: ${({theme})=>theme.colors.bg};
display: flex;
justify-content: flex-start;
font-size: 3.2rem;
padding-left: 1.2rem;
a{
  color: #0d6efd;
    font-size: 3.2rem
}
`

export default PageNavigation