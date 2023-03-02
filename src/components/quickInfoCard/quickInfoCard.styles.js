import styled from 'styled-components';

export const StyledContainer = styled.div`
  .quick-card {
    background-color: lightred;
    .title {
      font-size: 20px;
      font-family: ${(props) => props.theme.fonts.secondary};
    }
  }
`;
