"use client";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const menuCategories = [
  {
    title: 'LUNCH',
    image: 'https://picsum.photos/id/365/800/600',
    link: '/menu/lunch'
  },
  {
    title: 'DINNER',
    image: 'https://picsum.photos/id/366/800/600',
    link: '/menu/dinner'
  },
  {
    title: 'DRINKS',
    image: 'https://picsum.photos/id/425/800/600',
    link: '/menu/drinks'
  },
  {
    title: 'STARTERS',
    image: 'https://picsum.photos/id/367/800/600',
    link: '/menu/starters'
  },
  {
    title: 'HAPPY HOUR',
    image: 'https://picsum.photos/id/431/800/600',
    link: '/menu/happy-hour'
  },
  {
    title: 'DESSERT',
    image: 'https://picsum.photos/id/292/800/600',
    link: '/menu/dessert'
  }
];

export default function MenuPage() {
  return (
    <Box sx={{ pt: { xs: 8, md: 12 }, pb: 8 }}>
      {/* Header Section */}
      <Box
        sx={{
          height: '40vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://picsum.photos/id/452/1920/1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mb: 8,
        }}
      >
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Typography
            sx={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontSize: '2rem',
              mb: 2,
            }}
          >
            Discover
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              letterSpacing: '0.2em',
            }}
          >
            OUR MENU
          </Typography>
        </Box>
      </Box>

      {/* Menu Categories Grid */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {menuCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover': {
                    '& .MuiCardMedia-root': {
                      transform: 'scale(1.1)',
                    },
                    '& .overlay': {
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    },
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={category.image}
                    alt={category.title}
                    sx={{
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      transition: 'background-color 0.3s ease-in-out',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: 'white',
                        padding: '8px 24px',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'text.primary',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 