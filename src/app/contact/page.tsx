"use client";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Phone, LocationOn, AccessTime, Email } from '@mui/icons-material';

export default function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
      <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
        Contact Us
      </Typography>

      <Grid container spacing={6} sx={{ mt: 2 }}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Restaurant Information
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <LocationOn color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Address
                </Typography>
                <Typography color="text.secondary">
                  123 Restaurant Street<br />
                  San Francisco, CA 94105
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Phone color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Phone
                </Typography>
                <Typography color="text.secondary">
                  (555) 123-4567
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Email color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Email
                </Typography>
                <Typography color="text.secondary">
                  info@mixtarestaurant.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTime color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  Hours
                </Typography>
                <Typography color="text.secondary">
                  Monday - Friday: 11:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 10:00 AM - 11:00 PM
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Send us a Message
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="First Name"
                    name="firstName"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Phone Number"
                    name="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
} 