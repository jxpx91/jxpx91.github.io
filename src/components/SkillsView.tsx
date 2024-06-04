import React from 'react';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import SkillItem from './SkillItem';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AndroidIcon from '@mui/icons-material/Android';
import { ReactComponent as KotlinIcon } from '../assets/images/kotlin.svg';
import { ReactComponent as JetpackIcon } from '../assets/images/jetpack.svg';
import { ReactComponent as GitIcon } from '../assets/images/git.svg';
import { ReactComponent as AndroidStudio } from '../assets/images/android_studio.svg';
import { ReactComponent as Java } from '../assets/images/java.svg';
import { ReactComponent as Api } from '../assets/images/api.svg';
import { ReactComponent as CSharp } from '../assets/images/c_sharp.svg';

function ExperienceView() {
    return (
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography variant='h2' align='center'>
              Skills
            </Typography>
          </Grid>
          <SkillItem IconComponent={AndroidIcon} title="Android SDK" description="6 years"/>
          <SkillItem IconComponent={KotlinIcon} title="Kotlin" description="3 years"/>
          <SkillItem IconComponent={JetpackIcon} title="Jetpack" description="2 year"/>
          <SkillItem IconComponent={GitIcon} title="Git" description="4 years"/>
          <SkillItem IconComponent={AndroidStudio} title="Android Studio" description="6 years"/>
          <SkillItem IconComponent={Java} title="Java" description="3 years"/>
          <SkillItem IconComponent={Api} title="API Rest" description="4 year"/>
          <SkillItem IconComponent={CSharp} title="C#" description="2 years"/>
        </Grid>
    );
}

export default ExperienceView;