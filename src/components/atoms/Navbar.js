export const Navbar = () => {
    return(
        <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-light md:border-0 md:bg-white">
                <li>
                    <p  className="block py-2 pr-4 pl-3 text-gray-500">Home</p>
                </li>
                <li>
                    <p  className="block py-2 pr-4 pl-3 text-gray-500">Browse by</p>
                </li>
                <li>
                    <p  className="block py-2 pr-4 pl-3 text-gray-500">Stories</p>
                </li>
                <li>
                    <p  className="block py-2 pr-4 pl-3 text-gray-500">Agents</p>
                </li>
            </ul>
        </div>
    );
}