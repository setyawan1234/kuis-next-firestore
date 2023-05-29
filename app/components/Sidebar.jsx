import React from "react";
import Image from "next/image";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div>
      <div>
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white"
          aria-label="Sidebar"
        >
          <div className="flex items-center p-2 bg-yellow-800 ">
            <Image
              width={80}
              height={80}
              className="flex items-center p-2 text-yellow-900 rounded-lg "
              src="/polinema.png"
              alt="logo"
            />
            <span className="flex-1 ml-3 whitespace-nowrap">JTI Polinema</span>
          </div>

          <div className="h-full px-3 py-4 overflow-y-auto bg-yellow-50 dark:bg-yellow-800">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 text-yellow-900 rounded-lg dark:text-white hover:bg-yellow-100 dark:hover:bg-yellow-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-yellow-500 transition duration-75 dark:text-yellow-400 group-hover:text-yellow-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              {/* mahasiswa */}
              <li>
                <Link
                  to="/mahasiswas"
                  className="flex items-center p-2 text-yellow-900 rounded-lg dark:text-white hover:bg-yellow-100 dark:hover:bg-yellow-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-yellow-500 transition duration-75 dark:text-yellow-400 group-hover:text-yellow-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Mahasiswa
                  </span>
                </Link>
              </li>
              {/* gurus */}
              <li>
                <Link
                  to="/gurus"
                  className="flex items-center p-2 text-yellow-900 rounded-lg dark:text-white hover:bg-yellow-100 dark:hover:bg-yellow-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-yellow-500 transition duration-75 dark:text-yellow-400 group-hover:text-yellow-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Data Guru
                  </span>
                </Link>
              </li>
              {/* kelas */}
              <li>
                <Link
                  to="/kelass"
                  className="flex items-center p-2 text-yellow-900 rounded-lg dark:text-white hover:bg-yellow-100 dark:hover:bg-yellow-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-yellow-500 transition duration-75 dark:text-yellow-400 group-hover:text-yellow-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Data Kelas
                  </span>
                </Link>
              </li>
              {/* mapel */}
              <li>
                <Link
                  to="/mapels"
                  className="flex items-center p-2 text-yellow-900 rounded-lg dark:text-white hover:bg-yellow-100 dark:hover:bg-yellow-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-yellow-500 transition duration-75 dark:text-yellow-400 group-hover:text-yellow-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Mata Pelajaran
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
