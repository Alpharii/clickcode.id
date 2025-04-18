import { useState } from 'react';
import { NavLink } from '@remix-run/react';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        >
        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            {/* Logo */}
            <img src="/logo.png" alt="Clickcode Logo" className="h-8 w-8" />
            {/* Teks */}  
            Clickcode
        </NavLink>
        </motion.div>
        
        {/* Nav Items for Desktop */}
        <motion.div
          className="hidden md:flex gap-6 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary transition-colors ${
                  isActive ? 'text-primary font-bold' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>

        {/* CTA Button for Desktop */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild>
            <NavLink to="/contact">Hubungi Kami</NavLink>
          </Button>
        </motion.div>

        {/* Mobile Menu */}
        <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <DialogTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="p-6">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg text-gray-700 hover:text-primary transition-colors ${
                      isActive ? 'text-primary font-bold' : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Button asChild>
                <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Hubungi Kami
                </NavLink>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;