import { Layout } from "@/components/Layout";
import { RegistrationForm } from "@/components/RegistrationForm";

const Internships = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold mb-6 text-custom-accent">Available Internships</h1>
        <RegistrationForm />
      </div>
    </Layout>
  );
};

export default Internships;