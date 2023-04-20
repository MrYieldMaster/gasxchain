import React, { useEffect, useRef, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Box,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

import logo from "../..//assets//images///logo.png"

const Header = () => {
  const logoRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState({});

  const handleClick = (event, key) => {
    setAnchorEl({ ...anchorEl, [key]: event.currentTarget });
  };

  const handleClose = (key) => {
    setAnchorEl({ ...anchorEl, [key]: null });
  };

  useEffect(() => {
    gsap.from(logoRef.current, {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'bounce',
    });
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const menuItems = {
    blockchain: [
      // { path: '/blocks', label: 'Blocks' },
      { path: '/transactions', label: 'Transactions' },
      // { path: '/accounts', label: 'Accounts' },
    ],
    validators: [
      { path: '/staking', label: 'Staking' },
      { path: '/dashboard', label: 'dashboard' },
      // { path: '/validators', label: 'Validators' },
    ],
    resources: [
      { path: '/wallet', label: 'Wallet' },
      { path: '/nft-marketplace', label: 'NFT Marketplace' },
      { path: '/token-swap', label: 'Token Swap' },
      // { path: '/token-list', label: 'Token List' },
     //  { path: '/token-bridge', label: 'Token Bridge' },
      // { path: '/token-faucet', label: 'Token Faucet' },
      // { path: '/token-claim', label: 'Token Claim' },
    ],
  };

  return (
    <AppBar position="static"sx={{ backgroundColor: 'black'}}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            ref={logoRef}
            src={logo}
            alt="HyperGas Logo"
            style={{ width: '60px', marginRight: '15px' }}
          />
          <Typography variant="h6" component="div">
            <Link component={RouterLink} to="/" color="Red" underline="none">
              HyperGas
            </Link>
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <nav>
          <Box display="flex" alignItems="center" paddingRight={35}>
            {Object.keys(menuItems).map((key, index) => (
              <motion.div
                key={key}
                initial="hidden"
                animate="visible"
                transition={{ delay: (index + 1) * 0.2 }}
                variants={navVariants}
              >
                <Button
                  color="inherit"
                  aria-controls={key}
                  aria-haspopup="true"
                  onClick={(event) => handleClick(event, key)}
                >
                  {key}
                </Button>
                <Menu
                  id={key}
                  anchorEl={anchorEl[key]}
                  keepMounted
                  open={Boolean(anchorEl[key])}
                  onClose={() => handleClose(key)}
                >
                  {menuItems[key].map((item) => (
                    <MenuItem
                      key={item.path}
                      component={RouterLink}
                      to={item.path}
                      onClick={() => handleClose(key)}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </motion.div>
            ))}
          </Box>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;




