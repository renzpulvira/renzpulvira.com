import styled from "styled-components";

export const TopSection = styled.div`
  padding: 7em 0 10em 0;
  background: ${(props) => props.theme.oddSectionBg};
`;

export const Profile = styled.div`
  flex: 0 50%;

  .profile-image {
    height: 341px;
    width: 341px;
    margin: 0 auto;
    border-radius: 50%;
    border-bottom: 7px solid ${(props) => props.theme.borderBottomProfile};
    background-size: cover;
    background-position-x: 100%;
  }

  .intro {
    text-align: center;
    position: relative;

    h1 {
      font-family: "Rubik";
      font-weight: 900;
      font-size: 36px;
      margin: 30px 0 10px 0;
      color: ${(props) => props.theme.textColor};
    }

    p {
      margin: 0;
      font-family: "Inter";
      font-size: 18px;
      font-weight: 700;
      color: ${(props) => props.theme.textColor};
    }

    svg {
      position: absolute;
      top: 0;
      left: 73%;
      transform: translateX(-50%);
    }
  }

  .contacts {
    display: flex;
    justify-content: center;
    padding-top: 1.5em;

    a {
      margin-right: 15px;

      &:last-child {
        margin-right: 0%;
      }

      svg {
        fill: ${(props) => props.theme.textColor};
      }
    }
  }
`;

export const Bio = styled.div`
  flex: 0 50%;

  #bio-text {
    margin-bottom: 0;
    font-family: "Inter";
    font-size: 36px;
    font-weight: black;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.bioTitleText};
  }

  p {
    font-family: "JetBrains Mono";
    font-size: 18px;
    letter-spacing: 0.03em;
    line-height: 1.5;
    color: ${(props) => props.theme.textColor};

    span {
      color: ${(props) => props.theme.bioHighlightText};
    }
  }
`;

export const Portfolio = styled.div`
  padding: 3em 0;
  background: ${(props) => props.theme.evenSectionBg};
`;

export const PortfolioItem = styled.div`
  display: block;
  margin-bottom: 6em;

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 510px 1fr;
    grid-template-rows: unset;
    grid-row-gap: unset;
    margin-bottom: 4em;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details {
    font-family: "JetBrains Mono";

    h3 {
      margin-bottom: 0;
      border-bottom: 3px solid ${(props) => props.theme.portfolioHeaderBorder};
      padding-bottom: 4px;
      font-style: normal;
      font-weight: 500;

      font-size: 26px;
      line-height: 47px;
      letter-spacing: 0.02em;

      color: #e6af2e;

      @media screen and (min-width: 768px) {
        font-size: 36px;
        padding-bottom: 8px;
      }
    }

    p {
      color: ${(props) => props.theme.portfolioLocText};
      font-size: 18px;
      margin: 14px 0 18px 0;
      line-height: 1.5;

      @media screen and (min-width: 768px) {
        margin: 18px 0 18px 0;
        font-size: 21px;
      }

      a {
        color: ${(props) => props.theme.textColor};
        text-decoration: none;
      }
    }

    ul {
      line-height: 1.5em;
      font-size: 18px;
      margin: 0;
      padding: 0 0 0 15px;

      @media screen and (min-width: 768px) {
        padding: 15px 0 0 50px;
      }
    }

    ul li {
      color: ${(props) => props.theme.portfolioListText};
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const Projects = styled.div`
  padding: 3em 0 8em 0;
  background: ${(props) => props.theme.oddSectionBg};
`;

export const ProjectContainer = styled.div`
  display: block;

  @media screen and (min-width: 758px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 45px;
  }
`;

export const ProjectItem = styled.div`
  &:hover .project-image {
    transform: scale(1.1);
  }

  .project-image {
    width: 100%;
    height: 309px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;

    transition: all 0.2s ease-in-out;
  }

  h3 {
    margin-top: 0;
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 30px;
    letter-spacing: 0.02em;
    text-align: center;

    color: #e6af2e;
  }
`;

export const Skills = styled.div`
  padding: 3em 0 8em 0;
  background: ${(props) => props.theme.evenSectionBg};
`;

export const SkillsCont = styled.div`
  display: grid;

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 35px;
    grid-row-gap: 45px;
  }
`;

export const SkillItem = styled.div`
  h3 {
    color: ${(props) => props.theme.textSubHeader};
    font-size: 21px;
    padding-bottom: 15px;
    margin-bottom: 0;
    position: relative;

    svg {
      color: ${(props) => props.theme.textColor};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
    }

    border-bottom: 3px solid ${(props) => props.theme.portfolioHeaderBorder};
  }

  p {
    color: ${(props) => props.theme.textColor};
    line-height: 1.5;
    font-size: 18px;
    margin-top: 15px;
  }
`;
