import { Box, Container, Grid, Paper, Stack, Typography,} from "@mui/material";
import SkillCard from "./SkillCard";
import { languages, frameworks } from './skills';

function Skills() {
    return (
        
        <Container sx={{margin: ""}}>
            
            <Paper elevation={2} sx={{minHeight: "400px", padding: "30px"}}>
                <Stack>
                    <Box sx={{display: "flex", justifyContent : "center", marginBottom:"40px"}}>
                        <Typography color="secondary" variant="h3">Languages</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent : "center"}}>
                        <Grid container justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }} sx={{display:"flex", justifyContent:"center"}}>

                            {languages.map((language, i) => {
                                return (
                                <Grid item xs={1} sm={2} md={3} key={i}>
                                    <SkillCard
                                        key = {i} 
                                        id ={language.id} 
                                        name = {language.name} 
                                        skill= {language.skill}
                                        img = {language.img}
                                    />
                                </Grid>
                                );
                            })}
                        </Grid>
                    </Box>



                    <Box sx={{display: "flex", justifyContent : "center", marginBottom:"40px", marginTop: "100px"}}>
                        <Typography color="secondary" variant="h3">Frameworks & libraries</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent : "center"}}>
                        <Grid container justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }} sx={{display:"flex", justifyContent:"center"}}>

                            {frameworks.map((language, i) => {
                                return (
                                <Grid item xs={1} sm={2} md={3} key={i}>
                                    <SkillCard
                                        key = {i} 
                                        id ={language.id} 
                                        name = {language.name} 
                                        skill= {language.skill}
                                        img = {language.img}
                                    />
                                </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </Stack>

            </Paper>
        </Container>
        
    );
}

export default Skills;