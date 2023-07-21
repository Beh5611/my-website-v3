import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

function SkillCard({img, name, skill}) {
    return (  
        <Card 
            sx={{ 
                width: "150px",
                height:"200px",
                transition: 'all 0.3s', // Add transition for smooth effect
                    '&:hover': {
                    transform: 'scale(1.08)', // Slightly increase size on hover
                    },
                }} 
            elevation={10}>
            
            <CardMedia
                component="img"
                height="100"
                image= {img}
                alt={name}
            />
            <CardContent sx={{display: "flex", justifyContent:"center"}}>
                <Stack>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2">
                        {skill}
                    </Typography>
                </Stack>
            </CardContent>
            
        </Card>
    );
}

export default SkillCard;