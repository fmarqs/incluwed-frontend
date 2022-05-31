import React from 'react';
import './style.css';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';


function UserCard(){
    return (
        <div className='userCard'>
               <Button sx={{
                    position: 'absolute',
                    width: 232,
                    height: 32,
                    top: 191,
                   
                    background: 'white',
                    fontWeight: 400,
                    fontSize: 15,
                    color: '#000000',
                    textAlign: 'center'
            }}> Home </Button>
            <Button sx={{
                    position: 'absolute',
                    width: 232,
                    height: 32,
                    top: 223,
                   
                    background: 'white',
                    fontWeight: 400,
                    fontSize: 15,
                    color: '#000000',
                    textAlign: 'center'
            }}> Perfil </Button>
            <Button sx={{
                    position: 'absolute',
                    width: 232,
                    height: 32,
                    top: 255,
                   
                    background: 'white',
                    fontWeight: 400,
                    fontSize: 15,
                    color: '#000000',
                    textAlign: 'center'
            }}> Editar perfil </Button>
            <Tooltip title='Sair' placement='top'>
            <Button sx={{
                    position: 'absolute',
                    width: 23,
                    height: 28,
                    left: 85,
                    top: 311,
                }}> <LogoutIcon sx={{ color: 'black', alignContent: 'center'}}/> </Button>
            </Tooltip>

        </div>
    )
}

export default UserCard;