import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-6 text-custom-accent">About NextStep</h1>
        <div className="glass-card p-6 md:p-8 rounded-xl">
          <p className="text-lg text-foreground/80 leading-relaxed">
            NextStep is a leading platform dedicated to connecting talented students with valuable internship opportunities. 
            We partner with top companies across various industries to provide hands-on experience through carefully curated 
            internship programs. Our mission is to help students take their first steps into the professional world through 
            meaningful internship experiences.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;