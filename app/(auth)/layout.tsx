import { Metadata } from 'next';
import Logo from '../../components/Logo';

export const metadata: Metadata = {
  title: 'YouFlix Signin',
  description:
    'Save your favorite videos, by creating an account or login into YouFlix',
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-screen max-h-screen bg-auth-image bg-center bg-cover bg-no-repeat w-full">
        <header className="p-10">
          <Logo />
        </header>

        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
};

export default AuthLayout;
