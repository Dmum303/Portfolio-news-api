import styled from 'styled-components';

export const StyledContainer = styled.div`
  .quick-card {
    font-family: ${(props) => props.theme.fonts.secondary};
    margin-bottom: 20px;
    .title {
      font-size: 22px;

      font-weight: 600;
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
