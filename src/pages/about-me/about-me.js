import React from 'react';
import Typography from '@mui/material/Typography';
import { Chip, Card } from '@mui/material';
import './about-me.scss';

function AboutMe() {
  const skills = [
    ['react', 'angular', 'next'],
    ['html', 'css', 'sass', 'javascript', 'typescript'],
    ['node.js', 'graphql', 'rest', 'ssr', 'php', 'aws'],
    ['eslint', 'cypress', 'sonarqube'],
    ['ci/cd', 'npm', 'docker', 'webpack', 'nx'],
    ['bitbucket', 'gitlab', 'github', 'jira', 'confluence'],
    ['unity', 'godot'],
    ['tdd', 'agile', 'scrum'],
  ];

  return (
    <div className="about-me">
      <Card className="paragraph left">
        <Typography variant="body" gutterBottom className="neon-text">
          My journey in tech began with a Bachelor&apos;s and Master&apos;s
          degree in International Media from HTW Berlin. While pursuing my
          master&apos;s, I started as a working student in frontend development
          and quickly transitioned to a full-time role after graduation. Over
          time, I expanded my skills to become a proficient full-stack
          developer.
        </Typography>
      </Card>
      <Card className="paragraph right">
        <Typography variant="body" gutterBottom className="neon-text">
          I have over 5 years of experience in frontend development with
          frameworks and 3+ years in backend development. I&apos;ve worked on
          various projects for clients of all sizes, from startups to industry
          leaders. <br />
          Here are some of the technologies, tools, and languages I have used
          for multiple years:
        </Typography>
      </Card>
      <Card className="skills">
        {skills.map((skill, skillIndex) => (
          <div key={skillIndex} className="skills-section">
            {skill.map((tag, tagIndex) => (
              <Chip className="skills-tag" key={tagIndex} label={tag} />
            ))}
          </div>
        ))}
      </Card>
      <Card className="paragraph right">
        <Typography variant="body" gutterBottom className="neon-text">
          Outside of work, I&apos;m an avid gamer and interested in game
          development, having worked with Unity and currently exploring Godot. I
          enjoy crafting, including pottery painting, resin art, and 3D
          printing, often integrating LEDs and motors into my projects. I&apos;m
          passionate about Halloween, a tradition I share with my dad, where we
          create new and exciting decorations each year.
        </Typography>
      </Card>
      <Card className="paragraph left">
        <Typography variant="body" gutterBottom className="neon-text">
          Short-term Goals: <br />
          Continue learning and experimenting with new technologies and
          techniques. <br />
          Complete creative crafting projects that blend my technical and
          artistic skills.
        </Typography>
      </Card>
      <Card className="paragraph right">
        <Typography variant="body" gutterBottom className="neon-text">
          Long-term Goals: <br />
          Integrate my creative passions into my professional work. <br />
          Contribute to innovative and exciting projects that bring creative
          ideas to life.
        </Typography>
      </Card>
    </div>
  );
}

export default AboutMe;
