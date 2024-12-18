import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { Box } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Box
        height={'100%'}
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
      // overflow={'hidden'}
      >
        <Box height={56}>
          <Header />
        </Box>
        <Box component={'main'} width={'100%'} flexGrow={1}>
          <Outlet />
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  )
}

export default Layout


