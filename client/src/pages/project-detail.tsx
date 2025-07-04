import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target, X, ZoomIn } from "lucide-react";
import { Link } from "wouter";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

// GitHub links for each project
const getGitHubLink = (projectId: string): string | undefined => {
  const githubLinks: Record<string, string> = {
    "gcp-azure-migration": "https://github.com/JashVaghasiya-DE/GCP-2-AZURE",
    "real-time-analytics-pipeline": "https://github.com/JashVaghasiya-DE/kafka-financial",
    "customer-analytics-dashboard": "" // Not Available
  };
  return githubLinks[projectId] || undefined;
};

const projectsData = {
  "gcp-azure-migration": {
    title: "GCP to Azure Migration & Governance Platform",
    subtitle: "Enterprise-scale automated data pipeline solution enabling seamless migration, processing, and governance of large-scale datasets between Google Cloud Platform and Microsoft Azure with zero data loss and comprehensive security controls",
    description: "This project involves building large-scale data pipelines to migrate, process, and govern data between Google Cloud and Azure. The solution implements a comprehensive three-layer architecture (landing, raw, intermediate, curated) with robust security, logging, and automated governance controls. The system handles both dimensional and fact tables with full-load and delta-load capabilities, ensuring data integrity and optimal performance through watermark column implementation.",
    technologies: ["Azure Data Factory", "Databricks", "PySpark", "SQL", "Unity Catalog", "Azure Active Directory", "Google Cloud Storage", "Azure Blob Storage", "ADLS", "Key Vault", "Logic Apps"],
    duration: "1 month", 
    team: "1 engineer and 1 cloud architect",
    impact: "Zero data loss migration, 100% automation, enterprise-grade security compliance",
    highlights: [
      "Zero Data Loss Migration: Achieved seamless transfer of terabytes of data with comprehensive validation and monitoring",
      "Automated Governance: Implemented end-to-end RBAC with Unity Catalog integration for enterprise-grade security", 
      "Scalable Architecture: Built parameterized pipelines capable of handling dynamic data sources and table structures",
      "Real-Time Monitoring: Integrated comprehensive logging and alerting mechanisms for proactive pipeline management"
    ],
    challenges: [
      "Cross-Cloud Connectivity: Establishing secure, reliable data transfer between GCP and Azure platforms while maintaining data integrity",
      "Incremental Data Processing: Implementing watermark column logic to efficiently handle large-scale incremental loads without duplication",
      "Enterprise Security Integration: Seamlessly integrating Unity Catalog with Azure Active Directory for role-based access control across platforms"
    ],
    results: [
      "Data Transfer Efficiency: Enabled automated migration of large-scale datasets with watermark column optimization reducing processing time and preventing data duplication",
      "Security Compliance: Established enterprise-grade data governance with integrated RBAC and secure credential management",
      "Operational Excellence: Achieved 100% automation in data pipeline management with real-time monitoring and failure alerting",
      "Cross-Platform Integration: Successfully bridged GCP and Azure ecosystems with robust, scalable data processing capabilities"
    ],
    architecture: {
      description: "Implements a comprehensive four-layer data architecture with cross-platform integration and automated pipeline orchestration for systematic processing between GCP and Azure.",
      components: [
        "Multi-Layer Data Flow: landing → raw → intermediate → curated data layers for systematic processing",
        "Cross-Platform Integration: Seamless connectivity between GCP and Azure using SHIR and secure credential management", 
        "Automated Pipeline Orchestration: End-to-end automation with parameterized pipelines for dynamic source and table management",
        "Security & Governance Framework: RBAC integration with Unity Catalog and AAD for comprehensive access control"
      ]
    },
    images: [
      {
        url: "/attached_assets/architecture_1751664339599.jpg",
        caption: "Complete ETL Architecture - GCP to Azure Migration with Delta Lake layers",
        type: "architecture"
      },
      {
        url: "/attached_assets/for_each_loop_1751664339602.png", 
        caption: "Azure Data Factory ForEach Loop Implementation for dynamic pipeline processing",
        type: "pipeline"
      },
      {
        url: "/attached_assets/intermediate_to_curated_1751664339604.png",
        caption: "Intermediate to Curated Layer Data Processing with metadata lookup",
        type: "processing"
      },
      {
        url: "/attached_assets/landing_to_raw_1751664339606.png",
        caption: "Landing to Raw Layer Processing with success/failure handling",
        type: "processing"
      },
      {
        url: "/attached_assets/raw_to_intermediate_1751664339607.png",
        caption: "Raw to Intermediate Layer Processing Pipeline",
        type: "processing"
      },
      {
        url: "/api/assets/Screenshot%202024-10-17%20160144_1751664339608.png",
        caption: "Azure Data Factory Pipeline Parameters and Monitoring Dashboard",
        type: "dashboard"
      }
    ],
    goal: "Build an enterprise-grade, automated data pipeline solution that seamlessly migrates and governs large-scale datasets between Google Cloud Platform and Microsoft Azure with zero data loss and comprehensive security controls."
  },
  "real-time-analytics-pipeline": {
    title: "Cloud-Native Data Platform with Real-Time Streaming and Automated Deployments",
    subtitle: "Enterprise-scale cloud-native data platform leveraging Infrastructure-as-Code, real-time streaming, and automated CI/CD deployments",
    description: "This project demonstrates the implementation of a comprehensive cloud-native data platform that provisions and manages Azure cloud resources using Infrastructure-as-Code principles. The solution encompasses end-to-end data engineering workflows including ETL pipelines, real-time data streaming, and fully automated CI/CD deployments. The platform integrates multiple Azure services to create a scalable, reliable, and observable data ecosystem capable of handling both batch and streaming data processing.",
    technologies: ["Terraform", "Bicep", "Azure DevOps", "Azure Data Factory", "Databricks", "ADLS Gen2", "Key Vault", "Logic Apps", "PySpark", "Delta Live Tables", "Confluent Kafka", "MySQL"],
    duration: "4 months",
    team: "3 engineers + 1 cloud architect",
    impact: "Complete infrastructure automation, real-time data processing capabilities, comprehensive CI/CD automation",
    highlights: [
      "Full Infrastructure Automation: Achieved complete Azure resource provisioning and management using Terraform/Bicep IaC principles",
      "Real-Time Data Processing: Implemented low-latency streaming solutions with Confluent Kafka integration for immediate data insights",
      "Comprehensive CI/CD: Established automated deployment pipelines for both ADF and Databricks workflows with DevOps integration",
      "Proactive Monitoring: Designed observability solutions using Logic Apps for data lineage tracking and pipeline stability monitoring"
    ],
    challenges: [
      "Complex Infrastructure Orchestration: Managing interdependent Azure resources through Terraform while ensuring proper networking, security, and access controls",
      "Real-Time Data Integration: Seamlessly integrating Confluent Kafka with Azure services to achieve low-latency data streaming and processing",
      "CI/CD Pipeline Complexity: Implementing automated deployments for both ADF pipelines and Databricks notebooks while maintaining data lineage and pipeline stability"
    ],
    results: [
      "Deployment Efficiency: Reduced infrastructure provisioning time through automated IaC implementation with Terraform",
      "Data Processing Performance: Enabled real-time data ingestion and processing capabilities with Confluent Kafka integration",
      "Operational Excellence: Achieved seamless CI/CD automation for data pipelines with Azure DevOps integration",
      "System Reliability: Established proactive monitoring and observability framework ensuring high availability and scalability"
    ],
    architecture: {
      description: "Infrastructure-as-Code foundation with multi-layer data processing, real-time streaming integration, and automated deployment pipeline for comprehensive cloud-native data operations.",
      components: [
        "Infrastructure-as-Code Foundation: Complete Azure resource provisioning using Terraform for VNet, Subnets, Databricks, Data Factory, and storage components",
        "Multi-Layer Data Processing: Integrated ETL pipelines with Delta Live Tables for efficient data transformation and storage in Parquet format",
        "Real-Time Streaming Integration: Confluent Kafka implementation with Azure services for low-latency data ingestion and processing",
        "Automated Deployment Pipeline: End-to-end CI/CD automation using Azure DevOps for both ADF pipelines and Databricks workflows"
      ]
    },
    goal: "Build a fully automated, cloud-native data platform on Azure that combines Infrastructure-as-Code provisioning, real-time streaming capabilities, and CI/CD automation to deliver scalable, reliable, and high-performance data engineering solutions.",
    images: [
      {
        url: "/attached_assets/model_1751665733082.png",
        caption: "Stream Processing Architecture with Kafka: Near Real-Time - Complete data flow from source to reporting",
        type: "architecture"
      },
      {
        url: "/attached_assets/Screenshot 2025-03-04 121042_1751665733082.png",
        caption: "Azure Data Factory Pipeline Implementation with MySQL and Databricks Integration",
        type: "pipeline"
      },
      {
        url: "/attached_assets/Screenshot 2025-03-04 121250_1751665733083.png",
        caption: "Kafka-DLT Pipeline Workflow in Databricks showing automated data processing",
        type: "processing"
      }
    ]
  },
  "customer-analytics-dashboard": {
    title: "LAPD Crime Data - Data Warehousing And Analytics Platform",
    subtitle: "Comprehensive end-to-end data analytics platform processing 15+ years of LAPD crime and arrest data using Azure cloud services",
    description: "This ongoing project focuses on building a comprehensive data pipeline and analytics platform for LAPD crime data spanning from 2010 to present. The solution addresses LAPD's transition to FBI NIBRS compliance by implementing a medallion architecture that transforms raw crime reports into standardized star schema data models. The platform handles complex data quality challenges inherent in paper-transcribed reports, geographic privacy constraints, and system migration complexities.",
    technologies: ["Azure Data Factory", "ADLS Gen2", "Databricks", "Key Vault", "Logic Apps", "Azure DevOps", "PySpark", "SQL", "Apache Airflow", "Power BI", "Star Schema Modeling"],
    duration: "8 months (ongoing)",
    team: "2 engineers + 1 data analyst",
    impact: "FBI NIBRS compliance, enhanced law enforcement decision-making, automated data processing",
    highlights: [
      "15+ Years Data Processing: Handling comprehensive crime and arrest datasets from 2010-present with scalable processing capabilities",
      "FBI NIBRS Compliance: Implementing standardized crime reporting protocols to meet federal requirements",
      "Advanced Analytics Capabilities: Delivering trend analysis, KPI dashboards, and geographic clustering for law enforcement insights",
      "End-to-End Automation: Complete pipeline from API data extraction to structured warehouse storage and dashboard visualization"
    ],
    challenges: [
      "Data Quality Management: Addressing inconsistencies and errors from paper-transcribed crime reports requiring advanced validation techniques",
      "Geographic Privacy Compliance: Implementing data anonymization for addresses rounded to nearest hundred block while maintaining analytical value",
      "System Migration Complexity: Managing data pipeline stability during LAPD's transition to new Records Management Systems and FBI NIBRS standards"
    ],
    results: [
      "Enhanced Decision-Making: Providing law enforcement with actionable insights through comprehensive crime trend analysis and geographic clustering",
      "Improved Data Accessibility: Transforming raw crime reports into structured, queryable data warehouse format for easy analysis",
      "Operational Efficiency: Automated data pipeline reduces manual processing time and ensures consistent data quality",
      "Public Safety Insights: Enabling evidence-based public safety strategies through advanced analytics and visualization capabilities"
    ],
    architecture: {
      description: "Medallion data architecture with API-to-warehouse pipeline, star schema implementation, and cloud-native integration for comprehensive crime data analytics.",
      components: [
        "Medallion Data Architecture: Implements Bronze (raw), Silver (cleaned), and Gold (business-ready) data layers for systematic processing",
        "API-to-Warehouse Pipeline: End-to-end data flow from API extraction to ADLS storage, Databricks transformation, and structured data warehousing",
        "Star Schema Implementation: Structured data warehouse design optimized for analytics and reporting requirements",
        "Cloud-Native Integration: Seamless Azure service integration with automated monitoring and validation frameworks"
      ]
    },
    goal: "Build a comprehensive, compliant, and scalable data analytics platform that transforms 15+ years of LAPD crime data into actionable insights through automated pipelines, structured data warehousing, and advanced visualization capabilities.",
    images: [
      {
        url: "/attached_assets/Screenshot 2025-07-04 175335_1751666108378.png",
        caption: "Arrest Data Star Schema (2010-Present) - Comprehensive dimensional model with fact and dimension tables",
        type: "schema"
      },
      {
        url: "/attached_assets/Screenshot 2025-07-04 175414_1751666108379.png",
        caption: "Crime Data Star Schema (2010-Present) - Complete data warehouse design for law enforcement analytics",
        type: "schema"
      },
      {
        url: "/attached_assets/Screenshot 2025-07-04 175546_1751666154164.png",
        caption: "Medallion Architecture Pipeline - Bronze-Silver-Gold data layers with Azure Data Factory integration",
        type: "architecture"
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
    goal: "Modernize legacy data warehouse infrastructure achieving 70% performance improvement and 40% cost reduction through cloud migration.",
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
    goal: "Build a comprehensive MLOps platform automating the entire machine learning lifecycle with 50% faster model deployment and 90% reduction in manual work.",
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
    goal: "Lead enterprise-scale migration to AWS achieving 40% cost reduction and 99.9% uptime improvement through modern cloud architecture.",
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
    goal: "Implement enterprise-wide data quality framework achieving 95% improvement in data reliability and 80% faster issue detection across 500+ data sources.",
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
  const [selectedImage, setSelectedImage] = useState<{url: string, caption: string} | null>(null);
  
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
              <Card key={index} className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group">
                <div 
                  className="aspect-video relative overflow-hidden"
                  onClick={() => setSelectedImage({url: image.url, caption: image.caption})}
                >
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                  </div>
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
                <ul className="space-y-3">
                  {project.architecture.components.map((component, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700 leading-relaxed">{component}</span>
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

        {/* Project Goal */}
        {(project as any).goal && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200">
              <CardContent className="p-8 text-center">
                <Target className="mx-auto h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-4">Project Goal</h3>
                <p className="text-lg text-slate-700 font-medium italic">{(project as any).goal}</p>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Action Buttons */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {(() => {
              const githubLink = getGitHubLink(projectId);
              return githubLink ? (
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              ) : null;
            })()}
            <Link href="/#contact">
              <Button variant="outline">
                Discuss This Project
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>

      {/* Image Zoom Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-lg font-semibold">
              {selectedImage?.caption}
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-4">
            {selectedImage && (
              <div className="w-full flex justify-center">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.caption}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}