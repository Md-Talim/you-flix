const LoginPage = () => {
  return (
    <section>
      <div className="bg-zinc-800 mx-auto my-28 flex flex-col gap-y-8 p-6 rounded-lg w-80">
        <h1 className="text-3xl font-semibold text-zinc-300">Signin</h1>
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
      </div>
    </section>
  );
};

export default LoginPage;
