import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { RegistrationForm } from "@/components/RegistrationForm";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <RegistrationForm />
    </Layout>
  );
};

export default Index;