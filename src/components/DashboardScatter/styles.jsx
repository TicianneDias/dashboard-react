import styled from 'styled-components';

export const DashScatterContainer = styled.div`
    width: 630px;
    height: 360px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
    margin-bottom: 10px;

    @media (max-width: 720px) {
        width: auto;
        height: auto;
    }
`;