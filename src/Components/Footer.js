import React from "react";
import styled from "styled-components";
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
      <section className="contact-short">
        <form action="#" className="grid grid-two-column">
          <div>
            <h4 className="mb-3">Up to 15% discount on your first subscribe</h4>
            <input type="email" placeholder="your email" />
          </div>
          <div>
            <input type="submit" value="subscribe" />
          </div>
        </form>
      </section>
      <footer>
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-6">
              <div className="axil-footer-widget footer-account">
                <h5 className="mb-4 widget-title">Account</h5>
                <ul>
                  <li> My Account</li>
                  <li>Login/Register</li>
                  <li>
                    <NavLink to="cart">Cart</NavLink>{" "}
                  </li>
                  <li>Wishlist</li>
                  <li>
                    <NavLink to="/products">Shop</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="axil-footer-widget footer-quickLinks">
                <h5 className="mb-4 widget-title">Quick Link</h5>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms Of Use</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="axil-footer-widget footer-contact">
                <h5 className="mb-4 widget-title">Support</h5>
                <p>685 Market Street,<br /> Las Vegas, LA 95820,<br /> United States.</p>
                <div className="d-flex justify-content-start align-items-center">
                  <MdEmail className="icons me-3" />
                  <span>example@domain.com </span>
                </div>

                <div className="d-flex justify-content-start align-items-center">
                  <MdPhoneInTalk className="icons me-3" />
                  <span>(+01) 850-315-5862</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="axil-footer-widget footer-social">
                <h5 className="mb-4 widget-title">Follow us</h5>
                <div className="footer-social--icons d-flex flex-wrap">
                  <div>
                    <FiFacebook className="fb-icon icons" />
                  </div>
                  <div>
                    <FiInstagram className="ig-icon icons" />
                  </div>
                  <div>
                    <FiTwitter className="tw-icon icons" />
                  </div>
                  <div>
                    <FiLinkedin className="li-icon icons" />
                  </div>
                  <div>
                    <FiYoutube className="yt-icon icons" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <p>© {new Date().getFullYear()} Nest. All rights reserved.</p>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="copyright-right d-flex flex-wrap justify-content-xl-end justify-content-center align-items-center">
                  <span className="card-text">Accept For</span>
                  <ul className="payment-icons-bottom quick-link">
                    <li>
                      <img src="./assets/images/cart-1.png" alt="paypal" />
                    </li>
                    <li>
                      <img src="./assets/images/cart-2.png" alt="master-card" />
                    </li>
                    <li>
                      <img src="./assets/images/cart-5.png" alt="visa-card" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    text-align: center;
    .grid {
      gap: 0rem;
    }
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
    input {
      width: 100%;
    }
    input[type="submit"] {
      border-radius: 10px;
    }
  }

  footer {
    padding: 15rem 0 1rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    .axil-footer-widget {
      margin-bottom: 40px;
      ul > li:first-child {
        margin-top: 0;
      }
      ul li {
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 1.8rem
      }
      .widget-title {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 600;
      }
    }
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p,
    span {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.white};
    }
    .icons {
      color: ${({ theme }) => theme.colors.white};
      font-size: 2rem;
      cursor: pointer;
    }
    .footer-contact {
      .contact-icon {
        h3 {
          margin-bottom: 0;
        }
        .icons {
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-social--icons {
      display: flex;
      gap: 1rem;

      div {
        position: relative;
        padding: 1.2rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        overflow: hidden;
        z-index: 1;

        .icons {
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
        &::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          height: 100px;
          width: 100px;
          background-color: ${({ theme }) => theme.colors.helper};
          z-index: -1;
          border-radius: 50%;
          transform: scale(0);
          transition: 0.3s;
        }

        &:hover:after {
          transform: scale(1);
        }
      }
    }
  }

  .footer-bottom--section {

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
    .copyright-right {
      .quick-link.payment-icons-bottom {
        margin: -15px -10px;
        li {
          padding: 10px;
        }
      }
      .quick-link {
        display: flex;
      }
      span.card-text {
        font-weight: 500;
        display: inline-block;
        margin: 10px 20px;
        letter-spacing: -0.025em;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;

      .axil-footer-widget p {
        padding-right: 100px;
      }
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }

  @media (min-width: 769px) and (max-width: 820px) {
    .contact-short .grid {
      grid-template-columns: repeat(1, 1fr);
    }
    .container {
      margin-top: 50px;
    }
  }
`;

export default Footer;
