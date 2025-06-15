
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-violet-900 to-fuchsia-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-800/90 to-violet-800/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-emerald-400/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-orbitron text-emerald-300">Chandra Teja Reddy</h1>
            <div className="flex space-x-6 font-rajdhani">
              <a href="#about" className="text-slate-300 hover:text-emerald-300 transition-colors">About</a>
              <a href="#skills" className="text-slate-300 hover:text-emerald-300 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-300 hover:text-emerald-300 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-300 hover:text-emerald-300 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400 mb-6">
              DevOps Engineer & Cloud Specialist
            </h1>
            <p className="text-xl font-exo text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about automating infrastructure, optimizing CI/CD pipelines, and building scalable cloud solutions. 
              Experienced in AWS, Azure, Docker, Kubernetes, and Infrastructure as Code.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-violet-600 hover:from-emerald-600 hover:to-violet-700 font-rajdhani font-semibold">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-400 text-emerald-300 hover:bg-emerald-400/10 font-rajdhani font-semibold">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-indigo-800/50 to-violet-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="font-exo">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a dedicated DevOps engineer with expertise in cloud infrastructure, automation, and continuous integration/deployment. 
                My passion lies in bridging the gap between development and operations teams through efficient tooling and processes.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                With hands-on experience in AWS, Azure, Docker, Kubernetes, and various automation tools, I focus on creating 
                robust, scalable, and secure infrastructure solutions that enable teams to deliver software faster and more reliably.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  <Monitor className="w-4 h-4 mr-1" />
                  Infrastructure
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-violet-500/20 text-violet-300 border-violet-500/30">
                  <Code className="w-4 h-4 mr-1" />
                  Automation
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30">
                  <Cloud className="w-4 h-4 mr-1" />
                  Cloud Native
                </Badge>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/30 to-violet-900/30 p-8 rounded-lg border border-emerald-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 font-rajdhani text-emerald-300">Quick Facts</h3>
              <ul className="space-y-3 text-slate-300 font-exo">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Experienced in Linux system administration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-violet-400 rounded-full mr-3"></span>
                  Proficient in CI/CD pipeline automation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full mr-3"></span>
                  Skilled in containerization and orchestration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
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
          <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-indigo-800/50 to-violet-800/30 border-emerald-500/20 backdrop-blur-sm hover:border-emerald-400/40">
                <CardHeader>
                  <CardTitle className="text-lg font-rajdhani text-emerald-300">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-sm font-exo bg-violet-500/10 text-violet-300 border-violet-500/30 hover:bg-violet-500/20">
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
      <section id="projects" className="py-20 px-6 bg-gradient-to-r from-indigo-800/50 to-violet-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">Featured Projects</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-indigo-800/50 to-violet-800/30 border-emerald-500/20 backdrop-blur-sm hover:border-emerald-400/40">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-violet-500/20 rounded-lg mr-3 border border-emerald-500/30">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl font-rajdhani text-emerald-300">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-slate-300 leading-relaxed font-exo">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-violet-300 mb-2 font-rajdhani">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs font-exo bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-violet-300 mb-1 font-rajdhani">Key Challenge:</h4>
                      <p className="text-sm text-slate-300 font-exo">{project.challenges}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-violet-300 mb-1 font-rajdhani">Outcome:</h4>
                      <p className="text-sm text-slate-300 font-exo">{project.outcomes}</p>
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
          <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">Certifications & Learning</h2>
          <Card className="bg-gradient-to-r from-emerald-900/30 to-violet-900/30 border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-rajdhani text-emerald-300">Current Certifications</h3>
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center text-slate-300 font-exo">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 font-rajdhani text-emerald-300">Platforms & Tools</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge className="justify-center py-2 bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 border-orange-500/30 font-exo">
                      <Database className="w-4 h-4 mr-1" />
                      AWS
                    </Badge>
                    <Badge className="justify-center py-2 bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/30 font-exo">
                      <Cloud className="w-4 h-4 mr-1" />
                      Azure
                    </Badge>
                    <Badge className="justify-center py-2 bg-violet-500/20 text-violet-300 hover:bg-violet-500/30 border-violet-500/30 font-exo">
                      <Server className="w-4 h-4 mr-1" />
                      Linux
                    </Badge>
                    <Badge className="justify-center py-2 bg-green-500/20 text-green-300 hover:bg-green-500/30 border-green-500/30 font-exo">
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
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-indigo-900 via-violet-900 to-fuchsia-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-exo">
            I'm always interested in discussing DevOps opportunities, cloud infrastructure projects, or collaborating on innovative solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="mailto:chandu419419@gmail.com"
              className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-800/50 to-violet-800/30 rounded-lg hover:from-indigo-700/50 hover:to-violet-700/30 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-400/40 backdrop-blur-sm"
            >
              <Mail className="w-8 h-8 mb-4 text-emerald-400" />
              <h3 className="text-lg font-semibold mb-2 font-rajdhani text-emerald-300">Email</h3>
              <p className="text-slate-300 font-exo">chandu419419@gmail.com</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/chandra-teja-reddy-0666a0331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-800/50 to-violet-800/30 rounded-lg hover:from-indigo-700/50 hover:to-violet-700/30 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-400/40 backdrop-blur-sm"
            >
              <Linkedin className="w-8 h-8 mb-4 text-violet-400" />
              <h3 className="text-lg font-semibold mb-2 font-rajdhani text-violet-300">LinkedIn</h3>
              <p className="text-slate-300 font-exo">Connect with me</p>
            </a>
            <a 
              href="https://github.com/chandratejaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-800/50 to-violet-800/30 rounded-lg hover:from-indigo-700/50 hover:to-violet-700/30 transition-all duration-300 border border-emerald-500/20 hover:border-emerald-400/40 backdrop-blur-sm"
            >
              <Github className="w-8 h-8 mb-4 text-fuchsia-400" />
              <h3 className="text-lg font-semibold mb-2 font-rajdhani text-fuchsia-300">GitHub</h3>
              <p className="text-slate-300 font-exo">@chandratejaa</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900/80 backdrop-blur-sm text-slate-400 py-8 px-6 border-t border-emerald-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-exo">&copy; 2024 Chandra Teja Reddy. Built with React and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
