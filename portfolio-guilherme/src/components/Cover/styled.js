import styled from "styled-components";
import trilha from '../../images/trilha.jpg'

export const Container = styled.div`
    width: 100%;
    height: 582px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
        rgba(0, 0, 0, 0.7), 
        rgba(0, 0, 0, 0.7)
    ), url(${trilha}) no-repeat scroll center;
    background-size: cover;

    @media only screen and (max-width: 767px) {
        height: auto;
    }
`
export const BackgroundContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 150px 0 150px 0;
`

export const DivMedias = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    > a {
        margin-bottom: 24px;
    }
`
export const AboutMe = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 20%;
    span {
            font-weight: bold;
            letter-spacing: -0.29px;
            color: #ffffff;
            &:first-of-type {
                white-space: nowrap;
                font-size: 45px;
                margin-bottom: 6px;
            }
            &:nth-of-type(2) {
                display: flex;
                flex-wrap: wrap;
                font-size: 45px;
                margin-bottom: 6px;
                white-space: nowrap;
                @media only screen and (max-width: 767px) {
                    white-space: normal;
                }
            }
            &:nth-of-type(3) {
                font-size: 25px;
                letter-spacing: -0.32px;
                white-space: nowrap;
                margin-bottom: 12px;
                @media only screen and (max-width: 767px) {
                    white-space: normal;
                }
            }
            &:nth-of-type(4) {
                font-size: 20px;
                font-weight: normal;
                letter-spacing: -0.22px;
                white-space: nowrap;
                @media only screen and (max-width: 767px) {
                    white-space: normal;
                }
            }
    }

    @media only screen and (max-width: 767px) {
        width:75%;
    }
    @media only screen and (max-width: 500px) {
        justify-content: right;
    }
`

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
`