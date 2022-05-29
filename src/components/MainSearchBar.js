import React from 'react'
import { TextField, Button } from '@mui/material'
import CustomCSS from './CustomCSS'
import styled from '@emotion/styled'
import { getBooks, getFavBooks } from '../api/Axios'

const Container = styled.div`
    width: 100%;
`

const TextFieldStyled = styled(TextField)`
    width: 45%;
`

const ButtonMod = styled(Button)`
    margin-left: 10px;
    margin-right: 10px;
`

const MainSearchBar = ({ setListPage, setDataBooks, searchVal, setSearchVal, setOpenModal, setFavBooks }) => {
    const handleButtonClick = async () => {
        if (searchVal) {
            const data = await getBooks(searchVal);
            setDataBooks(data)
            setListPage(true)
        }
        else {
            alert('Isi dulu bro')
        }
    }

    const handleButtonModal = async () => {
        setOpenModal(true)
        const fav = await getFavBooks();
        setFavBooks(fav)
    }

    return (
        <Container style={CustomCSS.center}>
            <TextFieldStyled
                id="outlined-basic"
                label="Search"
                variant="outlined"
                value={searchVal}
                onChange={(event) => { setSearchVal(event.target.value) }}
            />
            <ButtonMod
                variant="contained"
                onClick={() => { handleButtonClick() }}
            >Go
            </ButtonMod>
            <Button
                variant="contained"
                onClick={() => { handleButtonModal() }}
                color="success"
            >My Favorite
            </Button>
        </Container>
    )
}

export default MainSearchBar
