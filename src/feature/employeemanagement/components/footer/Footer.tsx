import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 2,
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="body2">
          © {new Date().getFullYear()} My Company
        </Typography>
        <Typography variant="body2">
          <Link href="/privacy" color="inherit">
            Privacy Policy
          </Link>
          {' | '}
          <Link href="/terms" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
