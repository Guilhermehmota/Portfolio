import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Title = styled.div`
    max-width: 100%;
    height: 30px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #4eaccf;
    padding: 43px 0 42px 0;
    white-space: nowrap;
    @media only screen and (max-width: 480px ){
        font-size: 31px;
    }
`
export const DivProject = styled.div`
    width: 70%;
    padding: 30px 0 0 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`
export const ImageContainer = styled.img`
    width: 45%;
    height: 216px;
    object-fit: contain;
        @media only screen and (max-width: 767px) {
            display: inline;
            width: 70%;
        }
    
    &:nth-of-type(2) {
        @media only screen and (max-width: 767px){
            display: none;
        }
    }
`
export const ImageStyled = styled(ImageContainer)`
    display: none;
    @media only screen and (max-width: 767px){
        display: inline
    }
`

export const ProjectDescription = styled.div`
    display: flex;
    width: 45%;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 767px){
        width: 70%;
        align-items: center;
    }
    span {
        font-size: 42px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.25px;
        color: #063447;
        &:nth-of-type(2) {
            font-size: 21px;
            font-weight: normal;
            letter-spacing: -0.28px;
            margin-bottom: 23px;
            @media only screen and (max-width: 480px ){
                font-size: 27px;
            }
        }
        &:nth-of-type(3) {
            font-size: 12px;
            font-weight: normal;
            letter-spacing: -0.28px;
            margin-bottom: 23px;
            @media only screen and (max-width: 480px ){
                font-size: 18px;
            }
        }
    }
    div {
        width: 140px;
        height: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        background-color: #4eaccf;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        text-align: center;
        color: white;
        box-sizing: border-box;
        padding: 8px 0;
        margin-bottom: 5px;
    }
`
export const DivButton = styled.div`
    padding: 88px 0 71px 0;
    @media only screen and (max-width: 767px) {
        padding-top: 60x; 
    }
    > div {
        width: 150px;
        height: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        background-color: #063447;
        font-size: 14px;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.2px;
        margin: 0 auto;
        text-align: center;
        color: white;
        padding-top: 10px;
    }
`
export const Link = styled.a`
    text-decoration: none;
    color: white;
`