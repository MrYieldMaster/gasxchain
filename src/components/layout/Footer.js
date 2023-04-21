import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box component="footer" bgcolor="black" py={4}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white">GAS-X Chain</Typography>
            <Typography color="primary" gutterBottom>About Us</Typography>
            <Typography color="white" gutterBottom>Blog</Typography>
            <Typography color="primary" gutterBottom>Contact Us</Typography>
            <Typography color="white" gutterBottom>Privacy Policy</Typography>
            <Typography color="primary" gutterBottom>Terms of Service</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white">Resources</Typography>
            <Link component={RouterLink} to="/wallet" color="primary" underline="none" display="block">Wallet</Link>
            <Link component={RouterLink} to="/transactions" color="white" underline="none" display="block">Transactions</Link>
            <Link component={RouterLink} to="/staking" color="primary" underline="none" display="block">Staking</Link>
            <Link component={RouterLink} to="/nft-marketplace" color="white" underline="none" display="block">NFT Marketplace</Link>
            <Link component={RouterLink} to="/token-swap" color="primary" underline="none" display="block">Token Swap</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white">Follow Us</Typography>
            <IconButton edge="start" color="primary" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton edge="start" color="primary" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton edge="start" color="primary" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <IconButton edge="start" color="primary" aria-label="Instagram">
              <Instagram />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center" borderTop="1px solid" borderColor="secondary.light" pt={3}>
          <Typography variant="body2" color="secondary">&copy; {new Date().getFullYear()} HyperGas Chain. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
