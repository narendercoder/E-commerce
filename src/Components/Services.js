import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row service-section-slider">
          <div className="services col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
            <div className="banner d-flex align-items-center">
              <div className="banner-icon">
                <TbTruckDelivery className="icon" />
              </div>
              <div className="banner-text">
                <h3>Super Fast and Free Delivery</h3>
              </div>
            </div>
          </div>
          <div className="services col-md-4 col-12 col-sm-6 mb-md-4">
            
              <div className="banner d-flex align-items-center">
                <div className="banner-icon">
                  <MdSecurity className="icon" />
                </div>
                <div className="banner-text">
                  <h3>Non-Contact Shipping</h3>
                </div>
              
            </div>
          </div>
          <div className="services col-md-4 col-12 col-sm-6 mb-md-4">
            <div className="banner d-flex align-items-center">
              <div className="banner-icon">
                <GiReceiveMoney className="icon" />
              </div>
              <div className="banner-text">
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>
          <div className="services col-md-4 col-12 col-sm-6 mb-md-4">
            <div className="banner d-flex align-items-center">
              <div className="banner-icon">
                <RiSecurePaymentLine className="icon" />
              </div>
              <div className="banner-text">
                <h3>Super Secure Payment System</h3>
              </div>
            </div>
          </div>
          <div className="services col-md-4 col-12 col-sm-6 mb-md-4">
            <div className="banner d-flex align-items-center">
              <div className="banner-icon">
                <RiSecurePaymentLine className="icon" />
              </div>
              <div className="banner-text">
                <h3>Easy Returns</h3>
                <p>Within 10 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0 0 0;
  .service-section-slider {
    width: 100%;
    height: 100%;
  }
  .services {
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    &:hover .banner-icon{
      transform: translateY(-3px);
      transition: 0.25;
      transition: all .3s ease 0s;
    }
  }
  @media only screen and (min-width: 1200px){
  .services {
    width: 20%;
  }
  }
  @media only screen and (min-width: 0px){
  .mb-md-4 {
    margin-bottom: 1.5rem !important;
   }
  }
  .services {
      .banner {
        position: relative;
        border-radius: 10px;
        background: ${({ theme }) => theme.colors.bg};
        padding: 20px;
        .banner-text h3{
          color: #242424;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
        }
      }
    
  }

  h3 {
    margin-top: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
  }
  p{
    font-size: 1.6rem;
  }
  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #3577f0;
  }
`;
export default Services;
