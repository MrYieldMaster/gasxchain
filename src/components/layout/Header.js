import React, { useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import logo from "../../assets/images/logo.png";

const Header = () => {
  const logoRef = useRef(null);

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

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img ref={logoRef} src={logo} alt="HyperGas Logo" style={{ width: '50px', marginRight: '10px' }} />
          <Typography variant="h6" component="div">
            <Link component={RouterLink} to="/" color="inherit" underline="none">
              HyperGas
            </Link>
          </Typography>
        </Box>
        <Box flexGrow={1} />
        <nav>
          {['/wallet', '/transactions', '/staking', '/nft-marketplace', '/token-swap'].map((path, index) => (
            <motion.div
              key={path}
              initial="hidden"
              animate="visible"
              transition={{ delay: (index + 1) * 0.2 }}
              variants={navVariants}
            >
              <Link component={RouterLink} to={path} color="inherit" underline="none" marginRight={2}>
                {path.slice(1).replace('-', ' ')}
              </Link>
            </motion.div>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
