"use client";

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';

const pages = ['HOME', 'MENU','ABOUT', 'CONTACT'];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ backgroundColor: 'transparent' }}
      animate={{ 
        backgroundColor: isScrolled ? '#ffffff' : 'transparent',
      }}
      transition={{ 
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        backdropFilter: isScrolled ? 'blur(5px)' : 'none',
        boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
        textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.3)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            minHeight: { xs: '70px', md: '100px' },
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            ...(isScrolled && {
              minHeight: { xs: '60px', md: '80px' },
            }),
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              color: isScrolled ? '#000' : '#fff',
              fontFamily: 'Playfair Display, serif',
              textDecoration: 'none',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 700,
              letterSpacing: '0.1em',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              mr: 4,
              ...(isScrolled && {
                fontSize: { xs: '1rem', md: '1.2rem' },
              }),
            }}
          >
            CULTURA MIXTA
          </Typography>

          {/* Navigation Links */}
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' }, 
              justifyContent: 'center',
              gap: 3
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: isScrolled ? '#000' : '#fff',
                  opacity: 1,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  position: 'relative',
                  padding: '8px 0',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    opacity: 0.8,
                    '&::after': {
                      transform: 'scaleX(1)',
                      backgroundColor: isScrolled ? '#000' : '#fff',
                    },
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: isScrolled ? '#000' : '#fff',
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <IconButton
                key={index}
                size="small"
                sx={{ 
                  color: isScrolled ? '#000' : '#fff',
                  opacity: 1,
                  padding: 1,
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': { 
                    opacity: 0.8,
                    transform: 'translateY(-2px)',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </motion.div>
  );
} 