import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, ExternalLink, Calendar, Users } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: 'Advanced Machine Learning Techniques for Predictive Analytics in E-Commerce',
      authors: ['Your Name', 'Dr. Jane Smith', 'Dr. John Doe'],
      venue: 'International Conference on Data Science (ICDS 2024)',
      year: '2024',
      type: 'Conference Paper',
      status: 'Published',
      abstract: 'This paper presents novel machine learning approaches for enhancing predictive analytics in e-commerce platforms. We propose an ensemble method that combines deep learning with traditional statistical methods to achieve 15% improvement in prediction accuracy over existing state-of-the-art methods.',
      keywords: ['Machine Learning', 'E-Commerce', 'Predictive Analytics', 'Deep Learning'],
      pdfUrl: '#',
      doiUrl: 'https://doi.org/10.1000/xyz123',
      citations: 12
    },
    {
      title: 'Sentiment Analysis of Social Media Data Using Transformer Models',
      authors: ['Your Name', 'Dr. Alice Johnson'],
      venue: 'Journal of Natural Language Processing (JNLP)',
      year: '2023',
      type: 'Journal Article',
      status: 'Under Review',
      abstract: 'We investigate the effectiveness of transformer-based models for sentiment analysis on social media data. Our proposed BERT-based architecture demonstrates superior performance on multilingual datasets, achieving state-of-the-art results on five benchmark datasets.',
      keywords: ['NLP', 'Sentiment Analysis', 'BERT', 'Social Media'],
      pdfUrl: '#',
      doiUrl: null,
      citations: 8
    },
    {
      title: 'Distributed Systems for Real-Time Data Processing: A Comparative Study',
      authors: ['Your Name', 'Dr. Michael Brown', 'Sarah Wilson'],
      venue: 'IEEE Transactions on Parallel and Distributed Systems',
      year: '2023',
      type: 'Journal Article',
      status: 'Accepted',
      abstract: 'This research provides a comprehensive comparison of distributed systems architectures for real-time data processing. We evaluate performance, scalability, and fault tolerance of Apache Kafka, Apache Storm, and Apache Flink across various use cases and datasets.',
      keywords: ['Distributed Systems', 'Real-Time Processing', 'Apache Kafka', 'Scalability'],
      pdfUrl: '#',
      doiUrl: 'https://doi.org/10.1109/xyz456',
      citations: 5
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      'Published': 'bg-green-500/10 text-green-500 border-green-500/20',
      'Accepted': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      'Under Review': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      'In Progress': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Conference Paper': 'bg-primary/10 text-primary border-primary/20',
      'Journal Article': 'bg-accent/10 text-accent border-accent/20',
      'Workshop Paper': 'bg-secondary/10 text-secondary border-secondary/20',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Research &{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of knowledge through research and academic publications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {publications.map((paper, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={getTypeColor(paper.type)}>
                        {paper.type}
                      </Badge>
                      <Badge className={getStatusColor(paper.status)}>
                        {paper.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl font-bold leading-tight hover:text-primary transition-colors">
                      {paper.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{paper.year}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Users className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Authors:</p>
                      <p className="font-medium">
                        {paper.authors.map((author, i) => (
                          <span key={i}>
                            {author === 'Your Name' ? (
                              <span className="text-primary font-semibold">{author}</span>
                            ) : (
                              author
                            )}
                            {i < paper.authors.length - 1 && ', '}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Published in:</p>
                      <p className="font-medium text-primary">{paper.venue}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Abstract</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">Keywords:</p>
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <span>Citations: <span className="font-semibold">{paper.citations}</span></span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" asChild>
                        <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-2" />
                          PDF
                        </a>
                      </Button>
                      
                      {paper.doiUrl && (
                        <Button size="sm" asChild>
                          <a href={paper.doiUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            DOI
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;