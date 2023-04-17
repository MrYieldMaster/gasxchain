import React from 'react';
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

// Replace this with real transaction data from your blockchain
const transactions = [
  {
    hash: '0x123...',
    from: '0xabc...',
    to: '0xdef...',
    amount: '100',
    timestamp: '2023-04-16 10:30:00',
  },
  {
    hash: '0x456...',
    from: '0xghi...',
    to: '0xjkl...',
    amount: '50',
    timestamp: '2023-04-16 09:15:00',
  },
  // Add more transactions as needed
];

const Transactions = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Transactions
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hash</TableCell>
                <TableCell>From</TableCell>
                <TableCell>To</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Timestamp</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.hash}</TableCell>
                  <TableCell>{transaction.from}</TableCell>
                  <TableCell>{transaction.to}</TableCell>
                  <TableCell>{transaction.amount} Tokens</TableCell>
                  <TableCell>{transaction.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Transactions;
