import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "./ui/button";
import { LogIn, LogOut } from "lucide-react";

export const Navbar = () => {
  const { session, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-custom-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-custom-accent">
            NextStep
          </Link>
          <div className="flex items-center space-x-8">
            <Link
              to="/about"
              className="text-foreground/80 hover:text-custom-accent transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/internships"
              className="text-foreground/80 hover:text-custom-accent transition-colors"
            >
              Internships
            </Link>
            {session ? (
              <Button
                variant="ghost"
                className="text-foreground/80 hover:text-custom-accent"
                onClick={signOut}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="text-foreground/80 hover:text-custom-accent"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};