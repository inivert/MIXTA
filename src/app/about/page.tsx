import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Executive Chef',
    image: '/team/chef.jpg',
    description: 'With over 15 years of culinary experience, Chef John brings his passion for innovative cuisine to every dish.',
  },
  {
    name: 'Maria Garcia',
    role: 'Pastry Chef',
    image: '/team/pastry-chef.jpg',
    description: 'Maria's creative desserts have become a hallmark of our dining experience.',
  },
  {
    name: 'David Wilson',
    role: 'Restaurant Manager',
    image: '/team/manager.jpg',
    description: 'David ensures that every guest receives exceptional service and leaves with a memorable experience.',
  },
];

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
      <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
        Our Story
      </Typography>

      {/* Story Section */}
      <Paper elevation={3} sx={{ p: 4, mb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              A Tradition of Excellence
            </Typography>
            <Typography paragraph>
              Founded in 2010, Mixta Restaurant has been serving the San Francisco community with a unique blend of traditional and contemporary cuisine. Our commitment to using the finest ingredients and creating memorable dining experiences has made us a beloved destination for food enthusiasts.
            </Typography>
            <Typography paragraph>
              What started as a small family restaurant has grown into a culinary landmark, thanks to our dedicated team and loyal customers. We take pride in our innovative menu that changes with the seasons, ensuring that every visit offers something new to discover.
            </Typography>
            <Typography>
              Our philosophy is simple: create exceptional food with locally-sourced ingredients, serve it in a warm and welcoming atmosphere, and treat every guest like family.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/about/restaurant.jpg"
              alt="Restaurant interior"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Team Section */}
      <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
        Meet Our Team
      </Typography>
      
      <Grid container spacing={4}>
        {teamMembers.map((member) => (
          <Grid item key={member.name} xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image={member.image}
                alt={member.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography color="text.secondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Values Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
          Our Values
        </Typography>
        <Grid container spacing={4}>
          {['Quality', 'Innovation', 'Sustainability'].map((value) => (
            <Grid item key={value} xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {value}
                </Typography>
                <Typography>
                  {value === 'Quality' && 'We source only the finest ingredients and maintain the highest standards in food preparation.'}
                  {value === 'Innovation' && 'Our menu evolves with creative new dishes while respecting traditional techniques.'}
                  {value === 'Sustainability' && 'We are committed to environmental responsibility and supporting local producers.'}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
} 