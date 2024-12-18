// BreadcrumbComponent.jsx
import React from 'react';
import { Stack, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BreadcrumbComponent = ({ links }) => {
  const navigate = useNavigate();

  return (
    <Stack
      spacing={0.5}
      direction={'row'}
      display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }}
      alignItems={'center'}
    >
      {links?.map((link, index) => (
        <React.Fragment key={index}>
          <Button
            variant="text"
            onClick={() => link.path && navigate(link.path, { state: link.state })}
            sx={{
              bgcolor: 'white',
              ':hover': { bgcolor: 'white' },
              display: 'flex',
              alignItems: 'center',
              textTransform: 'capitalize',
              ...(link.disabled && { pointerEvents: 'none', color: 'black' })
            }}
            disabled={link.disabled}
          >
            <Typography
              sx={{
                fontSize: 14,
                color: link.disabled ? 'black' : 'gray',
                fontWeight: 600
              }}
            >
              {link.label}
            </Typography>
          </Button>
          {index < links?.length - 1 && <Typography>/</Typography>}
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default BreadcrumbComponent;