import React, { useEffect, useState, useContext } from 'react';
import './style.css';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';
import { Link } from "react-router-dom";
import EditUser from '../../pages/Home/components/EditUser';
import { api } from '../../api/api';
import { AuthContext } from '../../services/auth';
import { Typography } from '@mui/material';

function UserCard(){
    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
      logout();
    }
    const [user, setUser] = useState({});

    const id = localStorage.getItem('id');

    useEffect(() => {
        api.get(`users/${id}`).then(({ data }) => {
            setUser(data)
        })
    }, [user])

    return (
        <div className='userCard'>
            <div className='headerUsername'>
            <Typography variant='body1' mt={0} >
            {user?.nome} {user?.sobrenome}
            </Typography>
            <Typography variant='subtitle2' mt={0} >
            {user?.endereco?.cidade}, {user?.endereco?.estado}
            </Typography>
            </div>
            <Link to="/home" >
               <Button 
                sx={{
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
            </Link>
            <Link to="/profile" >
            <Button 
            id='profile-user'
            sx={{
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
            </Link>
            <Button sx={{
                    width: 232,
                    height: 32,
                    top: 255
            }}> <EditUser/> </Button>
            <Link to="/" >
            <Tooltip title='Sair' placement='top'>
            <Button 
            id='logout'
            onClick={handleLogout}
            sx={{
                    position: 'absolute',
                    width: 23,
                    height: 28,
                    left: 85,
                    top: 311,
                }}> <LogoutIcon sx={{ color: 'black', alignContent: 'center'}}/> </Button>
            </Tooltip>
            </Link>

        </div>
    )
}

export default UserCard;