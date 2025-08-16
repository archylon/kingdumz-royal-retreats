import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-castle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Royal Property" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-purple-dark/80 via-royal-purple/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl">
        <div className="mb-6 flex items-center justify-center space-x-2">
          <Crown className="w-8 h-8 text-royal-gold" />
          <span className="text-royal-gold font-semibold text-lg tracking-wide">LUXURY DIRECT BOOKING</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to the
          <span className="block bg-gradient-to-r from-royal-gold to-royal-gold-light bg-clip-text text-transparent">
            Royal Kingdoms
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Experience unparalleled luxury in our exclusive royal properties. 
          Book directly and save on fees while enjoying premium hospitality.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-royal-gold" />
            <span>5-Star Luxury</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-royal-gold" />
            <span>Prime Locations</span>
          </div>
          <div className="flex items-center space-x-2">
            <Crown className="w-5 h-5 text-royal-gold" />
            <span>Royal Treatment</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="gold" size="xl" className="group">
            Explore Properties
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline-royal" size="xl">
            View Availability
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;