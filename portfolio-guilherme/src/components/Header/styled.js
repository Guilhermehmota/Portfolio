import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 25px;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 480px) {
        justify-content: center;
    }
    > p {
        margin-left: 20px;
        font-size: 21px;
        font-weight: bold;
        letter-spacing: -0.28px;
        color: #ffffff;
        &:first-of-type {
            @media only screen and (max-width: 480px) {
                display: none;
            }
        }
    }
`
export const DivNav = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    > p {
            height: 19px;
            font-family: Montserrat;
            font-size: 20px;
            letter-spacing: -0.20px;
            text-align: center;
            color: #4eaccf;
            margin-left: 32px;
            white-space: nowrap;
    }
`
export const Link = styled.a`
    text-decoration: none;
    color: #ffffff;
`