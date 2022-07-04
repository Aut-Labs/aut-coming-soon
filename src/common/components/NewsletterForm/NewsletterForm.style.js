import styled from "styled-components";

const NewsletterFormWrapper = styled.form`
  .form-fields {
    display: flex;
    grid-gap: 12px;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    border: none;
    width: 100%;
    input {
      font-size: 22px;
      height: 50px;
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 100%;

    button {
      width: 100%;
      height: 55px;
      font-size: 22px;
    }
  }


  @media (max-width: 576px) {
    .submit-btn {
      button {
        width: 100%;
        min-width: unset;
        height: 50px;
        min-height: 50px;
        font-size: 22px;
      }
    }

    .form-field {
      input {
        font-size: 14px;
        height: 40px;
      }
    }
  }
`;

export default NewsletterFormWrapper;
