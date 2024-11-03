"use client";

import { useState, useEffect } from 'react';
import { ChevronRight, Heart, Users, BookOpen, Helping, Coffee, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80",
    title: "Building Stronger Communities Together"
  },
  {
    url: "https://images.unsplash.com/photo-1544374892-c046c9ec5a97?auto=format&fit=crop&q=80",
    title: "Empowering Lives, Creating Change"
  },
  {
    url: "https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?auto=format&fit=crop&q=80",
    title: "Making a Difference Every Day"
  }
];

const services = [
  {
    icon: <Heart className="w-12 h-12 text-purple-600" />,
    title: "Community Support",
    description: "Providing essential resources and support to strengthen our community bonds."
  },
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    title: "Education Programs",
    description: "Empowering individuals through knowledge and skill development initiatives."
  },
  {
    icon: <BookOpen className="w-12 h-12 text-purple-600" />,
    title: "Youth Development",
    description: "Nurturing young minds and creating opportunities for future leaders."
  },
  {
    icon: <Helping className="w-12 h-12 text-purple-600" />,
    title: "Health & Wellness",
    description: "Promoting healthy living and providing access to essential health resources."
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559024093-f43249629d68?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559024670-59da35645ba3?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559024670-b813e7f483cd?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559024670-b813e7f483cd?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1559024670-b813e7f483cd?auto=format&fit=crop&q=80"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Coffee className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-purple-600">CommunityCare</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 px-3 py-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 px-3 py-2">About</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 px-3 py-2">Services</a>
              <a href="#donate" className="text-gray-700 hover:text-purple-600 px-3 py-2">Donate</a>
              <a href="#gallery" className="text-gray-700 hover:text-purple-600 px-3 py-2">Gallery</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative h-[600px] w-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={slide.url}
                alt={slide.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{slide.title}</h1>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Get Involved <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559024670-b813e7f483cd?auto=format&fit=crop&q=80"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                We are dedicated to empowering individuals and strengthening communities through
                comprehensive support, education, and resources. Our commitment to positive change
                drives everything we do.
              </p>
              <p className="text-gray-600 mb-6">
                Through collaborative partnerships and innovative programs, we create lasting impact
                that transforms lives and builds resilient communities.
              </p>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600">
              Empowering individuals and communities through holistic support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Support Our Cause</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Make a Difference Today</h3>
              <p className="mb-6">
                Your contribution helps us continue our mission of supporting and empowering
                communities. Every donation makes a real difference in someone's life.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Donate Now
                </Button>
                <Button size="lg" variant="outline" className="border-white hover:bg-purple-700">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-4">
                <h4 className="text-purple-600 font-semibold text-xl mb-4">Choose Amount</h4>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline" className="border-purple-600 text-purple-600">$25</Button>
                  <Button variant="outline" className="border-purple-600 text-purple-600">$50</Button>
                  <Button variant="outline" className="border-purple-600 text-purple-600">$100</Button>
                </div>
                <Input type="number" placeholder="Custom Amount" className="mt-4" />
                <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-4">
                  Continue to Donate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Gallery</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How can I get involved?</AccordionTrigger>
              <AccordionContent>
                There are many ways to get involved! You can volunteer, donate, or participate in our
                community programs. Contact us to learn more about current opportunities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Where do my donations go?</AccordionTrigger>
              <AccordionContent>
                Your donations directly support our community programs, education initiatives, and
                support services. We ensure transparent use of all contributions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What areas do you serve?</AccordionTrigger>
              <AccordionContent>
                We primarily serve the local community but have programs that extend throughout the
                region. Contact us to learn about services in your area.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">CommunityCare</h3>
              <p className="text-gray-400">
                Empowering communities, transforming lives, building a better future together.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-400">123 Community Street</p>
              <p className="text-gray-400">City, State 12345</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@communitycare.org</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-purple-400">Home</a></li>
                <li><a href="#about" className="hover:text-purple-400">About</a></li>
                <li><a href="#services" className="hover:text-purple-400">Services</a></li>
                <li><a href="#donate" className="hover:text-purple-400">Donate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and events.</p>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Subscribe
                </Button>
              </div>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CommunityCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}