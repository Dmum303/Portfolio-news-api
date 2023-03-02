import styled from 'styled-components';

export const StyledContainer = styled.div`
  .article-card {
    display: flex;
    flex-direction: column;
    border: solid 1px black;
    max-width: 400px;
    align-items: center;

    img {
      max-width: 400px;
    }

    .title {
      background-color: lightcoral;
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
      // background-color: lightcoral;
      // width: 100%;
      font-size: 15px;
      font-family: ${(props) => props.theme.fonts.secondary};
      text-align: center;
      padding: 12px;
      font-weight: 300;
      color: #000000;
    }

    .data-section {
      display: flex;
    }
  }
`;
