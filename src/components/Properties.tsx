import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Users, 
  Bed, 
  Bath, 
  Wifi, 
  Car, 
  Utensils, 
  Star,
  Calendar,
  ArrowRight
} from "lucide-react";
import fredoniaImage from "@/assets/fredonia-interior.jpg";
import karakaImage from "@/assets/karaka-exterior.jpg";

const Properties = () => {
  const properties = [
    {
      id: 1,
      name: "The Kingdom of Fredonia",
      location: "Premium Location",
      image: fredoniaImage,
      price: "$350",
      rating: 4.9,
      reviews: 127,
      maxGuests: 8,
      bedrooms: 4,
      bathrooms: 3,
      features: ["WiFi", "Parking", "Kitchen", "Pool"],
      description: "A majestic royal retreat featuring opulent interiors, private grounds, and world-class amenities. Perfect for royal celebrations and luxury getaways.",
      availability: "Available",
    },
    {
      id: 2,
      name: "The Kingdom of Karaka",
      location: "Exclusive Estate",
      image: karakaImage,
      price: "$425",
      rating: 5.0,
      reviews: 89,
      maxGuests: 12,
      bedrooms: 6,
      bathrooms: 4,
      features: ["WiFi", "Parking", "Kitchen", "Spa"],
      description: "An extraordinary palatial estate with breathtaking architecture, luxury spa facilities, and panoramic views. The ultimate in royal hospitality.",
      availability: "Available",
    }
  ];

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "WiFi": return <Wifi className="w-4 h-4" />;
      case "Parking": return <Car className="w-4 h-4" />;
      case "Kitchen": return <Utensils className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <section id="properties" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-royal-purple border-royal-purple">
            OUR ROYAL PROPERTIES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your
            <span className="block text-royal-purple">Royal Kingdom</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each property offers a unique royal experience with luxury amenities and exceptional service.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-royal transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-royal-gold text-royal-purple font-semibold">
                    {property.availability}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    <Star className="w-3 h-3 mr-1 fill-royal-gold text-royal-gold" />
                    {property.rating} ({property.reviews})
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {property.name}
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-royal-purple">
                      {property.price}
                    </div>
                    <div className="text-sm text-muted-foreground">per night</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {property.description}
                </p>

                {/* Property Details */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-royal-purple" />
                    {property.maxGuests} guests
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-2 text-royal-purple" />
                    {property.bedrooms} bedrooms
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-2 text-royal-purple" />
                    {property.bathrooms} bathrooms
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="flex items-center gap-1">
                      {getFeatureIcon(feature)}
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="royal" className="flex-1 group">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Need help choosing the perfect kingdom for your stay?
          </p>
          <Button variant="outline-royal" size="lg">
            Contact Our Concierge
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;