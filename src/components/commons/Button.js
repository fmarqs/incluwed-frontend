import React from 'react'
import { Button} from '@mui/material'

const CommonButton = ({children, color, variant, sx}) => {
    return (
        <Button 
            color={color}
            variant={variant}
            sx={sx}
            >
            {children}
        </Button>
    )
}

export default CommonButton