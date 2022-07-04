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
    color: white;
    font-size: 40px;
  }

  .coming-soon-link {
    color: white;
    font-size: 20px;
    text-decoration: underline;
    margin-right: 10px;
    margin-top: 10px;
    cursor: pointer;
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

  .manifesto-title {
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 32px;
    margin-bottom: 40px;
  }

  .manifesto-subtitle {
    text-align: center;
    color: white;
    font-size: 28px;
  }

  .manifesto-email {
    text-align: center;
    font-weight: 300;
    color: white;
    font-size: 24px;
    margin-top: 40px;
    margin-bottom: 70px;
  }

  @media (max-width: 576px) {
    .logo-animation {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
    }

    .text-animation {
      padding: 15px;

      .coming-soon-text {
        font-size: 30px;
      }
    }

    .social-links {
      left: 50%;
      transform: translateX(-50%);
  
      img {
        height: 20px;
      }
    }
  }
`;

export default BannerArea;
