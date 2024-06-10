import Logo from "../common/Logo";

const Sidebar = () => {
  return (
    <div className="sidebar p-10 md:p-4 relative w-full h-fit md:h-screen
     mb-0 md:w-1/4 bg-neutral flex flex-col md:flex-col overflow-hidden gap-2 justify-between">
      <div className="preview my-6 md:mt-28">
        <div className="accordion text-white join join-vertical gap-4 w-full rounded-md">
          <div className="collapse collapse-plus bg-primary">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl">
              Private messaging 🕵️‍♀️
            </div>
            <div className="collapse-content">
              <p>
                Our platform offers secure and private messaging to ensure that your conversations remain confidential. You can chat with other users seamlessly and with peace of mind, knowing that your data is protected by our state-of-the-art encryption.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-secondary">
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
          <div className="collapse collapse-plus bg-accent">
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
      <Logo />
    </div>
  );
};

export default Sidebar;
