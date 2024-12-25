import { Layout } from "@/components/Layout";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { session } = useAuth();

  useEffect(() => {
    if (session) {
      navigate("/");
    }
  }, [session, navigate]);

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-md mx-auto glass-card rounded-xl p-6 md:p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#818CF8",
                    brandAccent: "#6366F1",
                  },
                },
              },
            }}
            providers={[]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Login;