'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function BrandsPage() {
  const [data, setData] = useState<any[]>([]);

  async function getBrands() {
    try {
      const response = await axios.get(
        'https://ecommerce.routemisr.com/api/v1/brands'
      );

      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {data.map((brand) => (
        <Grid
          size={{ xs: 12, md: 6, lg: 4 }}
          sx={{
            p: { xs: 2, md: 4, lg: 6 }
          }}
          key={brand._id}
        >
          <Card>
            <CardMedia
              component="img"
              height="180"
              image={brand.image}
              alt={brand.name}
              sx={{ objectFit: 'contain', background: '#fff' }}
            />

            <CardContent>
              <Typography variant="h6" noWrap >
                {brand.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}