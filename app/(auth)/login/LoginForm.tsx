const LoginForm = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <input
        type="email"
        placeholder="Enter your email address..."
        className="px-3 py-2 rounded-sm bg-zinc-700 outline-none text-sm"
      />
      <button className="bg-red-500 text-zinc-200 font-semibold h-10 rounded-sm">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
