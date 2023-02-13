import styled, { css } from "styled-components";

export const CustomApp = styled.div`
    width: ${({ theme }) => theme.dimensions.generalD};
    height: ${({ theme }) => theme.dimensions.generalD};
    display: ${({ theme }) => theme.display.type1};
    margin: 0;
    flex-flow: row wrap;
    justify-content:${({ theme }) => theme.dimensions.justify3};
    align-items: ${({ theme }) => theme.dimensions.justify1};
`;

export const CustomCardGenre = styled.div<{ $isGenre: boolean }>`
    width: ${({ theme }) => theme.dimensions.cardD};
    height: ${({ theme }) => theme.dimensions.generalD};
    display: ${({ theme }) => theme.display.type1};
    margin: 1rem 2rem;
    flex-flow: column;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.cardBg};
    text-align: center;
    justify-content:${({ theme }) => theme.dimensions.justify1};
    align-items: ${({ theme }) => theme.dimensions.justify1};

    h4{
        padding: .75rem;
        background-color: black;
        color: ${({ theme }) => theme.colors.cardTitle};
    }

    ${({ $isGenre }) =>
        $isGenre && css`
        width: 75%;
        height: 29rem;
        align-items: center;
        padding: .75rem;
        img{
           width: 60%;
        }
        h4{
           width: ${({ theme }) => theme.dimensions.generalD};
        }
  `
    }

    @media (min-width: 764px){
        width: ${({ theme }) => theme.dimensions.cardD2};
        height: 20rem;
        justify-content:  ${({ theme }) => theme.display.justify2};
        display: ${({ theme }) => theme.display.justify1};
        h4{
          font-size: 1.1rem;
        }
        font-size: 1.2rem;
        ${({ $isGenre }) =>
        $isGenre && css`
        width: 35%;
        height: 40rem;
        h4{
           padding: 2rem 0;

           font-size: 1.5rem;
        }
  `

    }

    @media (min-width: 1024px){
        width: ${({ theme }) => theme.dimensions.cardD3};
        height: 20rem;
        justify-content:  ${({ theme }) => theme.display.justify2};
        display: ${({ theme }) => theme.display.justify1};
        h4{
          font-size: 1.1rem;
        }
        font-size: 1.2rem;

        ${({ $isGenre }) =>
        $isGenre && css`
        width: 18%;
        height: 40rem;
        align-items: center;
        justify-content:${({ theme }) => theme.dimensions.justify4};
        padding: .75rem;
        img{
           width: 60%;
        }
        h4{
           width: ${({ theme }) => theme.dimensions.generalD};
        }
  `
    }
    }
`;

export const CustomButton = styled.button`
    background-color: transparent;
    border: none;
    padding: .75rem;
    border-radius: 5%;
    &:hover{
        cursor: pointer;
        background-color: black;
        color: ${({ theme }) => theme.colors.cardTitle};
        transition: all .75s ease-in-out;
    }
`;