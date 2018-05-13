import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
`
  
const Todo = ({onClick,completed,contents}) => (
 <Styledli
   onClick={onClick}
   style = {{
 textDecoration: completed ? 'line-through':'none'
   }}
 >
   {contents}
    </Styledli>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed:PropTypes.bool.isRequired,
  contents:PropTypes.string.isRequired,
  reverse: PropTypes.bool
}


export default Todo
