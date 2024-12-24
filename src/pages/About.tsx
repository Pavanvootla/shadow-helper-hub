import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-6 text-custom-accent">About NextStep</h1>
        <div className="glass-card p-6 md:p-8 rounded-xl">
          <p className="text-lg text-foreground/80 leading-relaxed">
            NextStep is a leading platform connecting talented students with meaningful internship opportunities. 
            We partner with top companies across various industries to provide valuable work experience and 
            career development opportunities for aspiring professionals.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;