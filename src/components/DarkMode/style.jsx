import styled from 'styled-components';

export const DarkModeButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: var(--color-primary);
    color: var(--color-white);
    position: absolute;
    top: 25px;
    right: 24px;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
        transition: all 0.4s ease-in-out;
    }
`;