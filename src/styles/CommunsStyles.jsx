import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    text-align: center;
    margin-top: 21px;
    margin-left: 23px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 16px;
            color: var(--color-primary);
        }

        #infoIcon {
            margin-left: 15.19px;
            color: var(--color-green);
            height: 15.62px;
        }
    }
`;

export const TooltipText = styled.div`
  cursor: pointer;
`;
export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -20px;
  visibility: hidden;
  width: 180px;
  padding: 5px;
  border-radius: 4px;

  transition: all 1ms ease-in-out;

  &:before {
    left: 40px;
    top: -10px;
    position: absolute;
  }
`;
export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    background-color: var(--color-white);
    border: 1px solid var(--color-primary);
    z-index: 1;

    h5 {
        color: var(--color-primary);
    }
  }
`;