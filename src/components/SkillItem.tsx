import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';

interface SkillItemProps {
    IconComponent: React.ElementType;
    title: string;
    description: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ IconComponent, title, description }) => (
    <Grid item xs={6} md={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ padding: 3, backgroundColor: 'background.dark', borderRadius: 5, width: 100, height: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <IconComponent fontSize="large" height='2em' width='2em' sx={{ color: 'var(--primary)' }}/>
        <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
            {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'white' }}>
            {description}
        </Typography>
      </Box>
    </Grid>
  );

export default SkillItem;