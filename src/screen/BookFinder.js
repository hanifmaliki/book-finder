import React, { useEffect, useState } from 'react'
import MainPage from './MainPage'
import ListPage from './ListPage'
import FavoriteModal from '../components/FavoriteModal'
import styled from '@emotion/styled'
import Background from '../book.jpg'
import { getFavBooks } from '../api/Axios'

const DivMod = styled.div`
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-image: url("${Background}");
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function BookFinder() {
    const [listPage, setListPage] = useState(false)
    const [dataBooks, setDataBooks] = useState({})
    const [searchVal, setSearchVal] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [favBooks, setFavBooks] = useState([])

    useEffect(() => {
        async function getData() {
            const fav = await getFavBooks();
            setFavBooks(fav)
        }
        getData();
    }, [])

    return (
        <DivMod>
            {
                !listPage ?
                    <MainPage
                        setListPage={setListPage}
                        setDataBooks={setDataBooks}
                        setSearchVal={setSearchVal}
                        searchVal={searchVal}
                        setOpenModal={setOpenModal}
                        setFavBooks={setFavBooks}
                    />
                    :
                    <ListPage
                        setListPage={setListPage}
                        setDataBooks={setDataBooks}
                        setSearchVal={setSearchVal}
                        dataBooks={dataBooks}
                        searchVal={searchVal}
                        setOpenModal={setOpenModal}
                        setFavBooks={setFavBooks}
                    />
            }
            <FavoriteModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                favBooks={favBooks}
                setFavBooks={setFavBooks}
            />
        </DivMod>
    )
}
