import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-lg">
            <span>Made with</span>
            <Heart className="h-5 w-5 text-red-500 animate-pulse" />
            <span>and</span>
            <Code2 className="h-5 w-5 text-primary" />
            <span>by Vagdevi Titiksha Gorti</span>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <span>© {2025} Vagdevi Titiksha Gorti. All rights reserved.</span>
            
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
