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
import { styled } from '@mui/system';
import TelegramIcon from '@mui/icons-material/Telegram';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SearchField = styled(TextField)({
  border: '2px solid #FFF',
  borderRadius: '20px',
  margin: '10px 10px',
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

const SearchBox = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  padding: theme.spacing(2),
  borderRadius: '15px',
  border: '2px solid black',
}));

const AdSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '15px',
  height: '100%',
}));

const InfoBox = styled(Paper)(({ theme }) => ({
  backgroundColor: '#FFF',
  padding: theme.spacing(2),
  borderRadius: '15px',
  border: '2px solid #ccc',
  marginTop: theme.spacing(-3),
}));

const InfoItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: '10px',
  border: '2px solid #ccc',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: theme.spacing(1),
}));

const BorderCard = styled(Card)({
  background: 'linear-gradient(145deg, #1d2b64, #3d5af1)',
  borderRadius: '10px',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '2.5rem',
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
    { title: 'New Wallet Release', description: 'Experience the Next Generation Wallet' },
    { title: 'Upcoming Protocol Upgrade', description: 'Improved Scalability and Performance' },
    { title: 'Security Enhancements', description: 'Keeping Your Assets Safe and Secure' },
    { title: 'Community Growth', description: 'Join Our Thriving Global Ecosystem' },
    // ...
  ];

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const barData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Box sx={{ background: 'linear-gradient(45deg, #cf3d00 30%, #edb800 90%)', minHeight: '100vh' }}>
      
      <Box my={0}>
        <SearchBox>
          <Grid container spacing={1} padding={5}   >
            <Grid item xs={12} md={8}>
              <Typography variant="h6" color={'#f5d600'}  gutterBottom>
              Inferno Blockchain Explorer
              </Typography>
              <SearchField
                label="Search by Block Number or Hash #"
                variant="outlined"
                fullWidth
                InputProps={{
                  style: { color: '#FFF' },
                }}
                InputLabelProps={{
                  style: { color: '#FFF' },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AdSection>
                {/* Add your ad component or content here */}
                <Typography variant="h6" align="center">
                  Advertisement
                </Typography>
              </AdSection>
            </Grid>
          </Grid>
        </SearchBox>
      </Box>

      {/* InfoBox with Token Price, Market Cap, Latest Transaction, Latest Block, and Transaction History */}
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          <InfoBox>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <InfoItem sx={{ borderColor: '#1e88e5' }}>
                  <AttachMoneyIcon color="primary" />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Token Price: {tokenPrice}
                  </Typography>
                </InfoItem>
              </Grid>
              <Grid item xs={12} sm={4}>
                <InfoItem sx={{ borderColor: '#4caf50' }}>
                  <TrendingUpIcon color="success" />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Market Cap: {marketCap}
                  </Typography>
                </InfoItem>
              </Grid>
              <Grid item xs={12} sm={4}>
                <InfoItem sx={{ borderColor: '#f44336' }}>
                  <CompareArrowsIcon color="error" />
                  {/* Add the latest transaction component or data here */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Latest Transaction
                  </Typography>
                </InfoItem>
              </Grid>
              <Grid item xs={12} sm={4}>
                <InfoItem sx={{ borderColor: '#ff9800' }}>
                  <DashboardIcon color="warning" />
                  {/* Add the latest block component or data here */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Latest Block
                  </Typography>
                </InfoItem>
              </Grid>
              <Grid item xs={12} sm={8}>
                <InfoItem sx={{ borderColor: '#9c27b0' }}>
                  <BarChartIcon color="secondary" />
                  {/* Add the small chart for transaction history here */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Transaction History (Last 10 days)
                  </Typography>
                </InfoItem>
              </Grid>
            </Grid>
          </InfoBox>
        </Grid>
      </Grid>

    <Box my={4}>
   <Title
   align="center"
    margin={2}
    padding={5}
    variant="h6"
    sx={{ color: '#FFF' }}
  >
    Charts and Analytics
  </Title>
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          borderRadius: '10px',
          padding: '20px',
          margin: '20px',
          background: 'transparent',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Pie Chart
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          borderRadius: '10px',
          padding: '20px',
          margin: '20px',
          background: 'transparent',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Bar Chart
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={barData}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Grid>
  </Grid>
</Box>

<Box my={4} textAlign="center">
  <Button
    variant="contained"
    color="secondary"
    size="large"
    startIcon={<TelegramIcon />}
    sx={{
      padding: '12px 24px',
      margin: '20px',
    }}
  >
    Join Our Community
  </Button>
</Box>

<Box
  my={4}
  sx={{
    backgroundImage: 'url("../../assets/images/blockIcon.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    margin: '20px',
    
    padding: '20px',
    borderRadius: '20px',
    border: '5px solid black',
    shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    spacing: '10px',
  }}
>
  <Title
    align="center"
    margin="20px"
    variant="h6"
    fontWeight="bold"
    fontFamily="Roboto"
    gutterBottom
    sx={{ color: '#FFF' }}
  >
    Blockchain News and Updates
  </Title>
  <Grid container spacing={3} padding={5}>
    {news.map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <BorderCard>
          <CardContent>
            <Title variant="h6" sx={{ color: '#FFF' }}>
              {item.title}
            </Title>
            <Typography sx={{ color: '#FFF' }}>{item.description}</Typography>
          </CardContent>
        </BorderCard>
      </Grid>
    ))}
  </Grid>
</Box>

      <Grid container spacing={3} border={2} padding={5} >
        {/* Latest transactions */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom sx={{ color: '#FFF' }}>
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
          <Typography variant="h6" gutterBottom sx={{ color: '#FFF' }}>
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

    