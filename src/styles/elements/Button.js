import styled from 'styled-components'
import Button from '@material-ui/core/Button'


const StyledButton = styled(Button)`
  && {
    background: #ff6734;
    color: #fff;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size:1rem;
    text-transform:capitalize;
    &:hover {
      background: #fff;
      color:#ff6734;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);    }
  }
`


export default StyledButton;