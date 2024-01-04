import styled from 'styled-components';

export const NavbarContainerStyled = styled.div`
    width: 90%;
    height: 150px;
    margin: 20px auto;
    background-color: #111111;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

export const LogoStyled = styled.img`
    width: 150px;
`;

export const LinksContainerStyled = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;

export const LinkContainerStyled = styled.div`
    color: white;

    :hover {
        opacity: .8;
    }
`;