import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Brain, 
  Database, 
  Globe, 
  Users, 
  MessageCircle, 
  Target, 
  Lightbulb,
  TrendingUp,
  Palette
} from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Python', level: 90, icon: <Code2 className="h-5 w-5" /> },
    { name: 'Machine Learning', level: 85, icon: <Brain className="h-5 w-5" /> },
    { name: 'SQL & Databases', level: 80, icon: <Database className="h-5 w-5" /> },
    { name: 'React & JavaScript', level: 75, icon: <Globe className="h-5 w-5" /> },
    { name: 'Data Visualization', level: 82, icon: <TrendingUp className="h-5 w-5" /> },
    { name: 'Deep Learning', level: 70, icon: <Brain className="h-5 w-5" /> },
  ];

  const softSkills = [
    { name: 'Leadership', level: 88, icon: <Users className="h-5 w-5" /> },
    { name: 'Communication', level: 92, icon: <MessageCircle className="h-5 w-5" /> },
    { name: 'Problem Solving', level: 90, icon: <Target className="h-5 w-5" /> },
    { name: 'Creative Thinking', level: 85, icon: <Lightbulb className="h-5 w-5" /> },
    { name: 'Team Collaboration', level: 87, icon: <Users className="h-5 w-5" /> },
    { name: 'Adaptability', level: 89, icon: <Palette className="h-5 w-5" /> },
  ];

  const tools = [
    'Jupyter Notebook', 'VS Code', 'Git', 'Docker', 'AWS', 'Google Cloud',
    'Tableau', 'Power BI', 'Figma', 'Postman', 'MongoDB', 'PostgreSQL'
  ];

  const certifications = [
    'AWS Cloud Practitioner',
    'Google Data Analytics',
    'Meta Frontend Developer',
    'IBM Data Science',
    'Microsoft Azure Fundamentals'
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number; icon: React.ReactNode } }) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-primary">{skill.icon}</div>
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills &{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code2 className="h-6 w-6 text-primary" />
                <span>Technical Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-primary" />
                <span>Soft Skills</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {softSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tools & Technologies */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-primary" />
                <span>Tools & Technologies</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-primary" />
                <span>Certifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;