"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [previousScrollY, setPreviousScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < previousScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > 100) {
        setIsVisible(false);
      }

      setIsScrolled(currentScrollY > 10);
      setPreviousScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [previousScrollY]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "dark:bg-slate-900/80 bg-white/80 backdrop-blur-lg dark:border-b dark:border-white/10 border-b border-gray-200/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#home" className="shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Azhar
              </span>
            </Link>
          </motion.div>

          {/* Nav Links - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ y: -2 }}>
                <Link
                  href={link.href}
                  className="dark:text-gray-300 text-gray-700 dark:hover:text-blue-400 hover:text-blue-600 transition-colors font-medium text-sm relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle theme"
                  size="icon"
                  className="dark:border-white/20 dark:hover:bg-white/10"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
              </motion.div>
            )}

            {/* Let's Talk Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "rounded-full hidden sm:inline-flex",
                )}
              >
                Let's Talk <ArrowRight size={16} className="ml-1" />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden dark:hover:bg-white/10"
                variant="ghost"
                size="icon"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden dark:bg-slate-900/95 bg-white/95 backdrop-blur-lg dark:border-b dark:border-white/10 border-b border-gray-200/50"
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={
                isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="block px-3 py-2 rounded-lg dark:text-gray-300 text-gray-700 dark:hover:bg-white/10 hover:bg-gray-100 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={
              isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
            }
            transition={{ delay: 0.4 }}
          >
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full justify-center rounded-lg mt-2",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
