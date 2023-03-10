import styled from 'styled-components';

export const StyledContainer = styled.div`
  .quick-card {
    font-family: ${(props) => props.theme.fonts.secondary};
    margin-bottom: 55px;
    .title {
      font-size: 22px;

      font-weight: 600;
    }

    .divider {
      margin-top: 13px;
      margin-bottom: 3px;
      height: 1px;
      width: 80%;
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.background.lightBlack};
    }

    .description {
      font-size: 15px;
      padding: 5px;
      font-weight: 300;
    }
    .link {
      text-align: center;
    }
  }
`;
