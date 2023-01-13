import { Box } from "@mui/material"
import HeaderComponent from "./HeaderComponent";
import TableComponent from "./TableComponent";

const MainBodyComponent = () =>{
  return(
    <Box padding={'40px'} style={{backgroundColor:'#f6f5fd',width:'1500px'}}>
      <HeaderComponent />
      <TableComponent />
    </Box>
  )
}

export default MainBodyComponent;