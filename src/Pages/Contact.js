import React from "react";
import styled from "styled-components";

function Contact() {
  
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
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

      <div className="container">
        <div className="contact-form">
          <form action="" method="post" className="d-flex flex-column contact-inputs">
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
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
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
    }
  `;
export default Contact;
