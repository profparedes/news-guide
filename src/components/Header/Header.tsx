import { memo, useState } from 'react'
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
import { HeaderContainer, MobileMenu } from './style'

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
                <Link>About</Link>
                <Link>News</Link>
                <Link>Contact</Link>
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
                <Link>
                  <FaFacebook />
                </Link>
                <Link>
                  <FaInstagram />
                </Link>
                <Link>
                  <FaYoutube />
                </Link>
                <Link>
                  <FaTiktok />
                </Link>
                <Link>
                  <FaLinkedin />
                </Link>
                <Link>
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
          <Link>About</Link>
          <Link>News</Link>
          <Link>Contact</Link>
        </Box>
      </Drawer>
    </>
  )
}

export default memo(Header)
