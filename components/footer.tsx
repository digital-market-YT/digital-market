import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, ShoppingBag, CreditCard, Shield, Download } from 'lucide-react';

export default function DigitalProductsFooter() {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Shop All Products', href: '#' },
    { name: 'New Arrivals', href: '#' },
    { name: 'Best Sellers', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  const customerService = [
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'How to Download', href: '#' },
    { name: 'License Terms', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' },
  ];

  const productCategories = [
    { name: 'T-Shirt Designs', href: '#' },
    { name: 'Mockup Bundles', href: '#' },
    { name: 'Pose Packs', href: '#' },
    { name: 'Graphics & Assets', href: '#' },
    { name: 'Custom Orders', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="bg-[#12121A] font-medium text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-8 h-8 text-[--primary]" />
              <h3 className="text-2xl font-bold text-[--foreground]">NextZShop</h3>
            </div>
            <p className="text-sm mb-6 text-[--muted-foreground]">
              Premium digital products for creators. High-quality designs, mockups, and assets ready for instant download.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[--card] rounded-lg flex items-center justify-center transition-all hover:bg-[--muted] hover:text-[--primary]"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[--foreground] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-indigo-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[--foreground] font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="text-sm hover:text-indigo-400 transition-colors">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-[--foreground] font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {customerService.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-indigo-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[--foreground] font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[--primary] flex-shrink-0 mt-0.5" />
                <a href="mailto:nextzshop.online@gmail.com" className="text-sm hover:text-[--primary] transition-colors">
                  nextzshop.online@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-[--secondary] flex-shrink-0 mt-0.5" />
                <a href="https://wa.me/917793930405" className="text-sm hover:text-[--secondary] transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[--accent] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Hyderabad, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-b border-[--border]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[--primary]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Download className="w-6 h-6 text-[--primary]" />
            </div>
            <div>
              <h5 className="text-[--foreground] font-semibold text-sm">Instant Download</h5>
              <p className="text-xs text-[--muted-foreground]">Get your files immediately</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[--secondary]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-[--secondary]" />
            </div>
            <div>
              <h5 className="text-[--foreground] font-semibold text-sm">Secure Payment</h5>
              <p className="text-xs text-[--muted-foreground]">100% safe & encrypted</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[--accent]/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-6 h-6 text-[--accent]" />
            </div>
            <div>
              <h5 className="text-[--foreground] font-semibold text-sm">Easy Checkout</h5>
              <p className="text-xs text-[--muted-foreground]">Quick & hassle-free</p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap gap-4 justify-center py-6 border-b border-[--border]">
          {legal.map((link, index) => (
            <span key={link.name} className="flex items-center gap-4">
              <a href={link.href} className="text-xs text-[--muted-foreground] hover:text-[--primary] transition-colors">
                {link.name}
              </a>
              {index < legal.length - 1 && <span className="text-gray-700">•</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[--card] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[--muted-foreground]">
              © 2026 NextZShop. All rights reserved. Powered by NextJs
            </p>
            
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">We Accept:</span>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-[--muted] rounded flex items-center justify-center text-[10px] font-bold text-[--foreground]">
                  UPI
                </div>
                <div className="w-10 h-6 bg-[--muted] rounded flex items-center justify-center text-[10px] font-bold text-[--foreground]">
                  VISA
                </div>
                <div className="w-10 h-6 bg-[--muted] rounded flex items-center justify-center text-[10px] font-bold text-[--foreground]">
                  GPay
                </div>
                <div className="w-10 h-6 bg-[--muted] rounded flex items-center justify-center text-[10px] font-bold text-[--foreground]">
                  Card
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}