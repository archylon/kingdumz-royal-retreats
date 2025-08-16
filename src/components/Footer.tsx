import { Crown, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import crownIcon from "@/assets/crown-icon.png";

const Footer = () => {
  return (
    <footer className="bg-royal-purple-dark text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={crownIcon} alt="Crown" className="w-10 h-10" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-royal-gold bg-clip-text text-transparent">
                Kingdumz
              </h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Experience the pinnacle of luxury hospitality in our exclusive royal properties. 
              Book directly for the best rates and personalized royal treatment.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-royal-gold hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-royal-gold hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-royal-gold hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-royal-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#properties" className="text-white/80 hover:text-royal-gold transition-colors">
                  Our Properties
                </a>
              </li>
              <li>
                <a href="#booking" className="text-white/80 hover:text-royal-gold transition-colors">
                  Book Direct
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-royal-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-royal-gold transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-royal-gold transition-colors">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-royal-gold transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-royal-gold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-royal-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">reservations@kingdumz.com</p>
                  <p className="text-white/60 text-sm">For bookings & inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-royal-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">+1 (555) 123-KING</p>
                  <p className="text-white/60 text-sm">24/7 Concierge Service</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-royal-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Exclusive Locations</p>
                  <p className="text-white/60 text-sm">Premium destinations worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Notice */}
        <div className="py-6 border-t border-white/20">
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <Crown className="w-6 h-6 text-royal-gold mx-auto mb-2" />
            <p className="text-white/80 text-sm">
              Powered by <span className="text-royal-gold font-semibold">Hospitable</span> for seamless property management
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Kingdumz Royal Retreats. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-royal-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-royal-gold transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-white/60 hover:text-royal-gold transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;