import React from 'react';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material'
import { Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function Filter(){
    return (
        <Tooltip title='Filtrar' placement='top'>
        <Button
        sx={{
            position: 'absolute',
            width: 57,
            height: 27,
            left: 935,
            top: 56,

            background: '#FFFFFF',
            borderRadius: 5,
        }}
        variant='contained'
      > 
        <IconButton> <SearchIcon/> </IconButton>
      </Button>
      </Tooltip>
    )
}

export default Filter