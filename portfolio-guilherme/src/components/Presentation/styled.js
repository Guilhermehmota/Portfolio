import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #063447;
    box-sizing: border-box;
    padding: 60px 0;
    @media only screen and (max-width: 984px){
    }
`
export const DivProfile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media only screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const ImageContainer = styled.img`
    width: 250px;
    height: 305px;
    object-fit: cover;
    border-radius: 30px;
    @media only screen and (max-width: 984px){
        height: auto;
    }
    @media only screen and (max-width: 480px){
        width: 250px;
    }
`
export const DivPresentation = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin-left: 11%;
    @media only screen and (max-width: 767px){
        margin-top: 25px;
        margin-left: 0;
        width: 70%;
    }
    span {
        font-size: 42px;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.32px;
        color: #ffffff;
        &:first-of-type {
            font-weight: bold;
            margin-bottom: 20px;
        }
        &:nth-of-type(2) {
            font-size: 15px;
            font-weight: normal;
            letter-spacing: -0.16px;
            margin-bottom: 26px;
        }
        &:nth-of-type(3) {
            text-align: center;
            font-size: 18px;
            font-weight: normal;
            letter-spacing: -0.28px;
            margin-bottom: 26px;
        }
}
`
export const Button = styled.div`
    width: 140px;
    height: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #4eaccf;
    margin: 0 auto;
    text-align: center;
    padding-top: 5px;
    span {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
    }
`
export const Link = styled.a`
    text-decoration: none;
    color: #ffffff;
`
