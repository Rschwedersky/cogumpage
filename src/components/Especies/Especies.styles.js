import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: 100px;
    font-size: 4.7vw;
    text-align: center;
`;

export const CardGrid = styled.ul`
    font-size: 20px;
    padding: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 10px;  
`;
