import { Button, InputAdornment, Stack, TextField } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const TablesTopComponent = () =>{
  return(
    <Stack direction='row' marginTop={'40px'} style={{alignItems:'center',justifyContent:'space-between'}}>
      <TextField value="Search here..." variant="outlined" style={{backgroundColor:'#ffffff'}}
      InputProps={{
          startAdornment: (
              <InputAdornment position="start">
                  <SearchIcon style={{color:'#3b465c'}}/>
              </InputAdornment>
          ),
      }}
      />
      <Stack direction='row' style={{gap:'30px'}}>
        <Button variant="outlined" style={{height:'60px',borderRadius:'60px',border:'1px solid black',color:'#4e45b0'}} endIcon={<ArrowDropDownIcon />}>
          Newest
        </Button>
        <Button variant="contained" style={{backgroundColor:'#4e45b0',height:'60px',borderRadius:'60px'}} startIcon={<AddIcon />}>
          New Student
        </Button>
      </Stack>
    </Stack>
  )
}

export default TablesTopComponent;