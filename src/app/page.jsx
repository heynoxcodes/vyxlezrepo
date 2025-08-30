"use client";
import React from "react";
import {
  Home,
  User,
  Gamepad2,
  Handshake,
  Mail,
  Menu,
  X,
  Play,
  MessageCircle,
  ClipboardList,
  Code,
  CheckCircle2,
  Star,
  Check,
  Send,
  TrendingUp,
  Award,
  Archive
} from "lucide-react";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "payments", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const AnimatedCounter = ({ to, suffix, label, icon }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      const duration = 2000; // Animate over 2 seconds
      const step = to / (duration / 16); // Calculate increment per frame (for ~60fps)
      let current = 0;

      const timer = setInterval(() => {
        current += step;
        if (current >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [to]);

    return (
      <div className="text-center">
        {icon}
        <div className="text-4xl font-bold text-yellow-400 neon-text mt-2">
          {count}{suffix}
        </div>
        <p className="text-gray-400 mt-1 text-sm uppercase tracking-widest">{label}</p>
      </div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen font-mono relative isolate">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_200px,#facc152b,transparent)]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b-2 border-yellow-400 neon-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="text-2xl font-bold text-yellow-400 cursor-pointer neon-text flex items-center gap-2"
              onClick={() => scrollToSection("home")}
            >
              <Gamepad2 size={28} />
              <span>VYXLEZ</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home", icon: <Home size={16} /> },
                { id: "about", label: "About", icon: <User size={16} /> },
                { id: "projects", label: "Projects", icon: <Gamepad2 size={16} /> },
                { id: "payments", label: "Payments", icon: <Handshake size={16} /> },
                { id: "contact", label: "Contact", icon: <Mail size={16} /> },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 transition-all duration-300 hover:text-yellow-400 hover:neon-text px-3 py-2 border border-transparent hover:border-yellow-400 rounded ${
                    activeSection === item.id
                      ? "text-yellow-400 neon-text border-yellow-400"
                      : "text-white"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-yellow-400 neon-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 border-t-2 border-yellow-400 mobile-menu">
              {[
                { id: "home", label: "Home", icon: <Home size={18}/> },
                { id: "about", label: "About", icon: <User size={18}/> },
                { id: "projects", label: "Projects", icon: <Gamepad2 size={18}/> },
                { id: "payments", label: "Payments", icon: <Handshake size={18}/> },
                { id: "contact", label: "Contact", icon: <Mail size={18}/> },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full text-left px-4 py-3 hover:text-yellow-400 hover:neon-text transition-all duration-300 border-l-4 border-transparent hover:border-yellow-400 hover:bg-yellow-400/10 mobile-menu-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 pt-24">
        {/* Header */}
        <header
          id="home"
          className="text-center mb-16 min-h-screen flex flex-col justify-center relative"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 rounded-lg"
            style={{
              backgroundImage: "url('/images/vyxlogo.png')"
            }}
          ></div>
          
          {/* Content overlay */}
          <div className="relative z-10">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-800 rounded-full border-2 border-yellow-400 overflow-hidden">
              <img
                src="/images/vyxlogo.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400 neon-glow">
              VYXLEZ
            </h1>

            <div className="terminal-line text-green-400 text-lg mb-6">
              {">"} Roblox Game Builder
            </div>
            <div className="text-gray-400 mb-8">
              Creating immersive experiences in the Roblox metaverse
            </div>
            <button
              onClick={() => scrollToSection("projects")}
              className="mx-auto bg-yellow-400 text-black px-6 py-3 font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 border-2 border-yellow-400 hover:border-yellow-300 flex items-center gap-2"
            >
              <Play size={18} />
              <span>VIEW PROJECTS</span>
            </button>
          </div>
        </header>

        {/* About Section */}
        <section
          id="about"
          className="mb-16 min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text flex items-center gap-2">
            <User size={24} />
            <span>ABOUT ME</span>
          </h2>
          <div className="gaming-card bg-gray-900/50 p-6 border border-yellow-400/30 rounded-lg">
            <p className="text-gray-300 mb-8 leading-relaxed text-center">
              I'm a passionate Roblox developer specializing in creating
              engaging games and experiences. With years of experience in
              building, modeling, and scripting, I bring creative visions to
              life in the Roblox platform. I love crafting unique gameplay
              mechanics and stunning visual environments.
            </p>

            {/* Stats Counter */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 py-6 border-y-2 border-yellow-400/20">
               <AnimatedCounter 
                  to={400} 
                  suffix="M+" 
                  label="Total Visits" 
                  icon={<TrendingUp size={32} className="mx-auto text-yellow-400"/>} 
              />
              <AnimatedCounter 
                  to={100} 
                  suffix="+" 
                  label="Commissions" 
                  icon={<Award size={32} className="mx-auto text-yellow-400"/>} 
              />
              <AnimatedCounter 
                  to={150} 
                  suffix="+" 
                  label="Assets Created" 
                  icon={<Archive size={32} className="mx-auto text-yellow-400"/>} 
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  skill: "Building",
                  rating: "Expert",
                  color: "text-green-400",
                },
                {
                  skill: "Modelling",
                  rating: "Expert",
                  color: "text-green-400",
                },
                {
                  skill: "Animating",
                  rating: "Learning",
                  color: "text-yellow-400",
                },
                {
                  skill: "Scripting",
                  rating: "Learning",
                  color: "text-yellow-400",
                },
              ].map((item) => (
                <div
                  key={item.skill}
                  className="text-center p-3 bg-black/30 rounded border border-yellow-400/20"
                >
                  <div className="text-yellow-400 font-bold mb-1">
                    {item.skill}
                  </div>
                  <div className={`text-sm ${item.color}`}>{item.rating}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text flex items-center gap-2">
            <Gamepad2 size={24} />
            <span>PROJECTS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Forest Showcase",
                tech: "Building",
                description:
                  "A dark and unsettling forest showcase built in Roblox Studio. Fog drifts between the trees, shadows linger in the silence, and every corner hides a sense of mystery",
                image:
                  "/images/scary.png",
              },
              {
                title: "The Artisan Cafe",
                tech: "Building, Modeling, Physics",
                description:
                  "Step inside a warm and modern café built with detail and atmosphere. A relaxing showcase of interior design, lighting, and cozy vibes.",
                image:
                  "/images/club.PNG",
              },
              {
                title: "Haunted House",
                tech: "Building",
                description:
                  "A dark, atmospheric haunted house environment designed with detailed interiors, custom props, and eerie lighting. Built to create an immersive horror experience that emphasizes mood, tension, and exploration.",
                image:
                  "/images/horror.png",
              },
              {
                title: "Dead Sands",
                tech: "Advanced Building",
                description:
                  "Expansive desert-themed map created for the popular Roblox game “Dead Sands,” inspired by Dead Rails. Features abandoned structures, wide open roads, and desolate landscapes, contributing to immersive gameplay and supporting peak concurrency of over 20k players.",
                image:
                  "/images/road.png",
              },
              {
                title: "Go Kart Game Lobby",
                tech: "Building",
                description:
                  "Stylized lobby environment designed for a Go Kart racing game, featuring vibrant displays and interactive showcase areas. Inspired by RIVALS.",
                image:
                  "/images/room.png",
              },
              {
                title: "Death Penalty",
                tech: "Advanced Building and Modeling",
                description:
                  "Dark, industrial-themed map developed for the  game similar to “Death Penalty.” Built with advanced structural detailing and environmental storytelling.",
                image:
                  "/images/roulette.png",
              },
              {
                title: "Studded Style Map",
                tech: "Building",
                description:
                  "A custom-built map designed in the classic studded style, featuring clean geometry and nostalgic Roblox aesthetics. Crafted for my game, this build emphasizes simplicity, charm, and smooth playability while staying true to the original Roblox feel",
                image:
                  "/images/RobloxScreenShot20250829_175345634.png",
              },
              {
                title: "Castles Island",
                tech: "Advanced Building",
                description:
                  "Massive floating islands featuring intricately designed castles, bridges, and natural terrain. Built as a large-scale fantasy environment for YouTuber PPyth0n, blending architectural detail with expansive world design",
                image:
                  "/images/castles.png",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="gaming-card bg-gray-900/50 border border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-400/60 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={() => setSelectedImage(project.image)}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    {project.description}
                  </p>
                  <div className="text-yellow-400 text-sm font-mono">
                    {project.tech}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Payments Section */}
        <section id="payments" className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text flex items-center gap-2">
            <Handshake size={24}/>
            <span>PAYMENTS & COMMISSION</span>
          </h2>
          <div className="gaming-card bg-gray-900/50 p-6 border border-yellow-400/30 rounded-lg">
            <p className="text-gray-300 mb-8 text-center">
              Flexible payment plans are available. Prices are listed in Robux and are negotiable based on project scope.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                  { tier: "Basic Asset", price: "10K+", features: ["Small Props", "Single Room Build", "Basic Models"], color: "border-gray-500" },
                  { tier: "Standard Map", price: "50K+", features: ["Medium-Sized Map", "Detailed Assets", "Advanced Lighting"], color: "border-yellow-400", popular: true },
                  { tier: "Premium Experience", price: "150K+", features: ["Large Scale Map", "Full Game Assets", "Interactive Elements"], color: "border-green-400" }
              ].map((plan) => (
                <div key={plan.tier} className={`relative text-center p-6 bg-black/30 rounded-lg border-2 ${plan.color} transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10 hover:-translate-y-2 flex flex-col h-full`}>
                  {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Popular</div>}
                  <h3 className="text-white font-bold text-xl mb-2">{plan.tier}</h3>
                  <p className="text-yellow-400 text-3xl font-bold mb-4">{plan.price}</p>
                  <ul className="space-y-2 text-gray-400 mb-6 flex-grow">
                    {plan.features.map(f => <li key={f} className="flex items-center justify-center gap-2"><Check size={16} className="text-green-400"/><span>{f}</span></li>)}
                  </ul>
                  <button onClick={() => scrollToSection("contact")} className="w-full bg-yellow-400 text-black px-4 py-2 font-bold hover:bg-yellow-300 transition-all duration-300 mt-auto">
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
              <h3 className="text-yellow-400 font-bold mb-4 text-center text-lg flex items-center justify-center gap-2">
                <Star size={20} className="neon-text" />
                <span>My Commitment</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-center">
                  {[
                    { title: "Contact", icon: <MessageCircle size={24} className="mx-auto mb-2 text-yellow-400" />, desc: "Clear communication"},
                    { title: "Planning", icon: <ClipboardList size={24} className="mx-auto mb-2 text-yellow-400" />, desc: "Detailed project scope"},
                    { title: "Development", icon: <Code size={24} className="mx-auto mb-2 text-yellow-400" />, desc: "Regular progress updates"},
                    { title: "Delivery", icon: <CheckCircle2 size={24} className="mx-auto mb-2 text-yellow-400" />, desc: "Quality-tested final product"},
                  ].map(item => (
                    <div>
                        {item.icon}
                        <p className="text-gray-200">{item.desc}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 neon-text flex items-center gap-2">
            <Mail size={24} />
            <span>CONTACT</span>
          </h2>
          <div className="gaming-card bg-gray-900/50 p-6 border border-yellow-400/30 rounded-lg">
            <p className="text-gray-300 mb-6 text-center">
              Ready to collaborate on your next Roblox project? Let's create
              something amazing together!
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Mail size={28} />,
                  label: "Email",
                  value: "vyxlez@gmail.com",
                  color: "text-red-400",
                },
                {
                  icon: <Send size={28} />,
                  label: "Discord",
                  value: "vyxlez",
                  color: "text-purple-400",
                },
                {
                  icon: <Gamepad2 size={28} />,
                  label: "Roblox",
                  value: "aVyxlez",
                  color: "text-green-400",
                },
              ].map((contact, index) => (
                <div key={index} className="text-center p-4 bg-black/30 rounded border border-yellow-400/20">
                  <div className={`inline-block mb-2 ${contact.color}`}>{contact.icon}</div>
                  <div className="text-sm text-gray-400 mb-1">
                    {contact.label}
                  </div>
                  <div className="text-white font-mono text-sm">
                    {contact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-yellow-400/20">
          <p className="text-gray-500 text-sm">
            © 2025 Vyxlez. Made with <span className="text-yellow-400">❤️</span>{" "}
            and lots of Robux.
          </p>
        </footer>
      </div>

      {/* Image Modal Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex justify-center items-center p-4 modal-fade-in"
          onClick={() => setSelectedImage(null)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-black border-2 border-yellow-400/50 rounded-lg shadow-lg shadow-yellow-400/20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Project Showcase"
              className="rounded-lg object-contain max-w-full max-h-[85vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-full p-2 hover:bg-yellow-300 transition-all duration-300 shadow-lg"
              aria-label="Close image viewer"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx global>{`
        @keyframes neonGlow {
          0%, 100% { 
            text-shadow: 0 0 5px #facc15, 0 0 10px #facc15, 0 0 15px #facc15;
          }
          50% { 
            text-shadow: 0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15;
          }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        .neon-glow {
          animation: neonGlow 2s ease-in-out infinite;
        }

        .neon-text {
          text-shadow: 0 0 5px #facc15, 0 0 10px #facc15;
        }

        .neon-border {
          box-shadow: 0 0 10px rgba(250, 204, 21, 0.3);
        }

        .terminal-line {
          font-family: 'Courier New', monospace;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #22c55e;
          animation: blink-caret 1s step-end infinite;
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #22c55e; }
        }

        .gaming-card {
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(20,20,20,0.7) 100%);
          backdrop-filter: blur(5px);
        }

        .gaming-card:hover {
          box-shadow: 0 0 20px rgba(250, 204, 21, 0.1);
        }

        .mobile-menu {
          animation: slideDown 0.3s ease-out;
        }

        .mobile-menu-item {
          animation: fadeInUp 0.3s ease-out both;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Smooth scroll offset for fixed nav */
        section {
          scroll-margin-top: 80px;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
