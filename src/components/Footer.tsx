import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full">
            {/* Main footer */}
            <div className="bg-[#dce8f5] px-4 py-8 md:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Address */}
                    <div>
                        <h3 className="text-red-600 text-base font-semibold mb-3 border-b border-red-200 pb-1">
                            Address
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Bochaganj, Dinajpur
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-red-600 text-base font-semibold mb-3 border-b border-red-200 pb-1">
                            Contact
                        </h3>
                        <div className="space-y-1.5 text-sm text-gray-700">
                            <p>
                                <span className="font-medium">Office:</span>{" "}
                                01711000000
                            </p>
                            <p>
                                <span className="font-medium">
                                    Complex (Booking):
                                </span>{" "}
                                01625000000
                            </p>
                            <p>
                                <span className="font-medium">Dormitory:</span>{" "}
                                hochaganj
                            </p>
                            <p>
                                <span className="font-medium">Telephone:</span>{" "}
                                02-222200000
                            </p>
                            <p>
                                <span className="font-medium">Email:</span>
                                <a
                                    href="mailto:bochaganj@gmail.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    bochaganj@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Facebook Group */}
                    <div>
                        <div className="bg-[#c8d8f0] rounded-md p-5 flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <FaFacebookF
                                    className="text-blue-700"
                                    size={18}
                                />
                                <h3 className="text-blue-800 font-semibold text-base">
                                    Facebook Group
                                </h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Join our community to stay updated
                            </p>
                            <a
                                href="#"
                                className="bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium px-5 py-2 rounded-md w-fit"
                            >
                                Join Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright bar */}
            <div className="bg-white border-t border-gray-200 px-4 py-3">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
                    <p>Copyright 2026 © Oikyobodho Bochaganj Kollan Samity</p>
                    <p className="flex items-center gap-1">
                        Design and Development By —{" "}
                        <span className="font-bold text-blue-700 tracking-wide">
                            HR
                        </span>
                        <span className="text-orange-500 font-bold">
                            SOFTBD
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
