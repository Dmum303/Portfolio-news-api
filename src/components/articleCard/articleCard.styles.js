import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0px 15px 15px 15px;
  .article-card {
    display: flex;
    flex-direction: column;
    ${'' /* border: solid 1px black; */}
    max-width: 400px;
    align-items: center;

    img {
      max-width: 400px;
    }

    .title {
      padding: 5px 10px 0px 10px;
      font-size: 25px;
      font-family: ${(props) => props.theme.fonts.secondary};
      text-align: center;
      width: 95%;
    }

    .divider {
      margin-top: 13px;
      margin-bottom: 3px;
      height: 1px;
      width: 45%;
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.background.lightBlack};
    }

    .description {
      font-size: 15px;
      font-family: ${(props) => props.theme.fonts.secondary};
      text-align: center;
      padding: 12px;
      font-weight: 300;
      color: #000000;
    }

    .data-section {
      display: flex;
      margin-top: 13px;
      margin-bottom: 30px;
      justify-content: space-around;
      width: 70%;

      span {
        padding-left: 5px;
        font-size: 13px;
      }

      .vertical-centered {
        display: flex;
        align-items: center;
      }

      .more {
        text-decoration: underline;
      }
    }
  }
`;
