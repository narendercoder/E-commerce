import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import SingleProducts from "./Pages/SingleProducts";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const theme = {
    colors:{
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      helper: "#3577f0",


      bg: "#F4F6FA",
      footer_bg: "#0a1435",
      btn: "#3577f0",
      border: "rgba(53, 119, 240, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(53, 119, 240) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{
      mobile: "768px",
      tab: "998px"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
