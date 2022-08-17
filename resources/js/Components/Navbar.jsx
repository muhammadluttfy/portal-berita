const Navbar = () => {
    return (
        <div className="px-6 bg-white shadow-lg md:px-16 navbar">
            <div className="flex-1">
                <a className="text-xl normal-case btn btn-ghost">
                    PortalBerita
                </a>
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
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul
                        tabIndex="0"
                        className="p-2 mt-3 bg-gray-100 shadow menu menu-compact dropdown-content rounded-box w-52"
                    >
                        <li>
                            <a className="justify-between">
                                Dashboard
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
