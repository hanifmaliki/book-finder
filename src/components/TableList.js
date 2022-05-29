import React from 'react'
import { Rating } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import styled from '@emotion/styled';
import { insertFavBooks } from '../api/Axios';

const Love = styled(Favorite)`
    &:hover{
        color: red;
    }
`

const TableMod = styled.table`
    text-align: center;
    border: 1px solid #a5a5a5;
    border-radius: 5px;
    padding: 11px 22px 11px 22px;
    background-color: white;
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

const TableList = (props) => {
    const listBooks = props.dataBooks.items;

    const handleClickLove = async (inputs) => {
        const data = await insertFavBooks({
            id: inputs.id ? inputs.id : '',
            title: inputs.volumeInfo.title ? inputs.volumeInfo.title : '',
            link: inputs.volumeInfo.imageLinks?.thumbnail ? inputs.volumeInfo.imageLinks.thumbnail : '',
            authors: inputs.volumeInfo.authors ? inputs.volumeInfo.authors : '',
            rating: inputs.volumeInfo.averageRating ? inputs.volumeInfo.averageRating : ''
        });
        alert(data.message)
    }

    return (
        <div style={{ padding: '20px 0 20px 0' }}>
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
                        listBooks.map((el, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>
                                        {
                                            el.volumeInfo?.imageLinks?.thumbnail ?
                                                <img src={el.volumeInfo.imageLinks.thumbnail} alt={el.volumeInfo.title} width='60'></img>
                                                :
                                                'None'
                                        }
                                    </td>
                                    <TdMod1>{el.volumeInfo.title}</TdMod1>
                                    <TdMod2>
                                        {
                                            el.volumeInfo.authors ?
                                                el.volumeInfo.authors.length < 1 ?
                                                    el.volumeInfo.authors[0]
                                                    :
                                                    el.volumeInfo.authors.join(' | ')
                                                :
                                                'Unknown'
                                        }
                                    </TdMod2>
                                    <td>
                                        <Rating
                                            name="read-only"
                                            value={el.volumeInfo.averageRating ? parseInt(el.volumeInfo.averageRating) : 0}
                                            readOnly
                                            precision={0.5}
                                        />
                                    </td>
                                    <TdMod3>
                                        <Love onClick={() => { handleClickLove(el) }} />
                                    </TdMod3>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </TableMod>
        </div>
    )
}

export default TableList
