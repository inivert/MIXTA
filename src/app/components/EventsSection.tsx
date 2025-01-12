"use client";

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventsSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to (1 month from now)
    const countDownDate = new Date();
    countDownDate.setMonth(countDownDate.getMonth() + 1);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        py: 15,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://picsum.photos/id/431/1920/1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: -1,
        }
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', color: 'white', mb: 8 }}>
          <Typography
            sx={{
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic',
              fontSize: '2rem',
              mb: 2,
            }}
          >
            Upcoming
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              letterSpacing: '0.2em',
            }}
          >
            EVENTS
          </Typography>
        </Box>

        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 5 },
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://picsum.photos/id/452/800/600"
                alt="Wine tasting event"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                WINES DURING SPECIFIC NIGHTS
              </Typography>
              <Typography color="text.secondary" paragraph>
                Join us for an exclusive wine tasting experience featuring a selection of premium wines paired with specially crafted dishes.
              </Typography>

              <Grid container spacing={3} sx={{ mt: 4 }}>
                <Grid item xs={3}>
                  <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                    {timeLeft.days}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    DAYS
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                    {timeLeft.hours}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    HOURS
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                    {timeLeft.minutes}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    MINUTES
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                    {timeLeft.seconds}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    SECONDS
                  </Typography>
                </Grid>
              </Grid>

              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ mt: 4 }}
              >
                VIEW DETAILS →
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
} 