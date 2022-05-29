import React from 'react'
import SubSearchBar from '../components/SubSearchBar'
import TableList from '../components/TableList'
import styled from '@emotion/styled'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const ListPage = (props) => {
    return (
        <Container>
            <SubSearchBar
                {...props}
            />
            <TableList
                {...props}
            />
        </Container>
    )
}

export default ListPage
