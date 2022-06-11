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