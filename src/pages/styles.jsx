import styled from 'styled-components';

export const HomeContainer = styled.div`
    h1 {
        position: absolute;
        color: var(--color-primary);
        font-size: 28px;
        line-height: 34.13px;
        top: 124px;
        left: 28px;
    }

    #subtitle {
        position: absolute;
        color: var(--color-secundary);
        font-size: 14px;
        line-height: 17.07px;
        top: 166px;
        left: 28px;

    }

`;

export const FilterButton = styled.button`
    position: absolute;
    width: 100px;
    height: 40px;
    top: 135px;
    right: 24px;
    border-radius: 10px;
    cursor: pointer;
    background-color: var(--color-primary);
    color: var(--color-white);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    &:hover {
        opacity: 0.8;
        transition: all 0.4s ease-in-out;
    }

    #filterIcon {
        width: 13.32px;
        height: 11.99px;
        
    }

    h3 {
        font-size: 14px;
    }

`;

export const Dashboards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 137px;

    @media (max-width: 1325px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }
    
`;

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 142px;
    right: 135px;
    label {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 5px;

        input {
            cursor: pointer;
        }
        
        h5 {
            margin-right: 5px;
        }
    }

`;