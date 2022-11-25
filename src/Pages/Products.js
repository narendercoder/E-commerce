import React from "react";
import styled from "styled-components";
import FilterSection from "../Components/FilterSection";
import ProductList from "../Components/ProductList";
import Sort from "../Components/Sort";

function Products() {

  return <Wrapper>
    <div className="container">
      <div className="row ">
       <div className="col-lg-3">
       <FilterSection/>
       </div>
       <section className="product-view--sort col-lg-9">
        <div className="row">
          <div className="sort-filter col-lg-12">
            <Sort />
          </div>
          <div className="main-product col-lg-12">
            <ProductList />
          </div>
        </div>
       </section>
      </div>
    </div>
  </Wrapper>;
}
const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;


export default Products