"use client";

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Restaurant, Schedule, Phone } from '@mui/icons-material';
import { keyframes } from '@mui/system';
import EventsSection from './components/EventsSection';
import NewsletterSection from './components/NewsletterSection';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideImages = [
  {
    url: 'https://picsum.photos/id/1060/1920/1080',
    title: 'Welcome to',
    subtitle: 'CULTURA MIXTA',
    cta: {
      text: 'EXPLORE MENU',
      link: '/menu'
    }
  },
  {
    url: 'https://picsum.photos/id/431/1920/1080',
    title: 'Experience',
    subtitle: 'AUTHENTIC CUISINE',
    cta: {
      text: 'BOOK A TABLE',
      link: '/reservation'
    }
  },
  {
    url: 'https://picsum.photos/id/292/1920/1080',
    title: 'Discover',
    subtitle: 'OUR FLAVORS',
    cta: {
      text: 'VIEW GALLERY',
      link: '/gallery'
    }
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          position: 'relative',
          minHeight: '100vh',
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {slideImages.map((slide, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Container maxWidth="lg">
                <Box
                  sx={{
                    textAlign: 'center',
                    color: 'white',
                    maxWidth: '800px',
                    margin: '0 auto',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: { xs: '1.5rem', md: '2.5rem' },
                        mb: 2,
                        fontStyle: 'italic',
                      }}
                    >
                      {slide.title}
                    </Typography>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: '2.5rem', md: '5rem' },
                        fontWeight: 700,
                        letterSpacing: '0.2em',
                        mb: 4,
                        textTransform: 'uppercase',
                        lineHeight: 1.2,
                      }}
                    >
                      {slide.subtitle}
                    </Typography>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      href={slide.cta.link}
                      sx={{
                        color: 'white',
                        borderColor: 'white',
                        borderWidth: 2,
                        px: 6,
                        py: 2,
                        fontSize: '1rem',
                        letterSpacing: '0.2em',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'white',
                          transform: 'scaleX(0)',
                          transformOrigin: 'right',
                          transition: 'transform 0.3s ease-in-out',
                          zIndex: -1,
                        },
                        '&:hover': {
                          borderWidth: 2,
                          borderColor: 'white',
                          color: 'black',
                          backgroundColor: 'transparent',
                          '&::before': {
                            transform: 'scaleX(1)',
                            transformOrigin: 'left',
                          },
                        },
                      }}
                    >
                      {slide.cta.text}
                    </Button>
                  </motion.div>
                </Box>
              </Container>
            </Box>
          ))}
          
          {/* Slide Indicators */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '1rem',
              zIndex: 2,
            }}
          >
            {slideImages.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  bgcolor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    bgcolor: 'white',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Welcome Section */}
        <Container sx={{ py: 15 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  sx={{
                    color: 'primary.main',
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic',
                    mb: 2,
                  }}
                >
                  Latin American Restaurant
                </Typography>
                <Typography variant="h2" component="h2" gutterBottom>
                  WELCOME
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Experience the vibrant flavors of Latin America in the heart of the city. Our menu celebrates the diverse culinary traditions of the region, bringing together authentic recipes and modern techniques.
                </Typography>
                <Button
                  variant="text"
                  color="primary"
                  sx={{
                    mt: 2,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  OUR STORY →
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                style={{
                  scale,
                  y,
                }}
              >
                <Box
                  component="img"
                  src="https://picsum.photos/id/493/800/600"
                  alt="Signature dish"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* Parallax Section */}
        <motion.div
          style={{
            height: '60vh',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']),
            }}
          >
            <Box
              component="img"
              src="https://picsum.photos/id/447/1920/1080"
              alt="Parallax background"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: 'rgba(0,0,0,0.5)',
              }}
            />
          </motion.div>
          
          <Container sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                }}
              >
                CULTURA MIXTA
              </Typography>
            </motion.div>
          </Container>
        </motion.div>

        {/* Three Image Grid with Parallax */}
        <Container sx={{ py: 8 }}>
          <Grid container spacing={2}>
            {[
              {
                src: 'https://picsum.photos/id/431/800/600',
                alt: 'Restaurant atmosphere'
              },
              {
                src: 'https://picsum.photos/id/292/800/600',
                alt: 'Food preparation'
              },
              {
                src: 'https://picsum.photos/id/365/800/600',
                alt: 'Dining experience'
              }
            ].map((image, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  style={{
                    position: 'relative',
                    height: '400px',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: -50,
                      left: 0,
                      right: 0,
                      bottom: -50,
                      y: useTransform(scrollYProgress, [0, 1], ['0%', '15%']),
                    }}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={image.alt}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </motion.div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Features Section */}
        <Container sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {[
              {
                title: 'ROMANTIC RESTAURANT',
                description: 'Perfect ambiance for special moments',
                image: 'https://picsum.photos/id/452/800/600'
              },
              {
                title: 'DELICIOUS FOOD',
                description: 'Authentic Latin American cuisine',
                image: 'https://picsum.photos/id/365/800/600'
              },
              {
                title: 'RED WINES YOU LOVE',
                description: 'Curated selection of fine wines',
                image: 'https://picsum.photos/id/425/800/600'
              }
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card sx={{ height: '100%', textAlign: 'center', bgcolor: 'background.paper' }}>
                    <motion.div
                      style={{
                        scale: useTransform(
                          scrollYProgress,
                          [0, 1],
                          [1, 1.1]
                        ),
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="300"
                        image={feature.image}
                        alt={feature.title}
                      />
                    </motion.div>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Events Section */}
        <EventsSection />

        {/* Newsletter Section */}
        <NewsletterSection />
      </Box>
    </>
  );
}
