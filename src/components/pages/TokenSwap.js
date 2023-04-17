import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const TokenSwap = () => {
  const [fromTokenAmount, setFromTokenAmount] = useState('');
  const [toTokenAmount, setToTokenAmount] = useState('');

  const handleSwap = () => {
    // Implement your token swap logic here
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Token Swap
        </Typography>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Grid container spacing={3}>
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
          <Box mt={4} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleSwap}>
              Swap Tokens
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default TokenSwap;
