import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
  ${"" /* transition: all .3s ease 0s; */}
}
html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
   scrollbar-color: #3577f0;
    scrollbar-width: thin;
}
body::-webkit-scrollbar {
  width: 1.5rem;
}
body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
h1,
h2,
h3,
h4,h5,p {
  font-family: 'Quicksand', sans-serif;
}
h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 4.8rem;
  font-weight: 700;
}
 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4rem;
   font-weight: 300;
   white-space: normal;
  
  }
h3 {
  font-size: 3.2rem;
  font-weight: 500;
}
h4{
  font-size: 2.4rem;
  font-weight: 500;
}
h5{
  font-size: 2rem;
  font-weight: 500;
}
h6{
  font-size: 1.6rem;
  font-weight: 500
}
p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  line-height: 1.5;
  font-weight:500;
}
a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
li {
  list-style: none;
}

.container {
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 9rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}
.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}
  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }
     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #3577f0;
    }
   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
    ul{
      padding-left: 0;
      list-style: none;
      font-size: 1.5rem;
      color: white;

      li{
        margin-bottom: 1rem;
      }
    }
input, textarea{
    font-size: 1.6rem;
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
select{
  font-size: 1.6rem;
  text-transform: uppercase;
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }
@media (max-width: ${({ theme }) => theme.media.tab}) {
  .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }
.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }
`;
