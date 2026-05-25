'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function ProductsPage() {
  const [data, setData] = useState<any[]>([]);

  async function getProducts() {
    try {
      const response = await axios.get(
        'https://ecommerce.routemisr.com/api/v1/products'
      );

      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
  {data.map((product) => (
    <Grid  size={{ xs: 12 , md: 6  , lg:4}} sx={{ p: { xs: 5 , md: 6  , lg:12} }} key={product._id}>
      <Card>
        <CardMedia
          component="img"
          height="180"
          image={product.imageCover}
          alt={product.title}
        />

        <CardContent>
          <Typography variant="h6" noWrap>
            {product.title}
          </Typography>

          <Typography variant="body2">
            {product.price} EGP
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
  );
}