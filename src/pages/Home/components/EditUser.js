import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { Modal } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Grid } from '@mui/material'
import { api } from '../../../api/api'
import Alert from '@mui/material/Alert'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: '10px 10px 10px 10px',
  };


function EditUser() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [user, setUser] = useState({});

    const id = localStorage.getItem('id');

    useEffect(() => {
        api.get(`users/${id}`).then(({ data }) => {
            setUser(data)
        })
    }, [])

    function onChange(e) {
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }

    function onSubmit(e) {
        e.preventDefault()

        api.put(`users/${id}`, user).then(() => {
            handleClose()        
        })
        .catch(() => {
            <Alert severity="error">This is an error alert — check it out!</Alert>
        })
    }

    const maskString = (str, mask, n) => {
        return ('' + str).slice(0, -n)
            .replace(/./g, mask)
            + ('' + str).slice(-n);
    }

    
    return (

        <Button
        sx={{
            position: 'absolute',
            background: 'white',
            fontWeight: 400,
            fontSize: 15,
            color: '#000000',
            textAlign: 'center'
        }}
        id='edit-user'
        onClick={handleOpen}
        >
        Editar perfil
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style} >
        <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
                <Typography id="modal-modal-title" variant="h8" component="h2" sx={{color: '#172668'}}>
                Editar usuário
                </Typography>
            </Grid>
            <Grid item xs={6} md={12}>
                <Typography id="modal-modal-title" variant="body2" component="h2" sx={{color: '#172668'}}>
                Informações básicas
                </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField id='nome' name='nome' size='small' placeholder="Nome" value={user?.nome} onChange={onChange}/>
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField id='sobrenome' name='sobrenome' size='small' placeholder='Sobrenome' value={user?.sobrenome} onChange={onChange}/> 
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField id='email' name='email' size='small' placeholder='Email' value={user?.email} onChange={onChange}/>
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField id='cpf' name='cpf' size='small' placeholder='CPF' value={maskString(user?.cpf, '*', 5)} onChange={onChange}/> 
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField id='nascimento' name='nascimento' size='small' placeholder='Nascimento' value={user?.nascimento} onChange={onChange}/> 
            </Grid>
            <Grid item xs={6} md={12}>
                <Typography id="modal-modal-title" variant="body2" component="h2" sx={{color: '#172668'}}>
                Telefone
                </Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={1}>
                <TextField id='ddd' size='small' name='ddd' placeholder='DDD' value={user?.telefone?.ddd} onChange={onChange}/>
            </Grid>
            <Grid item xs={6} md={6}>
                <TextField id='telefone' name='numero' size='small' placeholder='Telefone' value={user?.telefone?.numero} onChange={onChange}/> 
            </Grid>
            <Grid item xs={6} md={12}>
                <Typography id="modal-modal-title" variant="body2" component="h2" sx={{color: '#172668'}}>
                Endereço
                </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
                <TextField id='rua' name='rua' size='small' placeholder='Rua' value={user?.endereco?.rua} onChange={onChange}/>
            </Grid>
            <Grid item xs={6} md={4}>
                <TextField id='numero' name='numero' size='small' placeholder='Número' value={user?.endereco?.numero} onChange={onChange}/> 
            </Grid>
            <Grid item xs={6} md={4}>
                <TextField id='bairro' name='bairro' size='small' placeholder='Bairro' value={user?.endereco?.bairro} onChange={onChange}/>
            </Grid>
            <Grid item xs={6} md={4}>
                <TextField id='cidade' name='cidade' size='small' placeholder='Cidade' value={user?.endereco?.cidade} onChange={onChange}/> 
            </Grid>
            <Grid item xs={6} md={4}>
                <TextField id='estado' size='small' placeholder='Estado' value={user?.endereco?.estado} onChange={onChange}/>
            </Grid>
            <Grid item xs={6} md={6}>
            <Button
                sx={{
                width: 100,
                height: 40,
                left: 800,
                boxSizing: 'borderBox',
                borderRadius: 10,
                color: '#172668',
                }}
                variant='outlined'
                onClick={handleOpen}
            >
            Cancelar
            </Button>
            </Grid>
            <Grid item xs={6} md={6}>
            <Button
                id='salvar'
                onClick={onSubmit}
                sx={{
                left: 400,
                boxSizing: 'borderBox',
                borderRadius: 10,
                color: '#172668',
                }}
                variant='contained'
            >
            Salvar
            </Button>
            </Grid>
        </Grid>
        </Box>
        </Modal>
        </Button>
    );
}

export default EditUser