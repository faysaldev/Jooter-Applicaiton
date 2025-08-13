// Login Page Component
import AuthLayout from '@/components/Auth/AuthLayout';
import RestForm from '@/components/ResetPassword/RestForm';

const Login = () => {
  return (
    <AuthLayout>
      <RestForm />
    </AuthLayout>
  );
};

export default Login;