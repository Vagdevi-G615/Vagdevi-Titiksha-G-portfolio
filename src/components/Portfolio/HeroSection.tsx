import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Code, Trophy, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:vagdevititikshag@gmail.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/Vagdevi-G615', label: 'GitHub' },
    { icon: Code, href: 'https://leetcode.com/u/VagdeviG615/', label: 'LeetCode' },
    { icon: Trophy, href: 'https://www.hackerrank.com/profile/gvtitiksha', label: 'HackerRank' },
    { icon: Linkedin, href: 'www.linkedin.com/in/vagdevi-titiksha-gorti', label: 'LinkedIn' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Vagdevi Titiksha Gorti
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Aspiring Data Scientist | B.Tech Final Year
              </p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about leveraging data science and machine learning to solve real-world problems. 
                Currently pursuing my Bachelor's degree while building innovative projects and contributing to open source.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-hero"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile photo */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">YN</span>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
