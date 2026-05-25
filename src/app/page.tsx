'use client'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" sx={{ color: "#5E0006" }}>
        أهلاً في المتجر
      </Typography>

      <Typography variant="h6" sx={{ color: "#9B0F06" }}>
        اكتشف أفضل المنتجات والعروض
      </Typography>
    </Box>
  );
}