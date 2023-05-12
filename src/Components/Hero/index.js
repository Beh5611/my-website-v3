import { Box, Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import headerImg from "../Assets/img/pic.jpg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import Grid2 from '@mui/material/Unstable_Grid2'; 
function Hero() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "FullStack Developer", "CS Student", "ML Engineer" ];
    const period = 2000;
    

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }


    return ( 
    <>
        {/* <Typography variant="h1">
            Hello world
        </Typography> */}
        <Container className="banner" id="home" sx={{minHeight: "950px"}}>
            <Grid container spacing={2} sx={{height: "70vh",display: "flex", alignItems: "center"}}>
                <Grid xs={12} md={7}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <Box>
                            <Typography color="secondary" variant="h5">Welcome to my Portfolio</Typography>
                            <Typography variant="h2">{`My name is `}
                            <Typography color='secondary' component="span" variant="h2">
                            Behrouz
                            </Typography> 
                                <span className="txt-rotate" dataPeriod="1000" >
                                
                                    <span className="wrap" 
                                    style={{borderRight: "0.08em solid"}}
                                    >
                                    <br></br>
                                    {`I'm a ${text}`}
                                    </span>
                                </span>
                            </Typography>
                            <Typography variant="subtitle2" sx={{paddingTop:"5%"}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </Typography>
                                
                        </Box>
                        }
                    </TrackVisibility>
                </Grid>
                <Grid xs={12} md={5} sx={{display: 'flex', justifyContent: 'center'}}>
                    <TrackVisibility>
                    {
                        ({ isVisible }) =>
                            <Box sx={{paddingTop: "20%"}}>
                            
                                <img className="HeroPic" width={400} src={headerImg} alt="Header Img"
                                    style=
                                    {{
                                        animation: "updown 3s linear infinite", 
                                        borderRadius: "50px 10px 50px 10px",
                                        boxShadow: "4px 4px 4px #888888"  
                                    }}
                                />
                            </Box>
                                
                    }
                    </TrackVisibility>
                </Grid>
            </Grid>
        </Container>
    </>
    );
}

export default Hero;