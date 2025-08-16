import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import dragonKaraka from "@/assets/dragon-karaka.png";
import karakaImage from "@/assets/karaka-exterior.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Bed, Bath, Star } from "lucide-react";

const KarakaPage = () => {
  const property = {
    name: "The Kingdom of Karaka",
    location: "New Zealand",
    dragon: dragonKaraka,
    image: karakaImage,
    price: "$425",
    rating: 5.0,
    reviews: 89,
    maxGuests: 12,
    bedrooms: 6,
    bathrooms: 4,
    features: ["WiFi", "Parking", "Kitchen", "Spa", "Views", "Garden"],
    description: "An extraordinary palatial estate with breathtaking architecture, luxury spa facilities, and panoramic views. Located in the stunning landscapes of New Zealand, this property offers the ultimate in royal hospitality with unmatched natural beauty.",
    longDescription: "Discover the majesty of The Kingdom of Karaka, an unparalleled luxury estate nestled in New Zealand's pristine landscape. This palatial property features six elegantly appointed bedrooms, four spa-like bathrooms, and world-class amenities that redefine luxury hospitality. With panoramic views of New Zealand's breathtaking scenery and private spa facilities, every moment here is designed to exceed your highest expectations.",
    amenities: [
      "Private Spa & Wellness Center",
      "Panoramic Mountain Views",
      "Gourmet Chef's Kitchen",
      "Private Gardens & Grounds",
      "High-Speed Starlink WiFi",
      "Private Parking",
      "Climate Control",
      "Entertainment Systems",
      "Premium Linens & Amenities",
      "24/7 Concierge Support",
      "Outdoor Dining Areas",
      "Nature Walking Trails"
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Property-specific Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={property.image} 
              alt={property.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/60 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-white max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="mb-6 flex items-center space-x-2">
                  <span className="text-emerald-300 font-semibold text-lg tracking-wide">NEW ZEALAND</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {property.name}
                </h1>
                
                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  {property.longDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="gold" 
                    size="xl" 
                    className="group bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-600 hover:to-emerald-500"
                  >
                    Book Your Stay
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline-royal" 
                    size="xl"
                    className="border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-emerald-900"
                  >
                    View Gallery
                  </Button>
                </div>
              </div>

              {/* Dragon Mascot */}
              <div className="text-center lg:text-right">
                <img 
                  src={property.dragon} 
                  alt="Karaka Dragon Mascot"
                  className="w-64 h-64 mx-auto lg:mx-0 lg:ml-auto animate-float"
                />
                <p className="text-emerald-300 font-semibold mt-4">
                  Welcome to your royal adventure!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-elegant border-emerald-200">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      <Star className="w-3 h-3 mr-1 fill-emerald-500 text-emerald-500" />
                      {property.rating} ({property.reviews} reviews)
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Property Info */}
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        Property Details
                      </h3>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                          <Users className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                          <div className="font-semibold">{property.maxGuests}</div>
                          <div className="text-sm text-muted-foreground">Guests</div>
                        </div>
                        <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                          <Bed className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                          <div className="font-semibold">{property.bedrooms}</div>
                          <div className="text-sm text-muted-foreground">Bedrooms</div>
                        </div>
                        <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                          <Bath className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                          <div className="font-semibold">{property.bathrooms}</div>
                          <div className="text-sm text-muted-foreground">Bathrooms</div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {property.description}
                      </p>

                      <div className="text-right">
                        <div className="text-4xl font-bold text-emerald-600 mb-2">
                          {property.price}
                        </div>
                        <div className="text-muted-foreground">per night</div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-4">
                        Luxury Amenities
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {property.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-foreground">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default KarakaPage;