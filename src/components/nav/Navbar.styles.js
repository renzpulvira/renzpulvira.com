import styled from "styled-components";

export const Nav = styled.nav`
  padding: 18px 15px;

  @media screen and (min-width: 768px) {
    padding: 18px 0;
  }

  background: ${(props) => props.theme.navColor};
`;

export const NavCont = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    text-decoration: none;
    font-family: "JetBrains Mono";
    font-weight: 900;
    font-size: 21px;
    font-style: italic;
    color: ${(props) => props.theme.navTextColor};
  }
`;

export const MobileBurger = styled.button`
  display: inline-block;
  height: 30px;
  width: 40px;
  position: relative;
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    background: ${(props) => props.theme.navTextColor};
  }

  span:nth-child(1) {
    top: 5%;
  }

  span:nth-child(2) {
    top: 51%;
    transform: translateY(-50%);
  }

  span:nth-child(3) {
    top: unset;
    bottom: 5%;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      margin-right: 30px;
      font-size: 18px;

      &:last-child {
        margin-right: 0;
      }
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.navTextColor};
    }

    svg {
      cursor: pointer;
      color: ${(props) => props.theme.navTextColor};
    }
  }
`;
