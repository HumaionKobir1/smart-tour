import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="md:px-12 px-6">
      <input type="checkbox" name="" id="toggler" />
      <label htmlFor="toggler" className="menu-icon">
        <AiOutlineMenu size={24} />
      </label>
      <div className="logo">
        <span className="text-[#5c98f2]">Smart</span>Tour
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <Link to="" className="flex items-center">
              Tour List
              <MdArrowDropDown className="md:hidden block" />
            </Link>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <li>
                  <Link>Tour Grid</Link>
                </li>
              </div>
            )}
          </li>
          <li
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <Link to="" className="flex items-center">
              Blog <MdArrowDropDown className="md:hidden block" />{" "}
            </Link>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <li>
                  <Link>Blog Full</Link>
                </li>
              </div>
            )}
          </li>
          <li
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <Link to="" className="flex items-center">
              Search Tour
              <MdArrowDropDown className="md:hidden block" />{" "}
            </Link>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <li>
                  <Link> Tour Search</Link>
                </li>
                <li>
                  <Link> Room Search</Link>
                </li>
              </div>
            )}
          </li>
          <li
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <Link to="" className="flex items-center">
              Room List <MdArrowDropDown className="md:hidden block" />{" "}
            </Link>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <li>
                  <Link>Room Grid</Link>
                </li>
              </div>
            )}
          </li>
          <li
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <Link to="" className="flex items-center">
              Pages <MdArrowDropDown className="md:hidden block" />{" "}
            </Link>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <li>
                  <Link>About as</Link>
                </li>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <select
          name="language"
          id="language"
          className="px-2 md:px-4 py-1 rounded-md shadow-md"
        >
          <option value="বাংলা">বাংলা</option>
          <option value="English" selected>
            English
          </option>
        </select>
        <button className="bg-[#5c98f2] text-white px-4  md:px-6 py-1 rounded-md shadow-md md:text-[20px] font-semibold">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
