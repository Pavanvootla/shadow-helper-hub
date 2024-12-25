import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Shield, LayoutGrid } from "lucide-react";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mb-6"
      >
        <Shield className="w-12 h-12 text-custom-accent" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-6"
      >
        Welcome to NextStep
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
      >
        Launch your career with specialized internships in UI/UX Design and Cybersecurity. Connect with leading firms and kickstart your professional journey.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
      >
        <div className="glass-card p-6 text-left">
          <LayoutGrid className="w-8 h-8 text-custom-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-muted-foreground mb-4">
            Create intuitive and beautiful user experiences. Learn from industry experts and build a stunning portfolio.
          </p>
        </div>
        <div className="glass-card p-6 text-left">
          <Shield className="w-8 h-8 text-custom-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
          <p className="text-muted-foreground mb-4">
            Protect digital assets and learn about the latest security practices. Get hands-on experience in cyber defense.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link to="/internships">
          <Button className="bg-custom-accent hover:bg-custom-accent/90 cyber-button">
            Browse Internships
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};