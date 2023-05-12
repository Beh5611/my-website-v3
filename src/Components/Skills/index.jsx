import { Box, Container, Divider, Grid, Paper, Stack, Typography,} from "@mui/material";
import SkillCard from "./SkillCard";
import { languages, frameworks, tools } from './skills';
import { useState } from "react";

function Skills() {
    const [section, setSection] = useState('Languages');
    
    
    let skillHandler = () => {
        if (section === 'Languages'){
            return (
                <Box sx={{display: "grid", justifyContent : "center", alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', }}>
                    
                        {languages.map((language, i) => {
                            return (
                                
                                <SkillCard sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                                    key = {i} 
                                    id ={language.id} 
                                    name = {language.name} 
                                    skill= {language.skill}
                                    img = {language.img}
                                />
                            );
                        })}
                    
                </Box>
    
            )
        } else if (section === 'Libraries'){
            return (
                <Box sx={{display: "grid", justifyContent : "center", alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', }}>
                    
                        {frameworks.map((language, i) => {
                            return (
                                
                                <SkillCard sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                                    key = {i} 
                                    id ={language.id} 
                                    name = {language.name} 
                                    skill= {language.skill}
                                    img = {language.img}
                                />
                            );
                        })}
                    
                </Box>
            )
        } else if (section === 'Tools'){
            return (
                <Box sx={{display: "grid", justifyContent : "center", alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', }}>
                    
                        {tools.map((language, i) => {
                            return (
                                
                                <SkillCard sx={{display:'flex', flexDirection: 'column', alignItems: 'center'}}
                                    key = {i} 
                                    id ={language.id} 
                                    name = {language.name} 
                                    skill= {language.skill}
                                    img = {language.img}
                                />
                            );
                        })}
                    
                </Box>
            )
        }
    }
    
    
    return (
        <Container sx={{
            "@media (max-width: 500px)": {
                paddingTop: "100px", // Set a larger bottom padding below 500px
          },}}> 
            
            <Paper elevation={2} sx={{minHeight: "400px", padding: "30px"}}>
                <Stack>
                    <Box sx={{display: "flex", justifyContent : "center", marginBottom:"40px", textAlign: 'center'}}>

                        <Stack>
                            <Typography variant="h3" 
                            color={section === 'Languages' ? 'text.secondary' : 'text.primary'}
                            sx={{cursor: 'pointer', '&:hover': {
                                color: 'text.third'
                                
                            }}}
                            onClick={() => setSection('Languages')}>
                            Languages</Typography>
                            
                            <Divider flexItem sx={{margin:"10px"}}/>
                            
                            <Typography variant="h3" 
                            color={section === 'Libraries' ? 'text.secondary' : 'text.primary'}
                            sx={{cursor: 'pointer','&:hover': {
                                color: 'text.third'
                                
                            }}}
                            onClick={() => setSection('Libraries')}>
                            Frameworks & Libraries</Typography>
                            
                            <Divider sx={{margin:"10px"}} flexItem variant="fullWidth"/>
                            
                            <Typography variant="h3" 
                            color={section === 'Tools' ? 'text.secondary' : 'text.primary'}
                            sx={{cursor: 'pointer','&:hover': {
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