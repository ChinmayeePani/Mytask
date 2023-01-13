import { Stack, Typography } from "@mui/material"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const HeaderComponent = () =>{
  return(
    <Stack direction='row' style={{alignItems:'center',justifyContent:'space-between'}}>
      <Typography variant='h4' color={'#3b465c'} fontWeight={'bold'}>Students</Typography>
      <Stack direction='row' style={{gap:'30px'}}>
        <div style={{borderRadius:'50%',backgroundColor:'#ffffff',width:'50px',height:'50px',display:'grid',placeItems:'center'}}>
          <NotificationsActiveIcon/>
        </div>
        <div style={{borderRadius:'50%',backgroundColor:'#ffffff',width:'50px',height:'50px',display:'grid',placeItems:'center'}}>
          <SettingsSuggestIcon/>
        </div>
        <div>
          <Typography color={'#272646'} fontWeight={'bold'}>Nabila A.</Typography>
          <Typography color={'#b4afaf'}>Admin</Typography>
        </div>
        <div style={{borderRadius:'50%',backgroundColor:'#c2baeb',width:'50px',height:'50px',display:'grid',placeItems:'center'}}/>
      </Stack>
    </Stack>
  )
}

export default HeaderComponent;