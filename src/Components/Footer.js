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
              <div className="axil-footer-widget footer-about">
                <h3>Nest</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi debitis eveniet mollitia.
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="axil-footer-widget footer-account">
                <h3>Account</h3>
                <ul>
                  <li>My Account</li>
                  <li>Login/Register</li>
                  <li>Cart</li>
                  <li>Wishlist</li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <div className="axil-footer-widget footer-quickLinks">
                <h3>Quick Link</h3>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Terms Of Use</li>
                  <li>FAQ</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="axil-footer-widget footer-social">
                <h3>Follow us</h3>
                <div className="footer-social--icons">
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

            <div className="col-lg-2 col-sm-6">
              <div className="axil-footer-widget footer-contact">
                <h3>Support</h3>
                <p>685 Market Street, Las Vegas, LA 95820, United States.</p>
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
                      <img src="images/cart-1.png" alt="" />
                    </li>
                    <li>
                      <img src="images/cart-2.png" alt="" />
                    </li>
                    <li>
                      <img src="images/cart-5.png" alt="" />
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
    input[type="submit"]{
      border-radius: 10px;
    }
  }

  footer {
    padding: 14rem 0 1rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    .axil-footer-widget {
      margin-bottom: 40px;
    }
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    

    p,
    span {
      font-size: 1.6rem;
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
    padding-top: 9rem;

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
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
