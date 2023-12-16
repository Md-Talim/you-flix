import LoginForm from './LoginForm';

const LoginPage = () => (
  <section>
    <div className="bg-zinc-800 mx-auto my-28 flex flex-col gap-y-8 p-6 rounded-lg w-80">
      <h1 className="text-3xl font-semibold text-zinc-300">Signin</h1>
      <LoginForm />
    </div>
  </section>
);

export default LoginPage;
