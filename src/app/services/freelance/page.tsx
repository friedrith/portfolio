import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  CheckCircle,
  Code,
  Palette,
  Zap,
  Users,
  Calendar,
  Shield,
  ChevronRight,
} from 'lucide-react'
import Link from 'next/link'

export default function FreelancePage() {
  const skills = [
    'React & Next.js',
    'TypeScript',
    'Node.js',
    'UI/UX Design',
    'AI Integration',
    'API Development',
    'Mobile Development',
    'DevOps & Deployment',
  ]

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Full-Stack Development',
      description:
        'Complete web applications from frontend to backend, built with modern technologies and best practices.',
      features: [
        'React/Next.js',
        'Node.js/Express',
        'AI Integration',
        'API Development',
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design & Development',
      description:
        'Beautiful, responsive interfaces that provide excellent user experiences across all devices.',
      features: [
        'Responsive Design',
        'User Interface',
        'Design Systems',
        'Prototyping',
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance Optimization',
      description:
        'Speed up your existing applications and improve user engagement with performance audits and optimizations.',
      features: [
        'Speed Optimization',
        'Accessibility Enhancements',
        'Code Refactoring',
        'Performance Monitoring',
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Technical Consulting',
      description:
        'Strategic guidance on technology decisions, architecture planning, and development roadmaps.',
      features: [
        'Architecture Audit',
        'Technology Stack',
        'Code Reviews',
        'Team Mentoring',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">
              Thibault Friedrich
            </h1>
            <Button asChild>
              <Link href="#contact">Book a Call</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">
              Available for New Projects
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Full-Stack Developer &{' '}
              <span className="text-primary">Technical Consultant</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I help businesses build modern web applications and optimize their
              digital presence. From concept to deployment, I deliver
              high-quality solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule a Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-4 text-center shadow-sm border"
                >
                  <span className="font-medium text-card-foreground">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Services I Offer
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions to help your business succeed in the
                digital world
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-primary">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      100% Satisfaction Guarantee
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      <strong>
                        Satisfied or 100% refunded for the first week for
                        non-technical teams
                      </strong>
                    </p>
                    <p className="text-muted-foreground">
                      I'm confident in the quality of my work. If you're not
                      completely satisfied with the progress in the first week,
                      I'll provide a full refund. Your success is my priority.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and see how I can help bring your
              vision to life. Book a free 30-minute consultation call.
            </p>

            <div className="bg-muted/50 rounded-lg p-8 mb-8 border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                What to expect in our call:
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Project Discussion
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We'll talk about your goals and requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Technical Planning
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      I'll outline the best approach for your project
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">
                      Timeline & Pricing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Clear timeline and transparent pricing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="mailto:thibault.friedrich@interaction-dynamics.io?subject=Freelance mission">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free Consultation Call
              </Link>
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              Usually respond within 24 hours • No commitment required
            </p>
          </div>
        </div>
      </section>
      <section className="text-center pt-10 pb-10">
        <Button variant="link" className="text-muted-foreground group" asChild>
          <Link href="/">
            Go back to portfolio
            <ChevronRight className="inline transition-all ml-0 group-hover:ml-1" />
          </Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Interaction Dynamics. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
