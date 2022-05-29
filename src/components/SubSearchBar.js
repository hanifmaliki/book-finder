import React from 'react'
import { TextField, Button } from '@mui/material'
import styled from '@emotion/styled'
import { ArrowBackIosNew } from '@mui/icons-material'
import { getBooks, getFavBooks } from '../api/Axios'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 23px;
    background-color: white;
    border-bottom: 1px solid #a5a5a5;
    border-left: 1px solid #a5a5a5;
    border-right: 1px solid #a5a5a5;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-bottom: 20px;
`

const BackButton = styled(ArrowBackIosNew)`
    font-size: 32px;
    background-color: #1976d2;
    padding: 10px;
    border-radius: 90px;
    margin-right: 30px;
    color: white;
    &:hover {
        color: yellow
    }
`

const ButtonMod = styled(Button)`
    margin-left: 10px;
    margin-right: 10px;
`

const TextFieldStyled = styled(TextField)`
    width: 40%;
`

const SubSearchBar = ({ setListPage, setDataBooks, searchVal, setSearchVal, setOpenModal, setFavBooks, setLoading }) => {
    const handleButtonClick = async () => {
        if (searchVal) {
            setLoading(true)
            const data = await getBooks(searchVal);
            setDataBooks(data)
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
        <Container>
            <BackButton onClick={() => { setListPage(false) }} />
            <TextFieldStyled
                id="outlined-basic"
                label="Search"
                variant="outlined"
                value={searchVal}
                onChange={(event) => { setSearchVal(event.target.value) }}
            />
            <ButtonMod variant="contained" onClick={() => { handleButtonClick() }}>Go</ButtonMod>
            <Button variant="contained" onClick={() => { handleButtonModal() }} color="success">My Favorite</Button>
        </Container>
    )
}

export default SubSearchBar
