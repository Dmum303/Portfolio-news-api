import styled from 'styled-components';
import { COLORS, FONTS } from '../../theme';

export const StyleContainer = styled.div`
  .spotlight-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;

    .title {
      font-size: 130px;
      font-family: none;
    }

    .description {
      font-size: 20px;
      font-family: ${FONTS.primary};
      text-transform: uppercase;
    }

    .dividers-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon-container {
        // display: flex;
        // align-items: center;
        margin: 0 3px;
      }

      .divider {
        height: 2px;
        background-color: ${COLORS.background.lightBlack};
        width: 35%;
      }
    }
  }
`;
