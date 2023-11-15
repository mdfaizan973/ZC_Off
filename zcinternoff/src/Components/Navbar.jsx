export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-white text-black px-8 py-3 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-white dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Product & Solutions</a>
                <ul className="p-2">
                  <li>
                    <a>Hello 1</a>
                  </li>
                  <li>
                    <a>Hello 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Services</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Resources</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            {/* <img
              className="w-24 h-auto"
              src="https://d1syadtv5cx0g6.cloudfront.net/website/3351682680_offer18_black_logo_2.webp"
              alt="Logo"
            /> */}
            Offer973
          </a>
        </div>
        {/* Lg Screen View */}
        <div className="navbar-center hidden bg-white lg:flex">
          <ul className="menu menu-horizontal px-1 bg-white">
            <li tabIndex={0}>
              <details>
                <summary>Product & Solutions</summary>
                <ul className="p-2 bg-white">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Services</summary>
                <ul className="p-2 bg-white">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Pricing</a>
            </li>

            <li tabIndex={0}>
              <details>
                <summary>Resources</summary>
                <ul className="p-2 bg-white">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="btn btn-outline bg-white text-black px-4 reqbtn">
            Request Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
