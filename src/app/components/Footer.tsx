"use client";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Mixta Restaurant
            </Typography>
            <Typography variant="body2">
              123 Restaurant Street<br />
              San Francisco, CA 94105<br />
              (555) 123-4567
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Hours
            </Typography>
            <Typography variant="body2">
              Monday - Friday<br />
              11:00 AM - 10:00 PM<br />
              <br />
              Saturday - Sunday<br />
              10:00 AM - 11:00 PM
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', mr: 2 }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white', mr: 2 }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.2)', textAlign: 'center' }}>
          <Typography variant="body2" color="white">
            © {new Date().getFullYear()} Mixta Restaurant. All rights reserved.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="/privacy" color="inherit" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>
            |
            <Link href="/terms" color="inherit" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 