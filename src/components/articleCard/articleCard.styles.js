import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  .article-card {
    border: solid 1px black;
    max-width: 400px;
    img {
      max-width: 400px;
    }

    .title {
      background-color: lightcoral;
      font-size: 25px;
      font-family: ${(props) => props.theme.fonts.secondary};
    }
  }
`;
