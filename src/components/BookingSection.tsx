import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Crown, Calendar, Users, Mail, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    property: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Inquiry Sent!",
      description: "Our concierge team will contact you within 24 hours to confirm your royal reservation.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-royal-purple-dark via-royal-purple to-royal-purple-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 text-white">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-8 h-8 text-royal-gold" />
            <Badge variant="outline" className="border-royal-gold text-royal-gold bg-transparent">
              DIRECT BOOKING
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Reserve Your
            <span className="block text-royal-gold">Royal Experience</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Book directly with us and enjoy exclusive benefits, personalized service, and the best rates guaranteed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-royal-purple">
                Begin Your Royal Journey
              </CardTitle>
              <p className="text-muted-foreground">
                Complete the form below and our concierge team will craft your perfect getaway
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Property Selection & Dates */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="property" className="flex items-center gap-2">
                      <Crown className="w-4 h-4 text-royal-purple" />
                      Select Kingdom
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("property", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your kingdom" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fredonia">The Kingdom of Fredonia</SelectItem>
                        <SelectItem value="karaka">The Kingdom of Karaka</SelectItem>
                        <SelectItem value="both">Both Kingdoms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="checkIn" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-royal-purple" />
                      Check-in Date
                    </Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => handleInputChange("checkIn", e.target.value)}
                      className="focus:ring-royal-purple"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="checkOut" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-royal-purple" />
                      Check-out Date
                    </Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => handleInputChange("checkOut", e.target.value)}
                      className="focus:ring-royal-purple"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-royal-purple" />
                    Number of Guests
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("guests", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(12)].map((_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="focus:ring-royal-purple"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-royal-purple" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="focus:ring-royal-purple"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-royal-purple" />
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="focus:ring-royal-purple"
                  />
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-royal-purple" />
                    Special Requests or Questions
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about any special occasions, dietary requirements, or other requests..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="focus:ring-royal-purple resize-none"
                  />
                </div>

                {/* Benefits */}
                <div className="bg-royal-cream p-4 rounded-lg">
                  <h4 className="font-semibold text-royal-purple mb-3">Direct Booking Benefits:</h4>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      Best rate guarantee
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      No booking fees
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      24/7 concierge service
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      Flexible cancellation
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  variant="royal" 
                  size="xl" 
                  className="w-full"
                >
                  Send Booking Inquiry
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Our concierge team will respond within 24 hours to confirm availability and finalize your reservation.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;