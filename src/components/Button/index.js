import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled(Link)`
  color: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding-left:16px;
  padding-right:16px;
  height:36px;
  line-height:36px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  outline: none;
  border-radius: 4px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  background: var(--white);

 &:hover,
&:focus {
  opacity: .5;
}

@media (max-width: 800px) {
  a.ButtonLink {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
}

`

export default Button