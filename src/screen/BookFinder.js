import React, { useEffect, useState } from 'react'
import MainPage from './MainPage'
import ListPage from './ListPage'
import FavoriteModal from '../components/FavoriteModal'
import styled from '@emotion/styled'
import Background from '../book.jpg'
import { getFavBooks } from '../api/Axios'
import { CircularProgress } from '@mui/material'

const DivMod = styled.div`
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-image: url("${Background}");
    display: flex;
    justify-content: center;
    align-items: center;
`

const Loading = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(128 127 127 / 86%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;
`

export default function BookFinder() {
    const [listPage, setListPage] = useState(false)
    const [dataBooks, setDataBooks] = useState({})
    const [searchVal, setSearchVal] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [favBooks, setFavBooks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getData() {
            const fav = await getFavBooks();
            setFavBooks(fav)
        }
        getData();
    }, [])

    return (
        <>
            {
                loading && (<Loading>
                    <CircularProgress />
                </Loading>)
            }
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
                            setLoading={setLoading}
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
                            favBooks={favBooks}
                            setLoading={setLoading}
                        />
                }
                <FavoriteModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    favBooks={favBooks}
                    setFavBooks={setFavBooks}
                    setLoading={setLoading}
                />
            </DivMod>
        </>
    )
}
