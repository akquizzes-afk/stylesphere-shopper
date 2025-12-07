import { Link } from 'react-router-dom';

const footerLinks = {
  shop: [
    { name: 'New Arrivals', href: '/shop?filter=new' },
    { name: 'Women', href: '/shop?category=women' },
    { name: 'Men', href: '/shop?category=men' },
    { name: 'Accessories', href: '/shop?category=accessories' },
  ],
  help: [
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Size Guide', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
  ],
  about: [
    { name: 'Our Story', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-display text-2xl mb-4">ATELIER</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Timeless pieces crafted with care. Modern essentials for the conscious wardrobe.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="max-w-md">
            <h3 className="text-xs tracking-widest uppercase mb-3 font-medium">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive access to new arrivals and special offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-background border border-border px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Atelier. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
