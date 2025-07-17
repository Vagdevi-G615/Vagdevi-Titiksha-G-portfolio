import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, Calendar, CheckCircle } from 'lucide-react';
const CertificationsSection = () => {
  const certifications = [
  {
    "name": "Introduction to Cybersecurity",
    "provider": "Cisco Networking Academy",
    "date": "Jun 2025",
    "status": "Completed",
    "description": "Fundamentals of cybersecurity principles, threats, and defenses.",
    "skills": ["Cybersecurity", "Network Security", "Threat Analysis"],
    "credentialUrl": "https://www.netacad.com/certificates?issuanceId=be162d10-2716-4499-8670-bcf90c6da132",
   logo: '☁️'
  },
  {
    "name": "Introduction to Networks",
    "provider": "Cisco Networking Academy",
    "date": "Jun 2025",
    
    "status": "Completed",
    "description": "Basics of networking, including IP addressing, cabling, and protocols.",
    "skills": ["Networking", "IP Addressing", "Cabling", "Protocols"],
    "credentialUrl": "https://www.netacad.com/certificates?issuanceId=b5565a59-983b-4e5d-b9e1-07c00d05c6f7",
    logo: '📊'
  },
  {
    "name": "Switching, Routing and Wireless Essentials",
    "provider": "Cisco Networking Academy",
    "date": "Jun 2025",
   
    "status": "Completed",
    "description": "Knowledge of switching, routing, and wireless technologies in enterprise networks.",
    "skills": ["Switching", "Routing", "Wireless Networking"],
    "credentialUrl": "https://www.netacad.com/certificates?issuanceId=78c0901e-1f8f-4e65-8be2-8cf84eff7759",
   logo: '⚛️'
  },
  {
    "name": "Cybersecurity Essentials",
    "provider": "Cisco Networking Academy",
    "date": "Jun 2025",
 
    "status": "Completed",
    "description": "Core principles of cybersecurity, cryptography, and security operations.",
    "skills": ["Cybersecurity", "Security Operations", "Cryptography"],
    "credentialUrl": "https://www.netacad.com/certificates?issuanceId=cd764aaf-2b41-4378-868a-5d3faf436985",
   logo: '🔬'
  },
  {
    "name": "Python Essentials",
    "provider": "Cisco Networking Academy",
    "date": "Jun 2025",
    "status": "Completed",
    "description": "Foundations of Python programming including data types, loops, and functions.",
    "skills": ["Python", "Programming Fundamentals"],
    "credentialUrl": "https://www.netacad.com/certificates?issuanceId=32ba046f-8e62-4226-88b0-6976f460173f",
   logo: '🔷'
  },
  {
    "name": "Data Structures",
    "provider": "University of California, San Diego (Coursera)",
    "date": "Feb 2024",
   
    "status": "Completed",
    "description": "Covers core data structures and performance optimization techniques in Java.",
    "skills": ["Data Structures", "Algorithms", "Java"],
    "credentialUrl": "https://www.coursera.org/account/accomplishments/verify/U2FCEW9VEE8V"
  },
  {
    "name": "Introduction to Data Analytics",
    "provider": "IBM (Coursera)",
    "date": "Feb 2024",
    "status": "Completed",
    "description": "Covers data-driven decision making, key tools, and career paths in analytics.",
    "skills": ["Data Analytics", "Data Visualization", "Data-Driven Decisions"],
    "credentialUrl": "https://www.coursera.org/account/accomplishments/verify/FDRKW7LVN8X2"
  },
  {
    "name": "Introduction to Databases",
    "provider": "Meta (Coursera)",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Completed",
    "description": "Basics of databases, relational models, and SQL.",
    "skills": ["Databases", "SQL", "Data Modeling"],
    "credentialUrl": "https://coursera.org"
  },
  {
    "name": "Object-Oriented Programming in Java",
    "provider": "University of California, San Diego (Coursera)",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Completed",
    "description": "Object-oriented principles including classes, inheritance, and interfaces.",
    "skills": ["OOP", "Java", "Design Patterns"],
    "credentialUrl": "https://coursera.org"
  },
  {
    "name": "Python Data Structures",
    "provider": "Coursera Project Network",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Completed",
    "description": "Covers lists, dictionaries, and other data structures in Python.",
    "skills": ["Python", "Data Structures"],
    "credentialUrl": "https://coursera.org"
  },
  {
    "name": "Working with Subqueries in SQL",
    "provider": "Coursera Project Network",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Completed",
    "description": "Hands-on SQL practice using subqueries and nested statements.",
    "skills": ["SQL", "Subqueries", "Database Querying"],
    "credentialUrl": "https://coursera.org"
  },
  {
    "name": "Certified AI Foundations Associate",
    "provider": "Oracle",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Certified",
    "description": "Foundational AI knowledge covering machine learning, neural networks, and ethics.",
    "skills": ["AI", "Machine Learning", "Neural Networks"],
    "credentialUrl": "https://education.oracle.com"
  },
  {
    "name": "Certified Foundations Associate",
    "provider": "Oracle",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Certified",
    "description": "Covers core concepts in software engineering and technology foundations.",
    "skills": ["Software Engineering", "Cloud Basics"],
    "credentialUrl": "https://education.oracle.com"
  },
  {
    "name": "Oracle Data Certified Foundations",
    "provider": "Oracle",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Certified",
    "description": "Introduces foundational data concepts, databases, and data handling.",
    "skills": ["Data Management", "Databases", "Data Handling"],
    "credentialUrl": "https://education.oracle.com"
  },
  {
    "name": "Cambridge English Empower C1 Level",
    "provider": "Cambridge University Press",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Completed",
    "description": "Advanced English language proficiency at C1 level for academic and professional use.",
    "skills": ["English Proficiency", "Academic Writing", "Communication"],
    "credentialUrl": "https://www.cambridgeenglish.org"
  },
  {
    "name": "Introduction to Business Intelligence",
    "provider": "Infosys Springboard",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Completed",
    "description": "Basic principles of BI including dashboards, KPIs, and reporting tools.",
    "skills": ["Business Intelligence", "Data Reporting", "KPI Analysis"],
    "credentialUrl": "https://springboard.infosys.com"
  },
  {
    "name": "Agile and Scrum Practice",
    "provider": "Infosys Springboard",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Completed",
    "description": "Practical knowledge of agile methodology and Scrum framework.",
    "skills": ["Agile", "Scrum", "Project Management"],
    "credentialUrl": "https://springboard.infosys.com"
  },
  {
    "name": "Introduction to ER Modeling",
    "provider": "Infosys Springboard",
    "date": "Month Year",
    "credentialId": "N/A",
    "status": "Completed",
    "description": "Covers Entity-Relationship model concepts and their application in DBMS.",
    "skills": ["ER Modeling", "Database Design", "DBMS"],
    "credentialUrl": "https://springboard.infosys.com"
  }
];


  const getStatusColor = (status: string) => {
    const colors = {
      'Active': 'bg-green-500/10 text-green-500 border-green-500/20',
      'Expired': 'bg-red-500/10 text-red-500 border-red-500/20',
      'Pending': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  return (
    <section id="certifications" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Certifications &{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{cert.logo}</div>
                  <Badge className={getStatusColor(cert.status)}>
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {cert.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold leading-tight">
                  {cert.name}
                </CardTitle>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-medium">{cert.provider}</span>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col space-y-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{cert.date}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {cert.description}
                </p>

                <div>
                  <p className="text-sm font-medium mb-2">Skills Covered:</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs text-muted-foreground">
                    Credential ID: <span className="font-mono">{cert.credentialId}</span>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    asChild 
                    className="w-full"
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Verify Credential
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-muted-foreground">Active Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground">Different Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Skills Validated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2024</div>
            <div className="text-muted-foreground">Latest Certification</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
