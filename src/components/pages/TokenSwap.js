import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  Divider,
  IconButton,
  InputAdornment,
} from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { styled } from '@mui/material/styles';

const SwapContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '12px',
  padding: '24px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
}));

const SwapPaper = styled(Paper)(({ theme }) => ({
  borderRadius: '12px',
  padding: '24px',
  backgroundColor: theme.palette.background.paper,
}));

const TokenSwap = () => {
  const [fromTokenAmount, setFromTokenAmount] = useState('');
  const [toTokenAmount, setToTokenAmount] = useState('');

  const handleSwap = () => {
    // Implement your token swap logic here
  };

  const swapTokens = () => {
    const temp = fromTokenAmount;
    setFromTokenAmount(toTokenAmount);
    setToTokenAmount(temp);
  };

  return (
    <SwapContainer maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Token Swap
        </Typography>
        <SwapPaper elevation={3}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">From Token</Typography>
              <TextField
                fullWidth
                label="Amount"
                value={fromTokenAmount}
                onChange={(e) => setFromTokenAmount(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">To Token</Typography>
              <TextField
                fullWidth
                label="Amount"
                value={toTokenAmount}
                onChange={(e) => setToTokenAmount(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box mt={2} textAlign="center">
            <IconButton color="primary" onClick={swapTokens}>
              <SwapVertIcon fontSize="large" />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSwap}
            >
              Swap Tokens
            </Button>
          </Box>
        </SwapPaper>
      </Box>
    </SwapContainer>
  );
};

export default TokenSwap;

