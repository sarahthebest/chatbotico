/* eslint-disable react/no-unescaped-entities */

import Logo from "../common/Logo";

const Sidebar = () => {
  return (
    <div
      className="sidebar z-0 p-10 lg:p-4 relative w-full h-full lg:h-screen lg:rounded-l-xl
     mb-0 lg:w-1/3 flex flex-col lg:flex-col overflow-hidden gap-6"
    >
      <Logo />
      <div className="preview font-oxygen z-10">
        <div className="accordion z-50 text-white join join-vertical gap-4 w-full rounded-md">
          <div className="collapse collapse-plus bg-neutral">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl">Private messaging 🕵️‍♀️</div>
            <div className="collapse-content">
              <p>
                Our platform offers secure and private messaging to ensure that
                your conversations remain confidential. You can chat with other
                users seamlessly and with peace of mind, knowing that your data
                is protected by our state-of-the-art encryption.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-neutral">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Secure platform 👩‍💻
            </div>
            <div className="collapse-content">
              <p>
                Security is our top priority. Our platform is built with robust
                security measures to protect your data and privacy. We
                continuously update our systems to guard against threats and
                ensure a safe environment for all users.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-neutral">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              User-friendly interface 💃
            </div>
            <div className="collapse-content">
              <p>
                Our platform boasts a user-friendly interface designed for ease
                of use. Whether you're a tech-savvy individual or a beginner,
                our intuitive design ensures you can navigate and utilize all
                features with minimal effort. Enjoy a seamless experience from
                registration to managing your activities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="public\img\sidebarImg.svg"
        className="absolute bottom-4 invisible lg:visible illustration place-self-center  "
        alt="Illustration taken from undraw.co"
      />
    </div>
  );
};

export default Sidebar;
