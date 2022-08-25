import { Link } from "@inertiajs/inertia-react";
import Logo from "./Logo";
import LogoText from "./LogoText";

const Navbar = ({ user }) => {
    return (
        <div className="px-6 bg-white shadow-lg md:px-16 navbar">
            <div className="flex-1">
                <Link
                    href={route("homepage")}
                    className="text-xl normal-case btn btn-ghost hover:bg-none"
                >
                    <img
                        src="https://i.ibb.co/WWDqShy/icon.png"
                        alt="Instagram"
                        className="md:invisible w-9"
                    />
                    <img
                        src="https://i.ibb.co/DwbGgXB/logo.png"
                        alt="Instagram"
                        className="invisible w-44 md:visible"
                    />
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-100 input input-bordered"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex="0"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/px0cxvj/favicon.png" />
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="p-2 mt-3 bg-gray-100 shadow menu menu-compact dropdown-content rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        className="justify-between"
                                    >
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        as="button"
                                        method="post"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
