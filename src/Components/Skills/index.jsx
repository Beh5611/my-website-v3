import { Box, Container, Divider, Grid, Paper, Stack, Typography,} from "@mui/material";
import SkillCard from "./SkillCard";
import { languages, frameworks, tools } from './skills';
import { useState } from "react";

function Skills() {
    const [section, setSection] = useState('Languages');
    
    let skillHandler = () => {
        if (section === 'Languages'){
            return (
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
            )
        } else if (section === 'Libraries'){
            return (
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
            )
        } else if (section === 'Tools'){
            return (
                <Box sx={{display: "flex", justifyContent : "center"}}>
                    <Grid container justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 12 }} sx={{display:"flex", justifyContent:"center"}}>
        
                        {tools.map((language, i) => {
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
            )
        }
    }
    
    return (
        <Container sx={{margin: ""}}> 
            
            <Paper elevation={2} sx={{minHeight: "400px", padding: "30px"}}>
                <Stack>
                    <Box sx={{display: "flex", justifyContent : "center", marginBottom:"40px", textAlign: 'center'}}>

                        <Stack>
                            <Typography variant="h3" 
                            color={section === 'Languages' ? 'text.secondary' : 'text.primary'}
                            sx={{'&:hover': {
                                color: 'text.third'
                                
                            }}}
                            onClick={() => setSection('Languages')}>
                            Languages</Typography>
                            
                            <Divider flexItem sx={{margin:"10px"}}/>
                            
                            <Typography variant="h3" 
                            color={section === 'Libraries' ? 'text.secondary' : 'text.primary'}
                            sx={{'&:hover': {
                                color: 'text.third'
                                
                            }}}
                            onClick={() => setSection('Libraries')}>
                            Frameworks & Libraries</Typography>
                            
                            <Divider sx={{margin:"10px"}} flexItem variant="fullWidth"/>
                            
                            <Typography variant="h3" 
                            color={section === 'Tools' ? 'text.secondary' : 'text.primary'}
                            sx={{'&:hover': {
                                color: 'text.third'
                                
                            }}}
                            onClick={() => setSection('Tools')}>
                            Tools</Typography>
                        </Stack>
                       
                        
                    </Box>

                    



                    {skillHandler()}
                   
                </Stack>

            </Paper>
        </Container>
        
    );
}

export default Skills;