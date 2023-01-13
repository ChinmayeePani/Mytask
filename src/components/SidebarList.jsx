import { Stack, Typography } from "@mui/material";
import {menulist} from "../menulist";

const SidebarList = () =>{
  return(
      <Stack spacing={4} style={{marginTop:'50px',marginLeft:'30px'}}>
          {menulist.map((menuItem,index)=>{
            return <Stack key={index} direction='row' style={{alignItems:'center',gap:'20px'}}>
                      {menuItem.icon}
                      <Typography style={{fontSize:'18px',color:'#ffffff'}}>{menuItem.title}</Typography>
                   </Stack>
          })}
      </Stack>
  )
}

export default SidebarList;