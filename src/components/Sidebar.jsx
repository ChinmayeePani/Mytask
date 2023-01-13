import { Avatar, Box, Stack, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SidebarList from "./SidebarList";

const Sidebar = () =>{
  return(
    <Box style={{backgroundColor:'#4e44b5',width:'280px',paddingLeft:'40px',paddingTop:'40px',height:'1000px'}}>

      <Stack direction='row' style={{alignItems:'center', gap:'15px'}}>
        <Avatar variant='square' style={{ backgroundColor: '#fa7956',borderRadius:'10px',fontSize:'30px',fontWeight:'bold'}}>A</Avatar>
        <Typography variant='h4' color={'#ffffff'} fontWeight={'bold'}>Akademi</Typography>
      </Stack>

      <SidebarList />
      
      <Typography marginTop={'90px'} style={{color:'#ffffff',fontSize:'14px',fontWeight:'bold'}}>Akademi-School Admission Dashboard</Typography>
      <Stack direction='row' marginTop={'15px'} style={{alignItems:'center',gap:'5px'}}>
        <Typography style={{fontSize:'14px',color:'#e0dcdc'}}>Made with </Typography>
        <FavoriteIcon style={{fontSize:'15px',color:'red'}}/>
        <Typography style={{fontSize:'14px',color:'#e0dcdc'}}>by An Vu</Typography>
      </Stack>
      
    </Box>
  )
}

export default Sidebar;