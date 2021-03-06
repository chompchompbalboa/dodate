//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components/native'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TodosHeader = ({
  text
}: ITodosHeader) => {

  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
interface ITodosHeader {
  text: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.View`
  padding: 7px;
  margin-bottom: 5px;
  background-color: rgb(250, 250, 250);
`

const Text = styled.Text`
  font-size: 23px;
  font-family: OpenSans_700Bold;
`

export default TodosHeader