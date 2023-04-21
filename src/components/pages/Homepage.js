import React from 'react';
import {
  Typography,
  Box,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const SearchField = styled(TextField)({
  border: '5px solid black',
  borderRadius: '20px',
  margin: '10 10px',
  transition: 'border 0.3s',
  '&:hover': {
    borderColor: '#991f00',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
});

const BorderCard = styled(Card)({
  border: '5px solid black',
  borderRadius: '10px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Title = styled(Typography)({
  fontWeight: 'bold',
    fontSize: '1.5rem',
    // color: '#991f00',
    // backgroundColor: '#f5f5f5',
     borderRadius: '10px',
    // border: '1px solid #ccc',
    
});

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1, 2),
}));

const CustomTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Homepage = () => {
  const latestBlocks = [
    { number: 1, miner: '0x...', timestamp: '1 min ago', txn: 10 },
    { number: 2, miner: '0x...', timestamp: '2 min ago', txn: 20 },
    { number: 3, miner: '0x...', timestamp: '3 min ago', txn: 30 },
    { number: 4, miner: '0x...', timestamp: '4 min ago', txn: 40 },
    // ...
  ];

  const latestTransactions = [
    { hash: '0x...', from: '0x...', to: '0x...', value: '0.5 ETH', timestamp: '1 min ago' },
    { hash: '0x...', from: '0x...', to: '0x...', value: '0.5 ETH', timestamp: '2 min ago' },
    { hash: '0x...', from: '0x...', to: '0x...', value: '0.5 ETH', timestamp: '3 min ago' },
    { hash: '0x...', from: '0x...', to: '0x...', value: '0.5 ETH', timestamp: '4 min ago' },
    // ...
  ];

  const tokenPrice = '$ 299';
  const marketCap = '$ 1,000,000';
  const news = [
    { title: 'Fastest BlockChain', description: 'The Hottest Chain on the Block' },
    // ...
  ];

  return (
    <Box>
      <Title align="center" variant="h4" gutterBottom margin={2} padding={2}>
        GAS-X Blockchain Explorer
      </Title>

      <Box my={4}>
        <SearchField label="Search by Block Number or Hash" variant="outlined" fullWidth />
      </Box>

      <Grid container spacing={3} margin={5} padding={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Token Price: {tokenPrice}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Market Cap: {marketCap}</Typography>
        </Grid>
      </Grid>

      <Box my={4}>
        <Title border={5} margin={2} padding={10} variant="h6">
          Charts and Analytics
        </Title>
      </Box>

      <Box my={4}>
        <Button variant="contained" color="primary" size="large">
          Join Our Community
        </Button>
      </Box>

      <Box my={4}>
        <Title variant="h6" gutterBottom>
          Blockchain News and Updates
        </Title>
        <Grid container spacing={3}>
        {news.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <BorderCard>
                <CardContent>
                  <Title variant="h6">{item.title}</Title>
                  <Typography>{item.description}</Typography>
                </CardContent>
              </BorderCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {/* Latest transactions */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Latest Transactions
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Transaction Hash</CustomTableCell>
                  <CustomTableCell>From</CustomTableCell>
                  <CustomTableCell>To</CustomTableCell>
                  <CustomTableCell>Value</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {latestTransactions.map((transaction, index) => (
                  <CustomTableRow key={index}>
                    <CustomTableCell>{transaction.hash}</CustomTableCell>
                    <CustomTableCell>{transaction.from}</CustomTableCell>
                    <CustomTableCell>{transaction.to}</CustomTableCell>
                    <CustomTableCell>{transaction.value}</CustomTableCell>
                  </CustomTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Latest blocks */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Latest Blocks
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Block Number</CustomTableCell>
                  <CustomTableCell>Miner</CustomTableCell>
                  <CustomTableCell>Timestamp</CustomTableCell>
                  <CustomTableCell>Transactions</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {latestBlocks.map((block, index) => (
                  <CustomTableRow key={index}>
                    <CustomTableCell>{block.number}</CustomTableCell>
                    <CustomTableCell>{block.miner}</CustomTableCell>
                    <CustomTableCell>{block.timestamp}</CustomTableCell>
                    <CustomTableCell>{block.txn}</CustomTableCell>
                  </CustomTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
