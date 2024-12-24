import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-12 text-center">
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
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
      >
        Launch your career with NextStep. Connect with top companies and kickstart your professional journey through meaningful internships.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link to="/internships">
          <Button className="bg-custom-accent hover:bg-custom-accent/90">
            Browse Internships
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};