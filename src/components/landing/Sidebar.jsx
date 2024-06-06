const Sidebar = () => {
  return (
    <div className="sidebar p-4 relative h-full mb-0 w-1/4 bg-neutral flex flex-col overflow-hidden justify-between">
      <div className="preview">
        <h2 className="font-bitmap text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Beep boop Beep boop Beep boop Beep boop Beep boop Beep boop</h2>
        <div className="accordion text-white join join-vertical gap-4 w-full rounded-md mt-4">
          <div className="collapse collapse-plus border">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Private messaging 🕵️‍♀️
            </div>
            <div className="collapse-content">
              <p>
                Our platform offers secure and private messaging to ensure that your conversations remain confidential. You can chat with other users seamlessly and with peace of mind, knowing that your data is protected by our state-of-the-art encryption.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Secure platform 👩‍💻
            </div>
            <div className="collapse-content">
              <p>
                Security is our top priority. Our platform is built with robust security measures to protect your data and privacy. We continuously update our systems to guard against threats and ensure a safe environment for all users.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              User-friendly interface 💃
            </div>
            <div className="collapse-content">
              <p>
                Our platform boasts a user-friendly interface designed for ease of use. Whether you're a tech-savvy individual or a beginner, our intuitive design ensures you can navigate and utilize all features with minimal effort. Enjoy a seamless experience from registration to managing your activities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-bitmap text-accent huge bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Botico.</h1>
    </div>
  );
};

export default Sidebar;
