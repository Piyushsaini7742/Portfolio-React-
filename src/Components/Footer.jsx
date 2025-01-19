import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">

        <h3 className="text-lg font-semibold mb-4">Connect with Me</h3>
        <div className="flex justify-center space-x-6">

          <a
            href="https://www.linkedin.com/in/piyush-saini-73b42a33b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22.23 0H1.77C.79 0 0 .8 0 1.78v20.45C0 23.2.79 24 1.77 24h20.45c.98 0 1.77-.8 1.77-1.77V1.78C24 .8 23.2 0 22.23 0zM7.12 20.45H3.56V9.03h3.56v11.42zM5.34 7.59a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM20.45 20.45h-3.56v-5.7c0-1.36-.03-3.11-1.89-3.11-1.89 0-2.18 1.48-2.18 3v5.8h-3.56V9.03h3.42v1.56h.05c.48-.92 1.65-1.89 3.4-1.89 3.64 0 4.31 2.4 4.31 5.51v6.23z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/piyush_skr_77/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608C6.518 2.5 7.785 2.225 9.151 2.163 10.416 2.105 10.796 2.093 12 2.093m0-2.163C8.741 0 8.332.015 7.052.072 5.773.13 4.587.455 3.5 1.543 2.413 2.63 2.087 3.816 2.03 5.095.972 6.375.957 6.785.957 10.043c0 3.259.015 3.669.072 4.949.058 1.279.383 2.465 1.471 3.553 1.088 1.087 2.274 1.412 3.553 1.471 1.279.058 1.689.072 4.949.072s3.669-.015 4.949-.072c1.279-.058 2.465-.383 3.553-1.471 1.087-1.088 1.412-2.274 1.471-3.553.058-1.279.072-1.689.072-4.949 0-3.259-.015-3.669-.072-4.949-.058-1.279-.383-2.465-1.471-3.553C19.414.455 18.228.13 16.949.072 15.669.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </a>

          <a
            href="mailto:piyushsainiyt868@gmail.com"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zM4 6h16v2l-8 5-8-5V6zm0 12v-8l7.35 4.9a1 1 0 001.3 0L20 10v8H4z" />
            </svg>
          </a>

          <a
            href="https://github.com/Piyushsaini7742"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.112.793-.263.793-.587 0-.29-.01-1.06-.016-2.08-3.34.726-4.042-1.61-4.042-1.61-.546-1.38-1.334-1.747-1.334-1.747-1.09-.746.082-.73.082-.73 1.204.084 1.837 1.237 1.837 1.237 1.07 1.835 2.805 1.305 3.492.998.107-.775.42-1.306.763-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.467-2.382 1.236-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.486 11.486 0 013.007-.403c1.02.005 2.05.137 3.007.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.838 1.235 1.91 1.235 3.22 0 4.606-2.804 5.625-5.475 5.92.431.372.817 1.1.817 2.22 0 1.606-.015 2.898-.015 3.293 0 .326.192.704.8.584C20.565 21.798 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="tel:7742853977"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.487 15.14l-4.52-1.03a1.95 1.95 0 00-1.812.5l-2.62 2.22a14.25 14.25 0 01-5.473-5.473l2.22-2.62a1.95 1.95 0 00.5-1.812L8.86 3.513a1.92 1.92 0 00-2.195-1.44L3.073 2.887A1.95 1.95 0 001.5 4.8 17.895 17.895 0 0020.2 22.5a1.95 1.95 0 001.913-1.573l.814-3.594a1.92 1.92 0 00-1.44-2.194z" />
            </svg>
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Piyush Saini | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
