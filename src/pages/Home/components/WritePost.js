import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Modal } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import { TextField } from '@mui/material'
import { Grid } from '@mui/material'
import { Rating } from '@mui/material'
import { api } from '../../../api/api'

const initialValues = {
    titulo: '',
    nomeLocal: '',
    enderecoLocal: '',
    texto: '',
    nota: null
}

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

function WritePost() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [post, setPost] = useState(initialValues)

    const [value, setValue] = React.useState(0);

    const id = localStorage.getItem('id')

    function onSubmit(e) {
        e.preventDefault()
        post.nota = value;

        api.post(`users/${id}/posts`, post).then(() => {
            handleClose()        
        })
    }

    function onChange(e) {
        const {name, value} = e.target
        setPost({...post, [name]:value})
    }



    return (
        <Button
        id='post'
        sx={{
          position: 'absolute', 
          width: 57,
          height: 27,
          left: 860,
          top: 56,
          background: '#FFFFFF',
          borderRadius: 5
        }}
        variant='contained'
        onClick={handleOpen}
        >
        <IconButton>
            <CreateIcon/>
        </IconButton>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: '#172668'}}>
                Novo post
                </Typography>
            </Grid>
            <Grid item xs={6} md={4}>
                <TextField id='title' placeholder='Título' value={post.titulo} name='titulo' onChange={onChange}/>
            </Grid>
            <Grid item xs={6} md={4}>
                <TextField id='local' placeholder='Nome do local' value={post.nomeLocal} name='nomeLocal' onChange={onChange}/> 
            </Grid>
            <Grid item xs={6} md={4}>
                <TextField id='end_local' placeholder='Endereço do local' value={post.enderecoLocal} name='enderecoLocal' onChange={onChange}/> 
            </Grid>
            <Grid item xs={6} md={4} >
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: '#172668'}}>
                    Avaliação
                </Typography>
            <Rating
                name='nota'
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            />
            </Grid>
            <Grid item xs={6} md={12}>
                <TextField id='text' placeholder='Texto' value={post.texto} name='texto' onChange={onChange} fullWidth/> 
            </Grid>
            <Button
                onClick={onSubmit}
                sx={{
                width: 100,
                height: 40,
                left: 900,
                top: 15,
                boxSizing: 'borderBox',
                borderRadius: 10,
                color: '#172668',
                }}
                variant='contained'
            >
            Publicar
            </Button>
        </Grid>
        </Box>
        </Modal>
        </Button>
    );
}

export default WritePost