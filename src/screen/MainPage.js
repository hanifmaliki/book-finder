import React from 'react'
import MainSearchBar from '../components/MainSearchBar'
import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

const Container2 = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 40px;
    padding: 35px 0 50px 0;
    border: 4px solid #898989;
`

const Title = styled.div`
    font-size: 60px;
    color: #57a68f;
    margin-bottom: 35px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    &:hover{
        color: blue
    }
`

const MainPage = (props) => {
    return (
        <Container>
            <Container2>
                <Title>
                    BOOKS FINDER
                </Title>
                <MainSearchBar
                    {...props}
                />
            </Container2>
        </Container>
    )
}

export default MainPage
