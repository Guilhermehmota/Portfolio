import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #292929;
    justify-content: center;
    align-items: center;
`
export const Title = styled.div`
    width: 128px;
    height: 30px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -0.15px;
    margin: 0 auto;
    text-align: center;
    color: #ffffff;
    padding: 46px 0 29px 0;
`
export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 29px 0 68px 0;
    height: auto;
    @media only screen and (max-width: 767px ){
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 20px;
        justify-items: center;
    }
`
export const EducationCard = styled.div`
    padding: 0 2px;
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 250px;
    border-radius: 8px;
    background-color: #ffffff;
    margin-right: 6px;
    @media only screen and (max-width: 767px ){
        width: 70%;
        height: auto;
    }
    span {
            font-size: 21px;
            font-weight: bold;
            letter-spacing: -0.28px;
            color: #292929;
            &:first-of-type {
                margin-bottom: 12px;
            }
            &:nth-of-type(2), &:nth-of-type(3) {
                font-size: 18px;
                    letter-spacing: -0.16px;
                    margin-bottom: 12px;
            } 
            &:nth-of-type(4){
                font-size: 17px;  
            }
        }
`