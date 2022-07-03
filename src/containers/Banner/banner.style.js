import styled from "styled-components";
const BannerArea = styled.section`
  background-color: #000;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-animation {
    position: absolute;
    top: 100px;
    right: 70px;
  }

  .coming-soon-text {
    color: white; 
    font-size: 40px;
  }

  .text-animation {
    position: absolute;
    width: 100%;
    max-width: 636px;
    text-align: right;
  }

  .coming-soon-text {
    text-align: center;
    font-weight: bold;
    letter-spacing: 8px;
  }

  .coming-soon-link {
    color: white;
    font-size: 20px;
    text-decoration: underline;
    margin-right: 10px;
    margin-top: 10px;
  }

  .social-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    grid-gap: 2rem;
    position: absolute;
    bottom: 45px;
    right: 40px;

    img {
      height: 30px;
    }
  }
`;

export default BannerArea;
