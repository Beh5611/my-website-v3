import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
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
        <Container sx={{display: "flex", justifyContent : "center", marginBottom:"40px", marginTop: '150px',textAlign: 'center'}}>
            <Stack>
                <Typography variant="h3" color='text.secondary' sx={{marginBottom:"40px"}}>
                    Projects
                </Typography>
                <Box sx={{
                    display: "grid",
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1rem',
                    justifyContent : "center",
                    textAlign: 'center'
                }}> 
                    {portfolio.map((project) => {
                        return (
                        <Card sx={{width: '350px', display: "grid", justifyContent : "center", alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem'}} elevation={4}>
                            <CardContent sx={{backgroundColor: 'white', height: '250px'}}>
                                <Slider {...settings}>
                                    {project.img.map((imgLink) => {
                                        console.log(imgLink)
                                        return (
                                        <div>
                                            <img src={imgLink} alt="slide1" height={200} width={320}/>
                                        </div>
                                        )
                                    })}
                                    
                                    
                                </Slider>
                            </CardContent>
                            <CardContent sx={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                                <Stack spacing={3}>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {project.headline}
                                    </Typography>
                                    <Typography variant="body2">
                                        {project.description}
                                    </Typography>
                                    <Typography variant="body2">
                                        {project.lessons}
                                    </Typography>
                                    <Grid container sx={{display: 'flex', justifyContent:'center'}}>
                                        {
                                            project.github 
                                            && 
                                            <Grid>
                                                <Button sx={{color: 'text.primary'}}>
                                                    <GitHubIcon />
                                                </Button>
                                            </Grid>
                                        }
                                        
                                        {
                                            project.demo
                                            &&
                                            <Grid>
                                                <Button sx={{color: 'text.primary'}}>
                                                    demo
                                                </Button>
                                            </Grid>
                                        }
                                        
                                    </Grid>
                                </Stack>
                                
                            </CardContent>
                        </Card>
                        )
                        
                    })}
                </Box>
            </Stack>
        </Container>
        
            
    );
}

export default Projects;