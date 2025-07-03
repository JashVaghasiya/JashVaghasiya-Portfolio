import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import { Link } from "wouter";

const projectsData = {
  "real-time-analytics-pipeline": {
    title: "Real-time Analytics Pipeline",
    subtitle: "Scalable streaming data processing with sub-second latency",
    description: "Built a comprehensive real-time data pipeline using Apache Kafka, Spark Streaming, and Redis to process e-commerce streaming data. The system handles over 100,000 events per second with sub-second latency, enabling real-time recommendations and fraud detection.",
    technologies: ["Apache Kafka", "Spark Streaming", "Redis", "Python", "Scala", "Docker"],
    duration: "6 months",
    team: "4 engineers",
    impact: "80% reduction in data latency, 25% increase in real-time recommendations accuracy",
    highlights: [
      "Designed fault-tolerant streaming architecture with automatic failover",
      "Implemented real-time fraud detection saving $2M annually",
      "Built monitoring dashboard with custom metrics and alerting",
      "Optimized Kafka partitioning strategy for 10x throughput improvement"
    ],
    challenges: [
      "Managing exactly-once processing semantics across distributed systems",
      "Handling data schema evolution without service interruption",
      "Optimizing memory usage for high-throughput streaming applications"
    ],
    results: [
      "Processing 100K+ events/second with <100ms latency",
      "99.9% uptime with automatic disaster recovery",
      "Reduced infrastructure costs by 30% through optimization"
    ],
    architecture: {
      description: "The pipeline follows a lambda architecture pattern with separate batch and streaming layers.",
      components: [
        "Kafka clusters for event ingestion",
        "Spark Streaming for real-time processing",
        "Redis for low-latency caching",
        "Elasticsearch for analytics storage",
        "Grafana for monitoring and alerting"
      ]
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Real-time Pipeline Architecture Diagram",
        type: "architecture"
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Kafka Streaming Dashboard",
        type: "dashboard"
      },
      {
        url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Performance Monitoring Metrics",
        type: "metrics"
      }
    ]
  },
  "customer-analytics-dashboard": {
    title: "Customer Analytics Dashboard",
    subtitle: "Interactive business intelligence platform for data-driven decisions",
    description: "Developed a comprehensive customer analytics platform that processes customer behavior data from multiple sources, providing actionable insights for marketing teams. The dashboard increased conversion rates by 25% through targeted customer segmentation and personalized campaigns.",
    technologies: ["Tableau", "SQL", "Python", "PostgreSQL", "Apache Airflow", "AWS S3"],
    duration: "4 months",
    team: "3 engineers + 2 analysts",
    impact: "25% increase in conversion rates, $5M revenue impact",
    highlights: [
      "Built customer 360-degree view combining online and offline data",
      "Implemented predictive customer lifetime value models",
      "Created automated customer segmentation with ML algorithms",
      "Designed self-service analytics for business users"
    ],
    challenges: [
      "Integrating data from 15+ disparate sources with different schemas",
      "Ensuring data quality and consistency across all touchpoints",
      "Building scalable ETL processes for 50TB+ of historical data"
    ],
    results: [
      "25% improvement in marketing campaign effectiveness",
      "50% reduction in time-to-insight for analysts",
      "90% user adoption rate across marketing teams"
    ],
    architecture: {
      description: "ETL pipeline with dimensional modeling for optimized analytical queries.",
      components: [
        "Multi-source data ingestion layer",
        "Apache Airflow for workflow orchestration",
        "PostgreSQL data warehouse with star schema",
        "Tableau for interactive visualizations",
        "Python microservices for ML predictions"
      ]
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Customer Analytics Dashboard Overview",
        type: "dashboard"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Data Pipeline Architecture",
        type: "architecture"
      },
      {
        url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Customer Segmentation Model",
        type: "model"
      }
    ]
  },
  "data-warehouse-optimization": {
    title: "Data Warehouse Optimization",
    subtitle: "Legacy system modernization with 70% performance improvement",
    description: "Led the complete redesign of a legacy data warehouse serving 200+ analysts. Implemented modern partitioning strategies, query optimization, and cloud migration resulting in 70% faster queries and 40% cost reduction.",
    technologies: ["PostgreSQL", "Snowflake", "dbt", "Apache Airflow", "Terraform", "AWS"],
    duration: "8 months",
    team: "6 engineers",
    impact: "70% query performance improvement, 40% cost reduction",
    highlights: [
      "Migrated 500TB+ data warehouse to cloud with zero downtime",
      "Implemented automated testing for 1000+ data pipelines",
      "Built data lineage tracking for regulatory compliance",
      "Created performance monitoring with automated optimization"
    ],
    challenges: [
      "Migrating legacy ETL processes without business disruption",
      "Maintaining data consistency during gradual migration",
      "Training 200+ users on new tools and processes"
    ],
    results: [
      "70% improvement in average query performance",
      "40% reduction in infrastructure costs",
      "99.9% data pipeline reliability"
    ],
    architecture: {
      description: "Modern cloud-native data warehouse with automated optimization.",
      components: [
        "Snowflake cloud data warehouse",
        "dbt for data transformations",
        "Apache Airflow for orchestration",
        "Terraform for infrastructure as code",
        "DataDog for monitoring and alerting"
      ]
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Data Warehouse Architecture",
        type: "architecture"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Performance Optimization Results",
        type: "metrics"
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Data Lineage Visualization",
        type: "diagram"
      }
    ]
  },
  "ml-pipeline-automation": {
    title: "ML Pipeline Automation",
    subtitle: "End-to-end MLOps platform for production machine learning",
    description: "Built a comprehensive MLOps platform automating the entire machine learning lifecycle from data ingestion to model deployment. The system serves 20+ ML models in production with automated retraining and monitoring.",
    technologies: ["MLflow", "Docker", "Kubernetes", "Apache Airflow", "TensorFlow", "Python"],
    duration: "10 months",
    team: "5 engineers + 3 data scientists",
    impact: "50% faster model deployment, 90% reduction in manual work",
    highlights: [
      "Automated feature engineering pipeline with 100+ features",
      "Built A/B testing framework for model validation",
      "Implemented automated model monitoring and drift detection",
      "Created self-service ML platform for data scientists"
    ],
    challenges: [
      "Ensuring model reproducibility across different environments",
      "Managing model versioning and rollback strategies",
      "Scaling inference to handle 1M+ predictions per day"
    ],
    results: [
      "50% faster time-to-production for ML models",
      "90% reduction in manual deployment tasks",
      "99.99% model serving uptime"
    ],
    architecture: {
      description: "Cloud-native MLOps platform with automated CI/CD for machine learning.",
      components: [
        "MLflow for experiment tracking",
        "Kubernetes for model serving",
        "Apache Airflow for pipeline orchestration",
        "Docker for containerization",
        "Prometheus for monitoring"
      ]
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "MLOps Pipeline Architecture",
        type: "architecture"
      },
      {
        url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Model Performance Dashboard",
        type: "dashboard"
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Feature Store Architecture",
        type: "diagram"
      }
    ]
  },
  "cloud-data-migration": {
    title: "Cloud Data Migration",
    subtitle: "Enterprise-scale migration to AWS with 40% cost optimization",
    description: "Led the migration of on-premises data infrastructure to AWS, including 200+ databases and 1000+ ETL jobs. Implemented auto-scaling and cost optimization strategies that reduced operational costs by 40%.",
    technologies: ["AWS", "Terraform", "Lambda", "RDS", "S3", "EMR"],
    duration: "12 months",
    team: "8 engineers",
    impact: "40% cost reduction, 99.9% uptime improvement",
    highlights: [
      "Migrated 200+ databases with zero data loss",
      "Implemented Infrastructure as Code for 100% automation",
      "Built disaster recovery with cross-region replication",
      "Created cost monitoring and optimization tools"
    ],
    challenges: [
      "Migrating mission-critical systems with strict SLA requirements",
      "Ensuring security compliance across multiple regulatory frameworks",
      "Coordinating migration across 15+ development teams"
    ],
    results: [
      "40% reduction in infrastructure costs",
      "99.9% uptime vs 95% on-premises",
      "50% faster deployment cycles"
    ],
    architecture: {
      description: "Multi-tier cloud architecture with automated scaling and disaster recovery.",
      components: [
        "AWS RDS for managed databases",
        "S3 for data lake storage",
        "EMR for big data processing",
        "Lambda for serverless computing",
        "CloudFormation for infrastructure"
      ]
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "AWS Cloud Architecture",
        type: "architecture"
      },
      {
        url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Migration Timeline and Metrics",
        type: "metrics"
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Cost Optimization Dashboard",
        type: "dashboard"
      }
    ]
  },
  "data-quality-framework": {
    title: "Data Quality Framework",
    subtitle: "Comprehensive monitoring system with automated testing and alerting",
    description: "Implemented a enterprise-wide data quality framework monitoring 500+ data sources. The system includes automated testing, anomaly detection, and alerting mechanisms that improved data reliability by 95%.",
    technologies: ["Great Expectations", "Apache Airflow", "Grafana", "Python", "SQL", "Slack API"],
    duration: "5 months",
    team: "4 engineers",
    impact: "95% improvement in data reliability, 80% faster issue detection",
    highlights: [
      "Built automated data quality tests for 500+ datasets",
      "Implemented real-time anomaly detection algorithms",
      "Created data quality scoring and reporting system",
      "Established data governance workflows and standards"
    ],
    challenges: [
      "Defining data quality rules across diverse data sources",
      "Balancing comprehensive testing with performance impact",
      "Creating actionable alerts without notification fatigue"
    ],
    results: [
      "95% improvement in data quality scores",
      "80% faster data issue detection and resolution",
      "90% reduction in data-related incidents"
    ],
    architecture: {
      description: "Event-driven data quality platform with real-time monitoring and alerting.",
      components: [
        "Great Expectations for data validation",
        "Apache Airflow for scheduling checks",
        "PostgreSQL for metadata storage",
        "Grafana for visualization",
        "Slack integration for alerts"
      ]
    },
    images: [
      {
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Data Quality Monitoring Dashboard",
        type: "dashboard"
      },
      {
        url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Data Quality Framework Architecture",
        type: "architecture"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
        caption: "Anomaly Detection Results",
        type: "metrics"
      }
    ]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.id;
  
  if (!projectId || !projectsData[projectId as keyof typeof projectsData]) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Project Not Found</h1>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const project = projectsData[projectId as keyof typeof projectsData];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                {tech}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold text-slate-800 mb-2">{project.title}</h1>
          <p className="text-xl text-slate-600 mb-4">{project.subtitle}</p>
          
          <div className="flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {project.duration}
            </div>
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              {project.team}
            </div>
            <div className="flex items-center">
              <Target className="mr-2 h-4 w-4" />
              {project.impact}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Overview</h2>
              <p className="text-slate-700 text-lg leading-relaxed">{project.description}</p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Project Images/Diagrams */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Project Visuals</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <Card key={index} className="bg-white overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-slate-700 font-medium">{image.caption}</p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {image.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium mb-2">📸 Custom Project Assets</p>
            <p className="text-blue-700">
              You can replace these placeholder images with your actual pipeline diagrams, 
              data models, and project screenshots. The images above are temporary placeholders 
              to demonstrate the layout structure.
            </p>
          </div>
        </motion.section>

        {/* Key Highlights & Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Key Highlights</h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-white h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Architecture</h3>
                <p className="text-slate-700 mb-4">{project.architecture.description}</p>
                <ul className="space-y-2">
                  {project.architecture.components.map((component, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm">{component}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* Challenges & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Technical Challenges</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-white h-full">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Results & Impact</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* Action Buttons */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Link href="/#contact">
              <Button variant="outline">
                Discuss This Project
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}