import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Shield, User, Mail, GraduationCap, BookOpen } from "lucide-react";

export const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    major: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "We'll be in touch with internship opportunities soon.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="max-w-md mx-auto glass-card rounded-xl p-6 md:p-8 animate-fade-in">
        <div className="flex items-center justify-center mb-6">
          <Shield className="w-8 h-8 text-custom-accent" />
          <h2 className="text-2xl font-semibold ml-2">Secure Registration</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="flex items-center space-x-2">
              <User className="w-4 h-4 text-custom-accent" />
              <span>Full Name</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="cyber-input"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-custom-accent" />
              <span>Email</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@university.edu"
              value={formData.email}
              onChange={handleChange}
              className="cyber-input"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="university" className="flex items-center space-x-2">
              <GraduationCap className="w-4 h-4 text-custom-accent" />
              <span>University</span>
            </Label>
            <Input
              id="university"
              name="university"
              placeholder="University of Technology"
              value={formData.university}
              onChange={handleChange}
              className="cyber-input"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="major" className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-custom-accent" />
              <span>Major</span>
            </Label>
            <Input
              id="major"
              name="major"
              placeholder="Computer Science"
              value={formData.major}
              onChange={handleChange}
              className="cyber-input"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-custom-accent hover:bg-custom-accent/90 cyber-button"
          >
            Register Now
          </Button>
        </form>
      </div>
    </div>
  );
};