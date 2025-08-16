import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Bed, Bath, Star } from "lucide-react";
import dragonFredonia from "@/assets/dragon-fredonia.png";
import fredoniaImage from "@/assets/fredonia-interior.jpg";

const FredoniaPage = () => {
  const property = {
    name: "The Kingdom of Fredonia",
    location: "Los Angeles, California",
    dragon: dragonFredonia,
    image: fredoniaImage,
    price: "$350",
    rating: 4.9,
    reviews: 127,
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    features: ["WiFi", "Parking", "Kitchen", "Pool", "Hot Tub", "Garden"],
    description: "A majestic royal retreat featuring opulent interiors, private grounds, and world-class amenities. Located in the heart of Los Angeles, this extraordinary property offers the perfect blend of luxury and convenience for your royal celebration or luxury getaway.",
    longDescription: "Step into a world of unparalleled luxury at The Kingdom of Fredonia. This stunning Los Angeles property combines royal elegance with modern sophistication, featuring four beautifully appointed bedrooms, three luxurious bathrooms, and an array of premium amenities. The property boasts a private pool, relaxing hot tub, and meticulously landscaped gardens that provide a serene oasis in the bustling city.",
    amenities: [
      "Private Swimming Pool",
      "Hot Tub & Spa",
      "Gourmet Kitchen",
      "Private Garden",
      "High-Speed WiFi",
      "Parking for 4 Cars",
      "Air Conditioning",
      "Smart TV & Entertainment",
      "Luxury Linens",
      "24/7 Concierge Support"
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
            <div className="absolute inset-0 bg-gradient-to-r from-royal-purple-dark/80 via-royal-purple/60 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-white max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="mb-6 flex items-center space-x-2">
                  <span className="text-royal-gold font-semibold text-lg tracking-wide">LOS ANGELES</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {property.name}
                </h1>
                
                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  {property.longDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gold" size="xl" className="group">
                    Book Your Stay
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline-royal" size="xl">
                    View Gallery
                  </Button>
                </div>
              </div>

              {/* Dragon Mascot */}
              <div className="text-center lg:text-right">
                <img 
                  src={property.dragon} 
                  alt="Fredonia Dragon Mascot"
                  className="w-64 h-64 mx-auto lg:mx-0 lg:ml-auto animate-float"
                />
                <p className="text-royal-gold font-semibold mt-4">
                  Welcome to your royal adventure!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Property Details - Modified to show single property */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Property Card */}
              <Card className="overflow-hidden shadow-royal">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      <Star className="w-3 h-3 mr-1 fill-royal-gold text-royal-gold" />
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
                        <div className="text-center p-4 bg-royal-cream rounded-lg">
                          <Users className="w-6 h-6 mx-auto mb-2 text-royal-purple" />
                          <div className="font-semibold">{property.maxGuests}</div>
                          <div className="text-sm text-muted-foreground">Guests</div>
                        </div>
                        <div className="text-center p-4 bg-royal-cream rounded-lg">
                          <Bed className="w-6 h-6 mx-auto mb-2 text-royal-purple" />
                          <div className="font-semibold">{property.bedrooms}</div>
                          <div className="text-sm text-muted-foreground">Bedrooms</div>
                        </div>
                        <div className="text-center p-4 bg-royal-cream rounded-lg">
                          <Bath className="w-6 h-6 mx-auto mb-2 text-royal-purple" />
                          <div className="font-semibold">{property.bathrooms}</div>
                          <div className="text-sm text-muted-foreground">Bathrooms</div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {property.description}
                      </p>

                      <div className="text-right">
                        <div className="text-4xl font-bold text-royal-purple mb-2">
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
                            <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
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

export default FredoniaPage;