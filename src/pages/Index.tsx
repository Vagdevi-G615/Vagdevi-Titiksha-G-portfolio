import { ThemeProvider, useTheme } from '@/components/Portfolio/ThemeProvider';
import Navbar from '@/components/Portfolio/Navbar';
import HeroSection from '@/components/Portfolio/HeroSection';
import EducationSection from '@/components/Portfolio/EducationSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import PublicationsSection from '@/components/Portfolio/PublicationsSection';
import SkillsSection from '@/components/Portfolio/SkillsSection';
import CertificationsSection from '@/components/Portfolio/CertificationsSection';
import ContactSection from '@/components/Portfolio/ContactSection';
import Footer from '@/components/Portfolio/Footer';

const PortfolioContent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Navbar darkMode={theme === 'dark'} toggleDarkMode={toggleTheme} />
      <HeroSection />
      <EducationSection />
      <ProjectsSection />
      <PublicationsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default Index;
