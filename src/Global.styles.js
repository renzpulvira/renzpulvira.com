import styled from "styled-components";

export const RootCont = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media scren and (min-width: 768px) {
    padding: 0;
  }
`;

export const lightTheme = {
  navColor: "#e7e7e7",
  navTextColor: "#222",
  textColor: "#222",
  oddSectionBg: "#fff",
  evenSectionBg: "#F8F8F8",
  portfolioListText: "#ddd",
  portfolioLocText: "#B7B1A3",
  portfolioHeaderBorder: "#333",
};

export const darkTheme = {
  navColor: "#000",
  navTextColor: "#fff",
  oddSectionBg: "#0F1A20",
  evenSectionBg: "#080E11",
  textColor: "#fff",
  borderBottomProfile: "#35354E",
  bioTitleText: "#EDCBCB",
  bioHighlightText: "#E6AF2E",
  portfolioListText: "#ddd",
  portfolioLocText: "#B7B1A3",
  portfolioHeaderBorder: "#0F1A20",
  textSubHeader: "#e6af2e",
};

export const SectionCont = styled.div`
  display: block;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0;
  }
`;

export const SubHeader = styled.h2`
  display: block;
  width: 100%;
  font-family: Inter;
  font-style: black;
  font-weight: 900;
  font-size: 36px;
  line-height: 44px;
  text-align: center;

  letter-spacing: 0.24em;

  color: #edcbcb;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
