import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { portfolio } from "./data";
import Slider from "react-slick";

function Projects() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container id="Projects"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px",
        marginTop: '150px',
        textAlign: 'center'
      }}
      maxWidth='xl'
    >
      <Stack spacing={2}>
        <Typography variant="h3" color='text.secondary' sx={{ marginBottom: "40px" }}>
          Projects
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            textAlign: 'center',
            minWidth: '280px',
          }}
        >
          {portfolio.map((project) => {
            return (
              <Card
                sx={{
                  width: '350px',
                  margin: '10px', // Adjust the margin to reduce the spacing between cards
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s', // Add transition for smooth effect
                    '&:hover': {
                    transform: 'scale(1.05)', // Slightly increase size on hover
                    },
                  
                }}
                elevation={4}
                key={project.id}
              >
                <CardContent sx={{ backgroundColor: 'white', height: '250px', padding: '8px' }}> {/* Adjust the padding to reduce the space within the card content */}
                  <Slider {...settings}>
                    {project.img.map((imgLink) => (
                      
                      <CardMedia 
                        key={imgLink}
                        component="img"
                        height="200"
                        image= {imgLink}
                        />
                    ))}
                  </Slider>
                </CardContent>
                <CardContent sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', padding: '8px' }}> {/* Adjust the padding to reduce the space within the card content */}
                  <Stack spacing={1}> {/* Adjust the spacing to reduce the space between elements */}
                    <Typography gutterBottom variant="h5" component="div">
                      {project.headline}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                    <Typography variant="body2">
                      {project.lessons}
                    </Typography>
                  </Stack>
                </CardContent>
                <CardContent sx={{ padding: '8px' }}> {/* Adjust the padding to reduce the space within the card content */}
                  <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
                    {project.github && (
                      <Grid>
                        <Button sx={{ color: 'text.primary' }} href={project.githublink}>
                          <GitHubIcon />
                        </Button>
                      </Grid>
                    )}
                    {project.demo && (
                      <Grid>
                        <Button sx={{ color: 'text.primary' }} href={project.demolink}>
                          demo
                        </Button>
                      </Grid>
                    )}
                  </Grid>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Stack>
    </Container>
  );
}

export default Projects;
