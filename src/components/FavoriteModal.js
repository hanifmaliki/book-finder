import React from 'react'
import { Modal as IModal, Box } from '@mui/material'
import styled from '@emotion/styled'
import { Rating } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { deleteFavBooks } from '../api/Axios'

const Modal = styled(IModal)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const BoxModal = styled(Box)`
    background-color: white;
    width: auto;
    border: 6px solid #e97394;
    border-radius: 10px;
`

const Trash = styled(Delete)`
    &:hover{
        color: red;
    }
`

const TableMod = styled.table`
    text-align: center;
    padding: 11px 22px 11px 22px;
`

const ThMod = styled.th`
    padding-bottom: 15px;
`

const TdMod1 = styled.td`
    max-width: 400px;
    padding-right: 10px;
    padding-left: 10px;
`

const TdMod2 = styled.td`
    max-width: 300px;
    padding-right: 10px;
`

const TdMod3 = styled.td`
    padding-left: 20px;
`

const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
    padding-bottom: 13px;
    border-bottom: 4px solid #e97394;
    margin-bottom: 3px;

`

const FavoriteModal = ({ openModal, setOpenModal, favBooks }) => {
    const handleClickDelete = async (input) => {
        const data = await deleteFavBooks(input)
        alert(data.message);
    }

    return (
        <>
            <Modal
                open={openModal}
                onClose={() => { setOpenModal(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BoxModal>
                    <Title>My Favorite</Title>
                    <TableMod>
                        <thead>
                            <tr>
                                <ThMod>Image</ThMod>
                                <ThMod>Title</ThMod>
                                <ThMod>{'Author(s)'}</ThMod>
                                <ThMod>Rating</ThMod>
                                <ThMod style={{ paddingLeft: '20px' }}>Action</ThMod>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                favBooks.map((el, idx) => {
                                    let authors = ['Unknown']
                                    if (el.authors) {
                                        authors = JSON.parse(el.authors)
                                    }
                                    return (
                                        <tr key={idx}>
                                            <td>
                                                {
                                                    el.link ?
                                                        <img src={el.link} alt={el.title} width='60'></img>
                                                        :
                                                        'None'
                                                }
                                            </td>
                                            <TdMod1>{el.title}</TdMod1>
                                            <TdMod2>
                                                {
                                                    authors ?
                                                        authors.length < 1 ?
                                                            authors[0]
                                                            :
                                                            authors.join(' | ')
                                                        :
                                                        'Unknown'
                                                }
                                            </TdMod2>
                                            <td>
                                                <Rating
                                                    name="read-only"
                                                    value={el.rating ? parseInt(el.rating) : 0}
                                                    readOnly
                                                    precision={0.5}
                                                />
                                            </td>
                                            <TdMod3>
                                                <Trash onClick={() => { handleClickDelete(el.id) }} />
                                            </TdMod3>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </TableMod>
                </BoxModal>
            </Modal>
        </>
    )
}

export default FavoriteModal
