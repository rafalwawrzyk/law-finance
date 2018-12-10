// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// export const Food = () => (
//   <div>
//     Favorite Food: <FontAwesomeIcon icon="angle-double-down" />
//   </div>
// )


import styled from 'styled-components';



const ArrowIcon = styled.div`
    position:relative;
    top:80%;
    left:50%;
    transform:translateX(-50%);
    background-color:#FFFFF7;
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover {
        background: #ff6734;
        color:#fff;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);  
        cursor:pointer;  
    }
    }
   
`

export default ArrowIcon;