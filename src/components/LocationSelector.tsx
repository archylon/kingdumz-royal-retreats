import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import crownIcon from "@/assets/crown-icon.png";
import dragonFredonia from "@/assets/dragon-fredonia.png";
import dragonKaraka from "@/assets/dragon-karaka.png";

const LocationSelector = () => {
  const navigate = useNavigate();
  
  const locations = [
    {
      id: "fredonia",
      name: "Los Angeles",
      kingdom: "The Kingdom of Fredonia",
      dragon: dragonFredonia,
      url: "/fredonia",
      description: "Royal retreat in the heart of Los Angeles",
      accent: "from-royal-purple to-royal-purple-light",
      glowColor: "shadow-royal-purple/20",
      isExternal: false
    },
    {
      id: "karaka", 
      name: "New Zealand",
      kingdom: "The Kingdom of Karaka",
      dragon: dragonKaraka,
      url: "https://karaka.kingdumz.com",
      description: "Majestic estate in beautiful New Zealand", 
      accent: "from-emerald-600 to-emerald-400",
      glowColor: "shadow-emerald-500/20",
      isExternal: true
    }
  ];

  const handleLocationSelect = (path: string, isExternal: boolean) => {
    if (isExternal) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-purple-dark via-royal-purple to-royal-purple-light relative overflow-hidden">
      {/* Magical floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-royal-gold/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-white/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-royal-gold/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-6xl">
          {/* Elegant Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <img src={crownIcon} alt="Crown" className="w-16 h-16 mx-auto mb-4 drop-shadow-lg animate-float" />
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                <span className="bg-gradient-to-r from-white via-royal-gold to-white bg-clip-text text-transparent">
                  Kingdumz
                </span>
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-full blur-xl"></div>
            </div>
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-4xl text-white/95 font-light">
                Where do you want to go?
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Discover enchanted kingdoms where luxury meets whimsy. 
                Choose your royal adventure and experience vacation rentals like never before.
              </p>
            </div>
          </div>

          {/* Whimsical Location Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {locations.map((location) => (
              <div 
                key={location.id}
                className="group cursor-pointer"
                onClick={() => handleLocationSelect(location.url, location.isExternal)}
              >
                <div className="relative">
                  {/* Magical glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${location.accent} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                  
                  {/* Main card */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl">
                    {/* Dragon Realm */}
                    <div className="relative p-12 text-center bg-gradient-to-br from-white to-gray-50/50">
                      <div className="relative z-10">
                        <img 
                          src={location.dragon} 
                          alt={`${location.kingdom} Dragon Guardian`}
                          className="w-40 h-40 mx-auto mb-6 drop-shadow-lg group-hover:scale-105 transition-transform duration-500 group-hover:animate-bounce"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${location.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-t-3xl`}></div>
                      </div>
                      
                      {/* Floating sparkles */}
                      <div className="absolute top-8 left-8 w-1 h-1 bg-royal-gold rounded-full opacity-60 animate-pulse"></div>
                      <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-royal-gold rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
                      <div className="absolute bottom-8 left-1/3 w-1 h-1 bg-royal-gold rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
                    </div>

                    {/* Kingdom Details */}
                    <div className="p-8 space-y-4">
                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <MapPin className="w-5 h-5 text-royal-gold" />
                        <h3 className="text-2xl font-bold text-royal-purple">
                          {location.name}
                        </h3>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-foreground/90 mb-3">
                        {location.kingdom}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed mb-8">
                        {location.description}
                      </p>
                      
                      <div className="relative">
                        <Button 
                          variant="royal" 
                          className="w-full py-4 text-lg font-semibold rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                          size="lg"
                        >
                          <span className="flex items-center justify-center space-x-2">
                            <span>Enter Kingdom</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Elegant Call-to-Action */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto border border-white/20">
                <Crown className="w-8 h-8 text-royal-gold mx-auto mb-4 animate-float" />
                <p className="text-white/95 text-lg leading-relaxed">
                  Experience the magic of direct booking — 
                  <span className="font-semibold text-royal-gold"> no fees, best rates, </span>
                  and royal treatment at both enchanted locations
                </p>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-royal-gold/10 to-transparent rounded-3xl blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;