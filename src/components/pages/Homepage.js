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
    border: '1px solid #ccc',
    borderRadius: '4px',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  });

  const Title = styled(Typography)({
    fontWeight: 'bold',

  });


const Homepage = () => {
  // Replace this with your own data fetched from your blockchain
  const latestBlocks = [
    { number: 1, miner: '0x...', timestamp: '1 min ago', txn: 10 },
    // ...
  ];

  const latestTransactions = [
    { hash: '0x...', from: '0x...', to: '0x...', value: '0.5 ETH', timestamp: '1 min ago' },
    // ...
  ];

  // Dummy data for token price, market cap, and news
  const tokenPrice = '$ 299';
  const marketCap = '$ 1,000,000';
  const news = [
    { title: 'Fastest BlockChain', description: 'The Hottest Chain on the Block' },
    // ...
  ];

  return (
    <Box>
      <Title align='center' variant="h4" gutterBottom
      margin={2} padding={2} >
      
         GAS-X Blockchain Explorer

      </Title>

      {/* Block search */}
      <Box my={4}>
        <SearchField label="Search by Block Number or Hash" variant="outlined" fullWidth />
      </Box>

      {/* Token price and market cap */}
      <Grid container spacing={3}
      margin={5} padding={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Token Price: {tokenPrice}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Market Cap: {marketCap}</Typography>
        </Grid>
      </Grid>

      {/* Charts and analytics */}
      <Box my={4}>
        {/* Add your charts and analytics components here */}
        <Title border={5} margin={2} padding={10} variant="h6">
            Charts and Analytics</Title>
        
      </Box>
       

      {/* Call-to-action button */}
      <Box my={4}>
        <Button variant="contained" color="primary" size="large">
          Join Our Community
        </Button>

      </Box>

      {/* News and updates */}
      <Box my={4}>
        <Title variant="h6" gutterBottom>
          News and Updates
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

      {/* Latest blocks and transactions */}
      <Grid container spacing={3}>
        {/* Latest blocks */} 
        <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
                Latest Blocks
            </Typography>
            <TableContainer component={Paper} >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Block Number</TableCell>
                            <TableCell>Miner</TableCell>
                            <TableCell>Timestamp</TableCell>
                            <TableCell>Transactions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {latestBlocks.map((block, index) => (
                            <TableRow key={index}>
                                <TableCell>{block.number}</TableCell>
                                <TableCell>{block.miner}</TableCell>
                                <TableCell>{block.timestamp}</TableCell>
                                <TableCell>{block.txn}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

      </Grid>

        {/* Latest transactions */}
        <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
                Latest Transactions
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Hash</TableCell>
                            <TableCell>From</TableCell>
                            <TableCell>To</TableCell>
                            <TableCell>Value</TableCell>
                            <TableCell>Timestamp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {latestTransactions.map((txn, index) => (
                            <TableRow key={index}>
                                <TableCell>{txn.hash}</TableCell>
                                <TableCell>{txn.from}</TableCell>
                                <TableCell>{txn.to}</TableCell>
                                <TableCell>{txn.value}</TableCell>
                                <TableCell>{txn.timestamp}</TableCell>
                            </TableRow>
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
