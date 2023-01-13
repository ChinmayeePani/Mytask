import { Button, Checkbox, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import TablesTopComponent from "./TablesTopComponent";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {tableList} from "../tablelist";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const TableComponent =() =>{
  return(
    <div>
      <TablesTopComponent />
      <div style={{backgroundColor:'#ffffff',padding:'20px',marginTop:'30px',borderRadius:'20px'}}>

        <TableContainer>
          <Table style={{ minWidth: '800px' }}>
              <TableHead>
                  <TableRow>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>ID</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Parent Name</TableCell>
                      <TableCell>City</TableCell>
                      <TableCell>Contact</TableCell>
                      <TableCell>Grade</TableCell>
                      <TableCell>Action</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {tableList.map((tableitem,index)=>{
                  return <TableRow>
                      <TableCell><Checkbox /></TableCell>
                      <TableCell style={{ color: "#3b465c", fontWeight: "bold" }}>
                        <Stack direction='row' style={{alignItems:'center',gap:'20px',fontWeight:'bold'}}>
                          <div style={{borderRadius:'50%',backgroundColor:'#c2baeb',width:'50px',height:'50px',display:'grid',placeItems:'center'}}/>
                          {tableitem.name}
                        </Stack>
                      </TableCell>
                      <TableCell style={{ color: "#3b465c",fontWeight:'bold' }}>#123456789</TableCell>
                      <TableCell style={{ color: "#cac8c8",fontSize:'12px' }}>March 25,2021</TableCell>
                      <TableCell style={{fontSize:'12px',color:'#3b465c'}}>{tableitem.parentname}</TableCell>
                      <TableCell style={{fontSize:'12px',color:'#3b465c'}}>Jakarta</TableCell>
                      <TableCell>
                        <Stack direction='row' style={{gap:'10px'}}>
                          <div style={{borderRadius:'50%',backgroundColor:'#c2baeb',width:'50px',height:'50px',display:'grid',placeItems:'center'}}>
                            <CallIcon/>
                          </div>
                          <div style={{borderRadius:'50%',backgroundColor:'#c2baeb',width:'50px',height:'50px',display:'grid',placeItems:'center'}}>
                            <MailOutlineIcon/>
                          </div>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Button variant="contained" style={{backgroundColor:'#c06c1d',height:'30px',borderRadius:'60px',color:'#ffffff'}}>
                          {tableitem.grade}
                        </Button>
                      </TableCell>
                      <TableCell><MoreHorizIcon/></TableCell>
                  </TableRow>
                })}
              </TableBody>
          </Table>
      </TableContainer>
      <Stack direction='row' alignitems={'center'} justifyContent='space-between' marginTop={'40px'}>
        <Typography>Showing 1-5 from 100 data</Typography>
        <Stack direction='row' alignItems={'center'} style={{gap:'20px'}}>
          <ArrowLeftIcon/>
          <div style={{borderRadius:'50%',backgroundColor:'#3b465c',width:'40px',height:'40px',display:'grid',placeItems:'center',color:'#ffffff'}}>1</div>
          <div style={{borderRadius:'50%',width:'30px',height:'30px',display:'grid',placeItems:'center',color:'#3b465c',border:'1px solid #3b465c'}}>2</div>
          <div style={{borderRadius:'50%',width:'30px',height:'30px',display:'grid',placeItems:'center',color:'#3b465c',border:'1px solid #3b465c'}}>3</div>
          <ArrowRightIcon/>
        </Stack>
      </Stack>
      </div>
    </div>
  )
}

export default TableComponent;