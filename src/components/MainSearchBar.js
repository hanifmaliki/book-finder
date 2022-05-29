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

const MainSearchBar = ({ setListPage, setDataBooks, searchVal, setSearchVal, setOpenModal, setFavBooks, setLoading }) => {
    const handleButtonClick = async () => {
        if (searchVal) {
            setLoading(true)
            const data = await getBooks(searchVal);
            setDataBooks(data)
            setListPage(true)
            setLoading(false)
        }
        else {
            alert('Isi dulu bro')
        }
    }

    const handleButtonModal = async () => {
        setLoading(true)
        setOpenModal(true)
        const fav = await getFavBooks();
        setFavBooks(fav)
        setLoading(false)
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
