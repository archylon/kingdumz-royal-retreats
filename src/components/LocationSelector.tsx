import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight, Crown } from "lucide-react";
import crownIcon from "@/assets/crown-icon.png";
import dragonFredonia from "@/assets/dragon-fredonia.png";
import dragonKaraka from "@/assets/dragon-karaka.png";

const LocationSelector = () => {
  const locations = [
    {
      id: "fredonia",
      name: "Los Angeles",
      kingdom: "The Kingdom of Fredonia",
      dragon: dragonFredonia,
      url: "https://fredonia.kingdumz.com",
      description: "Royal retreat in the heart of Los Angeles",
      accent: "from-royal-purple to-royal-purple-light"
    },
    {
      id: "karaka", 
      name: "New Zealand",
      kingdom: "The Kingdom of Karaka",
      dragon: dragonKaraka,
      url: "https://karaka.kingdumz.com",
      description: "Majestic estate in beautiful New Zealand", 
      accent: "from-emerald-600 to-emerald-400"
    }
  ];

  const handleLocationSelect = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-royal-purple-dark via-royal-purple to-royal-purple-light flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src={crownIcon} alt="Crown" className="w-12 h-12" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Kingdumz
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Choose Your Royal Destination
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            Select your preferred location to explore our luxury royal properties and begin your extraordinary journey
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <Card 
              key={location.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 overflow-hidden"
              onClick={() => handleLocationSelect(location.url)}
            >
              <CardContent className="p-0">
                {/* Dragon Mascot */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-8 text-center">
                  <img 
                    src={location.dragon} 
                    alt={`${location.kingdom} Dragon Mascot`}
                    className="w-32 h-32 mx-auto mb-4 group-hover:animate-bounce"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${location.accent} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-royal-gold mr-2" />
                    <h2 className="text-2xl font-bold text-royal-purple">
                      {location.name}
                    </h2>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {location.kingdom}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {location.description}
                  </p>
                  
                  <Button 
                    variant="royal" 
                    className="w-full group-hover:shadow-lg"
                    size="lg"
                  >
                    Enter Kingdom
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <Crown className="w-6 h-6 text-royal-gold mx-auto mb-3" />
            <p className="text-white/90 text-sm">
              Book directly with us for the best rates, no booking fees, and exclusive royal treatment at both locations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;