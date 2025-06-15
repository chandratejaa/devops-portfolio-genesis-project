
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Server, Cloud, Code, Settings, Database, Monitor } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = {
    "Linux & System Administration": [
      "Linux Administration",
      "Networking",
      "Bash Scripting",
      "Service Management",
      "System Monitoring"
    ],
    "Version Control & CI/CD": [
      "Git",
      "GitHub",
      "Maven",
      "Jenkins",
      "Automated Pipelines"
    ],
    "Configuration Management & IaC": [
      "Vagrant",
      "Terraform",
      "Ansible",
      "Infrastructure as Code",
      "Configuration Management"
    ],
    "Cloud Platforms": [
      "AWS",
      "Azure",
      "Cloud Infrastructure",
      "Cloud Deployment",
      "Cloud Monitoring"
    ],
    "Programming & Scripting": [
      "Bash Scripting",
      "Python",
      "Flask",
      "JSON/YAML",
      "Environment Variables"
    ],
    "Containerization & Orchestration": [
      "Docker",
      "Kubernetes",
      "Container Management",
      "Microservices",
      "Pod Orchestration"
    ]
  };

  const projects = [
    {
      title: "Automated CI/CD Pipeline with Jenkins",
      description: "Built a comprehensive CI/CD pipeline using Jenkins for automatic code deployment from GitHub to AWS EC2 instances.",
      technologies: ["Jenkins", "AWS EC2", "GitHub", "Maven", "Bash"],
      challenges: "Implementing automated testing and rollback mechanisms",
      outcomes: "Reduced deployment time by 70% and eliminated manual deployment errors",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Infrastructure as Code with Terraform & AWS",
      description: "Designed and implemented scalable AWS infrastructure using Terraform for a web application with auto-scaling capabilities.",
      technologies: ["Terraform", "AWS", "VPC", "EC2", "Load Balancer"],
      challenges: "Managing state files and implementing proper security groups",
      outcomes: "Achieved 99.9% uptime and reduced infrastructure costs by 40%",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Containerized Microservices with Docker & Kubernetes",
      description: "Containerized a monolithic application into microservices and orchestrated them using Kubernetes cluster.",
      technologies: ["Docker", "Kubernetes", "Python", "Flask", "YAML"],
      challenges: "Service discovery and inter-service communication",
      outcomes: "Improved application scalability and reduced resource usage by 50%",
      icon: <Server className="w-6 h-6" />
    }
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner (In Progress)",
    "Azure Fundamentals AZ-900 (In Progress)",
    "Linux System Administration"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Chandra Teja Reddy</h1>
            <div className="flex space-x-6">
              <a href="#about" className="text-slate-600 hover:text-slate-800 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-800 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-800 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-800 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-slate-800 mb-6">
              DevOps Engineer & Cloud Specialist
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Passionate about automating infrastructure, optimizing CI/CD pipelines, and building scalable cloud solutions. 
              Experienced in AWS, Azure, Docker, Kubernetes, and Infrastructure as Code.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I'm a dedicated DevOps engineer with expertise in cloud infrastructure, automation, and continuous integration/deployment. 
                My passion lies in bridging the gap between development and operations teams through efficient tooling and processes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                With hands-on experience in AWS, Azure, Docker, Kubernetes, and various automation tools, I focus on creating 
                robust, scalable, and secure infrastructure solutions that enable teams to deliver software faster and more reliably.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="px-3 py-1">
                  <Monitor className="w-4 h-4 mr-1" />
                  Infrastructure
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Code className="w-4 h-4 mr-1" />
                  Automation
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Cloud className="w-4 h-4 mr-1" />
                  Cloud Native
                </Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Quick Facts</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Experienced in Linux system administration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Proficient in CI/CD pipeline automation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Skilled in containerization and orchestration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Cloud infrastructure design and management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Featured Projects</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Key Challenge:</h4>
                      <p className="text-sm text-slate-600">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-1">Outcome:</h4>
                      <p className="text-sm text-slate-600">{project.outcomes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Certifications & Learning</h2>
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800">Current Certifications</h3>
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800">Platforms & Tools</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge className="justify-center py-2 bg-orange-100 text-orange-800 hover:bg-orange-200">
                      <Database className="w-4 h-4 mr-1" />
                      AWS
                    </Badge>
                    <Badge className="justify-center py-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
                      <Cloud className="w-4 h-4 mr-1" />
                      Azure
                    </Badge>
                    <Badge className="justify-center py-2 bg-purple-100 text-purple-800 hover:bg-purple-200">
                      <Server className="w-4 h-4 mr-1" />
                      Linux
                    </Badge>
                    <Badge className="justify-center py-2 bg-green-100 text-green-800 hover:bg-green-200">
                      <Settings className="w-4 h-4 mr-1" />
                      Docker
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing DevOps opportunities, cloud infrastructure projects, or collaborating on innovative solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="mailto:chandu419419@gmail.com"
              className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
            >
              <Mail className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-slate-300">chandu419419@gmail.com</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/chandra-teja-reddy-0666a0331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
            >
              <Linkedin className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-300">Connect with me</p>
            </a>
            <a 
              href="https://github.com/chandratejaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
            >
              <Github className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-slate-300">@chandratejaa</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Chandra Teja Reddy. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
