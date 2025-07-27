import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Send,
  CheckCircle,
  Clock,
  Users,
  Headphones
} from 'lucide-react';
import Button from '../common/Buttons/ButtonComponent';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@knockoutzone.com",
      action: "Send Email",
      gradient: "from-primary/20 to-secondary/20",
      color: "text-primary"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      action: "Start Chat",
      gradient: "from-secondary/20 to-accent/20",
      color: "text-secondary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Call us directly",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      gradient: "from-accent/20 to-primary/20",
      color: "text-accent"
    }
  ];

  const supportStats = [
    {
      icon: <Clock className="w-5 h-5" />,
      stat: "< 2 hours",
      label: "Average Response Time"
    },
    {
      icon: <Users className="w-5 h-5" />,
      stat: "98%",
      label: "Customer Satisfaction"
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      stat: "24/7",
      label: "Support Available"
    }
  ];

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50"></div>
        
        {/* Floating elements */}
        <div className="absolute top-32 left-20 w-48 h-48 bg-gradient-to-r from-primary/8 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-64 h-64 bg-gradient-to-r from-secondary/8 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Contact Our Team
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about KnockOutZone? Need help setting up your tournament? 
            Our expert team is here to help you succeed.
          </p>
        </div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r ${method.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`${method.color} group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                <p className="text-foreground font-medium mb-6">{method.contact}</p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-white/5 backdrop-blur-md border-white/20 hover:bg-white/10 hover:border-white/30"
                >
                  {method.action}
                </Button>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
            </div>
          ))}
        </div>

        {/* Main contact form and info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <Button 
                type="submit"
                variant="primary" 
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </div>

          {/* Contact info and stats */}
          <div className="space-y-8">
            {/* Office info */}
            <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Our Office
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">KnockOutZone HQ</h4>
                  <p className="text-muted-foreground">
                    123 Gaming Street<br />
                    Tech District, CA 94105<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                    Saturday: 10:00 AM - 4:00 PM PST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Support stats */}
            <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Support Promise</h3>
              
              <div className="grid grid-cols-1 gap-6">
                {supportStats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl">
                      <div className="text-primary">
                        {stat.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-foreground">{stat.stat}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-game-success/10 to-primary/10 rounded-2xl border border-game-success/20">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-game-success flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-game-success">Guaranteed Response</h4>
                    <p className="text-xs text-muted-foreground">We respond to all inquiries within 2 business hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ link */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground mb-4">
              Find quick answers to common questions about KnockOutZone
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white/5 backdrop-blur-md border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60"
            >
              View FAQ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
