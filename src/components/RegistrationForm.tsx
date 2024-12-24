import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

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
        <h2 className="text-2xl font-semibold mb-6 text-center">Register for Internships</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-secondary/50"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@university.edu"
              value={formData.email}
              onChange={handleChange}
              className="bg-secondary/50"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="university">University</Label>
            <Input
              id="university"
              name="university"
              placeholder="University of Technology"
              value={formData.university}
              onChange={handleChange}
              className="bg-secondary/50"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="major">Major</Label>
            <Input
              id="major"
              name="major"
              placeholder="Computer Science"
              value={formData.major}
              onChange={handleChange}
              className="bg-secondary/50"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
            Register Now
          </Button>
        </form>
      </div>
    </div>
  );
};