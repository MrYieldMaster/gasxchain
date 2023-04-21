import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

// Replace this with real NFT data from your blockchain
const nfts = [
  {
    id: 1,
    name: 'NFT 1',
    description: 'An amazing NFT',
    image: 'https://source.unsplash.com/random/200x200',
    price: '100',
  },
  {
    id: 2,
    name: 'NFT 2',
    description: 'An amazing NFT',
    image: 'https://source.unsplash.com/random/200x200',
    price: '200',
  },
  {
    id: 3,
    name: 'NFT 3',
    description: 'An amazing NFT',
    image: 'https://source.unsplash.com/random/200x200',
    price: '300',
  },
  {
    id: 4,
    name: 'NFT 4',
    description: 'An amazing NFT',
    image: 'https://source.unsplash.com/random/200x200',
    price: '400',
  },
  {
    id: 5,
    name: 'NFT 5',
    description: 'An amazing NFT',
    image: 'https://source.unsplash.com/random/200x200',
    price: '500',
  },
  {
    id: 6,
    name: 'NFT 6',
    description: 'An amazing NFT',
    image: 'https://source.unsplash.com/random/200x200',
    price: '600',
  },
];

const NFTMarketplace = () => {
  const [nftList, setNftList] = useState([]);

  useEffect(() => {
    // Fetch NFT data from your blockchain here and update the state
    setNftList(nfts);
  }, []);

  const handleBuyNFT = (nftId) => {
    // Implement your NFT purchase logic here
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          NFT Marketplace
        </Typography>
        <Grid container spacing={3}>
          {nftList.map((nft) => (
            <Grid item key={nft.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={nft.image}
                  alt={nft.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {nft.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {nft.description}
                  </Typography>
                  <Typography variant="h6" component="div">
                    Price: {nft.price} Tokens
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleBuyNFT(nft.id)}
                  >
                    Buy
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default NFTMarketplace;
