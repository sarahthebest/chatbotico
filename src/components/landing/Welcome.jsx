const Welcome = () => {
  return (
    <div className="welcome pt-2 pb-6 flex flex-col gap-2 text-white">
      <h1 className="text-6xl font-bitmap">Beep boop!</h1>
      <p className="text-xl">
        Welcome to ChatBotico, a private messaging app. <br/> Sign in or create an
        account to get started.
      </p>
    </div>
  );
};

export default Welcome;
