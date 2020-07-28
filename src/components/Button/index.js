import styled from 'styled-components'

const Button = styled.button`
color: var(--black);
box-sizing: border-box;
background-color:var(--primary);
cursor: pointer;
padding-left:16px;
padding-right:16px;
height:48px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 5px;
text-decoration: none;
display: inline-block;
transition: opacity .3s;

@media (max-width: 800px) {
    height: 36px;
    
  }
    &:hover,
    &:focus {
opacity: .5;

    
}
`

export default Button