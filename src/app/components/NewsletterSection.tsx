"use client";

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { Email } from '@mui/icons-material';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 600,
              letterSpacing: '0.1em',
            }}
          >
            SPECIALS SIGN UP
          </Typography>
          
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              width: '100%',
              maxWidth: 600,
              mt: 3,
            }}
          >
            <TextField
              fullWidth
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
                sx: {
                  bgcolor: 'background.paper',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'divider',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                minWidth: 120,
                bgcolor: 'text.primary',
                color: 'background.paper',
                '&:hover': {
                  bgcolor: 'primary.main',
                },
              }}
            >
              SIGN-UP
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 