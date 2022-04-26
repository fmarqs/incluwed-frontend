import React from 'react'
import { Button } from '@mui/material'
import { Tooltip } from '@mui/material' 
import { Modal } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import { TextField } from '@mui/material'
import { Grid } from '@mui/material'
import { Rating } from '@mui/material'

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

    const [value, setValue] = React.useState(2);

    return (
        <Tooltip title='Adicionar publicação' placement='top'>
        <Button
        id='post'
        sx={{
          width: 10,
          height: 40,
          left: 550,
          top: -10,
          background: '#3498DB',
          boxSizing: 'borderBox',
          borderRadius: 10
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
                <TextField id='title' placeholder='Título'/>
            </Grid>
            <Grid item xs={6} md={4}>
                <TextField id='local' placeholder='Local'/> 
            </Grid>
            <Grid item xs={6} md={4} >
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: '#172668'}}>
                    Avaliação
                </Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            />
            </Grid>
            <Grid item xs={6} md={12}>
                <TextField id='text' placeholder='Texto' fullWidth/> 
            </Grid>
            <Button
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
        </Tooltip>
    );
}

export default WritePost