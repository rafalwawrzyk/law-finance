import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'


const GridContainer = styled(Grid)`
    height: 400px; 
    padding: 0;
    position:relative !important;
    @media (max-width: 600px) {
        height:800px;
        :nth-child(2){
            background-color:green;
        }
    }
`



export default GridContainer;