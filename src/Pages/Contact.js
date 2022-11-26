import React from "react";
import styled from "styled-components";
import Services from "../Components/Services";

function Contact() {
  return (
    <Wrapper>
      <div className="axil-breadcrumb-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8">
              <h2 className="title">Contact Page</h2>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="bradcrumb-thumb">
                <img
                  className="mb-4"
                  src="./assets/products/product-45.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contact-form">
          <div className="row">
            <div className="col-lg-6">
              <form
                action=""
                method="post"
                className="d-flex flex-column contact-inputs"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  autoComplete="off"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="enter email"
                  required
                  autoComplete="off"
                />
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="enter your message"
                  required
                  autoComplete="off"
                ></textarea>
                <input type="submit" value="Send" />
              </form>
            </div>

            <div className="col-lg-6 d-flex flex-column">
              <div class="contact-location mb--40">
                <h4 class="title mb--20">Our Store</h4>
                <p class="address mb--20">
                  8212 E. Glen Creek Street Orchard Park, NY 14127, United
                  States of America
                </p>
                <p class="phone">Phone: +123 456 7890</p>
                <p class="email">Email: Hello@etrade.com</p>
              </div>

              <div class="contact-career mb--40">
                <h4 class="title mb--20">Careers</h4>
                <p>Instead of buying six things, one that you really like.</p>
              </div>

              <div class="opening-hour">
                <h4 class="title mb--20">Opening Hours:</h4>
                <p>
                  Monday to Saturday: 9am - 10pm
                  <br /> Sundays: 10am - 6pm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="google-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3498.0192005983486!2d77.18950231468311!3d28.748843685558892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ0JzU1LjgiTiA3N8KwMTEnMzAuMSJF!5e0!3m2!1sen!2sin!4v1667997210610!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Services />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  

  .axil-breadcrumb-area {
    position: relative;
    background-color: #f8f8f8;
    padding: 40px 0 45px;
    
    .bradcrumb-thumb {
      text-align: right;
      position: relative;
      z-index: 1;
    }
  }
  .container {
    text-align: left;

    .contact-form {
      padding: 80px 0 0 0;
      .contact-inputs {
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
    .title {
      font-weight: 700;
      color: black;
    }
    .mb--20 {
      margin-bottom: 20px;
    }
    .mb--40 {
      margin-bottom: 40px;
    }
    .google-map {
      padding: 9rem 0 0 0;
    }
  }
`;
export default Contact;
