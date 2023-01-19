import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {FiShoppingCart} from "react-icons/fi";
import {CgMenu, CgClose} from "react-icons/cg"
import { useState } from "react";
import { useCartContext } from "../Context/Cart_Context";

const Nav = () => {
const [menuIcon, setMenuIcon] = useState(false);
const {total_item} = useCartContext();

  return (
    <Navbar>
      <div className={menuIcon ? "header-navbar active" : "header-navbar"}>

        <ul className="navbar-lists">

          <li>
            <NavLink to="/" end className="navbar-link" onClick={()=>setMenuIcon(false)} >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={()=>setMenuIcon(false)}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={()=>setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={()=>setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>

        </ul>
       
        <div className="mobile-navbar-btn">
          <CgMenu name = "menu-outline" className="mobile-nav-icon" 
            onClick={()=>setMenuIcon(true)}
          />
          <CgClose name = "close-outline" className="mobile-nav-icon close-outline" 
           onClick={()=>setMenuIcon(false)} />
        </div>

      </div>
    </Navbar>
  );
};

const Navbar = styled.nav`
     .navbar-lists{
        display: flex;
        gap: 4.8rem;
        align-items: center;
    
        .navbar-link{
            &:link,
            &:visited{
                display: inline-block;
                text-decoration: none;
                font-size: 1.8rem;
                font-weight: 700;
                text-transform: uppercase;
                color: ${({ theme }) => theme.colors.black};
                transition: color 0.3s linear;
            }
            &:hover,
            &:active{
                color: ${({ theme }) => theme.colors.helper};
            }
        }
        .navbar-link.active{
          color: rgb(53, 119, 240);
        }
    }

    .mobile-navbar-btn{
        display: none;
        background-color: transparent;
        cursor: pointer;
        border:none;
    }

    .mobile-nav-icon[name="close-outline"]{
        display: none;
    }

    .close-outline{
        display:none;
    }

    .cart-trolley--link{
        position: relative;
    
        .cart-trolley{
            position: relative;
            font-size: 3.2rem;
        }
        .cart-total--item{
            width: 2.4rem;
            height: 2.4rem;
            position: absolute;
            background-color: #000;
            color: #fff;
            border-radius: 50%;
            dispLay: flex;
            justify-content: center;
            align-items: center;
            top: -20%;
            left: 70%;
            background-color: ${({ theme }) => theme.colors.helper};
        }
    }


    .user-login--name{
        text-transform: capitalize;
    
    }


    .user-logout,
    .user-login{
        font-size: 1.4rem;
        padding: 0.8rem 1.4rem;
    }
    
    @media(max-width: ${({ theme }) => theme.media.mobile}){
      .mobile-navbar-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};
    
        .mobile-nav-icon{
            font-size: 4.2rem;
            color: ${({ theme }) => theme.colors.black};
        }
    
      }
      .active .mobile-nav-icon{
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline{
        display: inline-block;
    
      }
    
      .navbar-lists{
        width: 100vw;
        height: 100vh;
        position : absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        transform: translateX(100%);
        /* transition: all 3s linear; */
      }
      .active .navbar-lists{
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 0.5s linear;
    
        .navbar-link{
            font-size: 4.2rem;
        }
      }
      .cart-trolley--link{
        position: relative;
    
        .cart-trolley{
            position: relative;
            font-size: 5.2rem;
        }
        .cart-total--item{
            width: 4.2rem;
            height: 4.2rem;
            font-size: 2rem;
        }
    }
    .user-logout,
    .user-login{
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
    }
    }
  `;

export default Nav;
