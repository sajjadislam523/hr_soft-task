import { useState } from "react";
import {
    IoChevronDownOutline,
    IoCloseOutline,
    IoMenuOutline,
} from "react-icons/io5";

const menuItems = [
    {
        name: "about",
        label: "About Us",
        submenu: ["Our History", "Mission & Vision", "Our Team"],
    },
    {
        name: "member",
        label: "Member",
        submenu: ["Member List", "Become a Member", "Member Benefits"],
    },
    {
        name: "committee",
        label: "Committee",
        submenu: ["Executive Committee", "Advisory Board", "Sub Committees"],
    },
    {
        name: "media",
        label: "Media",
        submenu: ["Gallery", "Press Release", "Publications"],
    },
];

const simpleLinks = ["Home", "Events", "Notice", "Contact"];

const Navbar = () => {
    const [active, setActive] = useState("");
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

    const linkClass = (name: string) =>
        `cursor-pointer transition ${
            active === name.toLowerCase() ? "text-red-500" : "text-black"
        } hover:text-red-500`;

    return (
        <nav className="bg-blue-300 px-4 md:px-6 py-3">
            {/* Desktop row */}
            <div className="flex items-center justify-between">
                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6 font-medium">
                    <span
                        onClick={() => setActive("home")}
                        className={linkClass("home")}
                    >
                        Home
                    </span>

                    {menuItems.map((menu) => (
                        <div
                            key={menu.name}
                            className="relative"
                            onMouseEnter={() => setOpenMenu(menu.name)}
                            onMouseLeave={() => setOpenMenu(null)}
                        >
                            <div
                                onClick={() => setActive(menu.name)}
                                className={`flex items-center gap-1 ${linkClass(menu.name)}`}
                            >
                                {menu.label}
                                <IoChevronDownOutline size={16} />
                            </div>

                            {openMenu === menu.name && (
                                <div className="absolute top-8 left-0 bg-white shadow-md rounded-md p-2 w-52 z-50">
                                    {menu.submenu.map((item) => (
                                        <div
                                            key={item}
                                            onClick={() => setActive(menu.name)}
                                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {["Events", "Notice", "Contact"].map((label) => (
                        <span
                            key={label}
                            onClick={() => setActive(label.toLowerCase())}
                            className={linkClass(label.toLowerCase())}
                        >
                            {label}
                        </span>
                    ))}
                </div>

                {/* Desktop sign in button */}
                <button className="hidden md:block bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-sm font-medium">
                    Member Sign In
                </button>

                {/* Mobile: sign in + hamburger */}
                <div className="flex md:hidden items-center justify-between w-full">
                    <button className="bg-red-700 text-white px-3 py-1.5 rounded-md hover:bg-red-600 transition text-sm font-medium">
                        Member Sign In
                    </button>
                    <button
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="text-black p-1"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <IoCloseOutline size={26} />
                        ) : (
                            <IoMenuOutline size={26} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown panel */}
            {mobileOpen && (
                <div className="md:hidden mt-3 flex flex-col gap-1 border-t border-blue-200 pt-3">
                    {simpleLinks.map((label) => (
                        <span
                            key={label}
                            onClick={() => {
                                setActive(label.toLowerCase());
                                setMobileOpen(false);
                            }}
                            className={`px-2 py-2 rounded cursor-pointer font-medium text-sm ${
                                active === label.toLowerCase()
                                    ? "text-red-500"
                                    : "text-black"
                            } hover:bg-blue-200 transition`}
                        >
                            {label}
                        </span>
                    ))}

                    {menuItems.map((menu) => (
                        <div key={menu.name}>
                            <div
                                onClick={() =>
                                    setMobileSubmenu(
                                        mobileSubmenu === menu.name
                                            ? null
                                            : menu.name,
                                    )
                                }
                                className={`flex items-center justify-between px-2 py-2 rounded cursor-pointer font-medium text-sm ${
                                    active === menu.name
                                        ? "text-red-500"
                                        : "text-black"
                                } hover:bg-blue-200 transition`}
                            >
                                {menu.label}
                                <IoChevronDownOutline
                                    size={16}
                                    className={`transition-transform ${
                                        mobileSubmenu === menu.name
                                            ? "rotate-180"
                                            : ""
                                    }`}
                                />
                            </div>

                            {mobileSubmenu === menu.name && (
                                <div className="ml-4 flex flex-col gap-1 mb-1">
                                    {menu.submenu.map((item) => (
                                        <div
                                            key={item}
                                            onClick={() => {
                                                setActive(menu.name);
                                                setMobileOpen(false);
                                            }}
                                            className="px-3 py-1.5 text-sm text-gray-700 hover:bg-blue-100 rounded cursor-pointer"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
