import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #4eaccf;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 65px;
`
export const Title = styled.div`
    width: 100%;
    padding-top: 46px;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -0.15px;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
`
export const Specialities = styled.div`
    width:60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    @media only screen and (max-width: 767px){
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
export const FrontEnd = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 767px) {
        margin-bottom: 20px;
        margin-right: 0;
        width: 80%;
    }
    span {
        font-size: 55px;
        font-weight: bold;
        letter-spacing: -0.32px;
        color: #ffffff;
        &:first-of-type {
            margin-bottom: 20px;
        }
        &:nth-of-type(2) {
            font-size: 16px;
            letter-spacing: -0.22px;
            margin-bottom: 20px;
        }
        }
`
export const BackEnd = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 767px) {
        width: 80%
    }
    span {
        font-size: 55px;
        font-weight: bold;
        letter-spacing: -0.32px;
        color: #ffffff;;
        &:first-of-type {
            margin-bottom: 20px;
        }
        &:nth-of-type(2) {
            font-size: 16px;
            letter-spacing: -0.22px;
            margin-bottom: 20px;
        }
    }
`