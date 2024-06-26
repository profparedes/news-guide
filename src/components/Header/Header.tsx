import { memo, useState } from 'react'
import { HeaderContainer, MobileMenu } from './style'
import { IoSearchSharp } from 'react-icons/io5'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaMicrophone,
} from 'react-icons/fa'
import { HiOutlineMenu } from 'react-icons/hi'

import EzoomLogo from 'assets/ezoom-logo.png'
import { Box, Drawer, Link } from '@mui/material'
import useWindowSize from 'hooks/useWindowSize'

const Header: React.FC = () => {
  const { gteMd } = useWindowSize()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header>
        <HeaderContainer
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <img src={EzoomLogo} alt="logo" />
          <Box display="flex" alignItems="center" gap={3}>
            {gteMd && (
              <Box display="flex" gap={3} color="#fff">
                <Link href="#">About</Link>
                <Link href="#">News</Link>
                <Link href="#">Contact</Link>
              </Box>
            )}
            {!gteMd && (
              <MobileMenu onClick={() => setOpen(!open)}>
                <HiOutlineMenu color="#fff" />
              </MobileMenu>
            )}
            <IoSearchSharp color={gteMd ? '#42B073' : '#fff'} />
            {gteMd && (
              <Box display="flex" gap={1} color="#fff">
                <Link href="#">
                  <FaFacebook />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
                <Link href="#">
                  <FaYoutube />
                </Link>
                <Link href="#">
                  <FaTiktok />
                </Link>
                <Link href="#">
                  <FaLinkedin />
                </Link>
                <Link href="#">
                  <FaMicrophone />
                </Link>
              </Box>
            )}
          </Box>
        </HeaderContainer>
      </header>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          width={200}
          padding={3}
        >
          <Link href="#">About</Link>
          <Link href="#">News</Link>
          <Link href="#">Contact</Link>
        </Box>
      </Drawer>
    </>
  )
}

export default memo(Header)
