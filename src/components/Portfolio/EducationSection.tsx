import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology',
      institution: 'Your University Name',
      branch: 'Computer Science & Engineering',
      duration: '2021 - 2025',
      grade: 'CGPA: 8.5/10',
      description: 'Relevant coursework: Data Structures, Algorithms, Machine Learning, Database Systems, Software Engineering',
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      degree: '12th Grade (Higher Secondary)',
      institution: 'Your School Name',
      branch: 'Science (PCM)',
      duration: '2019 - 2021',
      grade: '92.5%',
      description: 'Subjects: Physics, Chemistry, Mathematics, Computer Science',
      icon: <Award className="h-6 w-6" />
    },
    {
      degree: '10th Grade (Secondary)',
      institution: 'Your School Name',
      branch: 'All Subjects',
      duration: '2017 - 2019',
      grade: '95.2%',
      description: 'Comprehensive education with focus on Science and Mathematics',
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <section id="education" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous learning and academic excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            {educationData.map((education, index) => (
              <div key={index} className="timeline-item">
                <Card className="ml-8 p-6 card-hover">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      {education.icon}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                          {education.degree}
                        </h3>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-medium">{education.duration}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-primary">
                          {education.institution}
                        </p>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
                          <p className="text-muted-foreground">{education.branch}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium px-3 py-1 bg-success/10 text-success rounded-full">
                              {education.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {education.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;