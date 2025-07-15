import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Database, Brain, Globe, BarChart3 } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Machine Learning Price Predictor',
      description: 'A comprehensive ML model that predicts house prices using advanced regression techniques and feature engineering. Achieved 94% accuracy with ensemble methods.',
      category: 'Machine Learning',
      icon: <Brain className="h-6 w-6" />,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
      githubUrl: 'https://github.com/yourusername/price-predictor',
      demoUrl: 'https://price-predictor-demo.com',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop'
    },
    {
      title: 'E-Commerce Analytics Dashboard',
      description: 'Interactive dashboard for e-commerce data analysis with real-time insights, sales forecasting, and customer behavior analytics.',
      category: 'Data Science',
      icon: <BarChart3 className="h-6 w-6" />,
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/yourusername/ecommerce-dashboard',
      demoUrl: 'https://ecommerce-dashboard-demo.com',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop'
    },
    {
      title: 'Social Media Sentiment Analyzer',
      description: 'NLP-powered application that analyzes social media sentiment in real-time using transformer models and provides actionable insights.',
      category: 'NLP',
      icon: <Globe className="h-6 w-6" />,
      technologies: ['Python', 'BERT', 'Streamlit', 'Twitter API', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/sentiment-analyzer',
      demoUrl: 'https://sentiment-analyzer-demo.com',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop'
    },
    {
      title: 'Distributed Database System',
      description: 'Scalable distributed database system with automatic sharding, replication, and fault tolerance mechanisms for high-availability applications.',
      category: 'Systems',
      icon: <Database className="h-6 w-6" />,
      technologies: ['Java', 'Redis', 'Docker', 'Kubernetes', 'Apache Kafka'],
      githubUrl: 'https://github.com/yourusername/distributed-db',
      demoUrl: null,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Machine Learning': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      'Data Science': 'bg-green-500/10 text-green-500 border-green-500/20',
      'NLP': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      'Systems': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group card-hover overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  {project.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="flex-1"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;