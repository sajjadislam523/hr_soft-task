import {
    FaEnvelope,
    FaExternalLinkAlt,
    FaEye,
    FaHandPointRight,
    FaLink,
} from "react-icons/fa";
import { VscTarget } from "react-icons/vsc";
import committee from "../assets/committee.jpg";
import members from "../assets/members.jpg";

const Committee = [
    "Executive Committee 2026",
    "Picnic Sub Committee",
    "Executive Committee 2025",
];

const Member = ["Find a Member", "New Member Registration", "Member Details"];

const importantLinks = [
    { label: "Agricultural Research Institute", href: "#" },
    { label: "Agricultural Research Council", href: "#" },
    { label: "OBKS", href: "#" },
    { label: "OBKS Information Service", href: "#" },
];

const InformationSection = () => {
    return (
        <div>
            <section className="px-4 py-4 max-w-6xl mx-auto">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 280px",
                        gap: 16,
                    }}
                    className="community-grid"
                >
                    {/* ── Left column ── */}
                    <div className="space-y-6">
                        {/* Introduction card */}
                        <div className="w-full rounded-md bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)] px-4 py-8">
                            <p className="text-green-800 text-2xl text-center font-semibold">
                                Introduction of OBKS
                            </p>
                            <p className="mt-4 text-base leading-9 text-gray-700">
                                বাংলাদেশের উত্তরে ২২৪.৮১ বর্গ কিলোমিটারের ছোট্ট
                                একটি জনপদ আমাদের জন্মস্থান বোচাগঞ্জ। উপজেলার নাম
                                বোচাগঞ্জ হলেও এটি উপজেলার বাইরে সেতাবগঞ্জ নামেই
                                বেশি পরিচিত। উত্তরে বীরগঞ্জ আর পীরগঞ্জ, দক্ষিণে
                                বিরল আর ভারতের পশ্চিমবঙ্গ, পূর্বে বীরগঞ্জ আর
                                কাহারোল বেষ্টিত আমাদের এই উপজেলা। বোচাগঞ্জ থানার
                                সৃষ্টি হয় ১৯১৫ সালে আর এটি উপজেলায় রূপান্তর হয়
                                ১৯৮৪ সালে। নাফানগর, ইশানিয়া, মুর্শিদহাট, আগাঁও,
                                হাটরাম, রণগাঁও এই ০৬ টি ইউনিয়ন ও ০১ টি ১ম শ্রেণী
                                পৌরসভা তথা সেতাবগঞ্জ পৌরসভা নিয়ে গঠিত। সেতাবগঞ্জ
                                পৌরসভাটি জমিদার সিতাব চাঁদ মজ্জুম এর নামে নামকরণ
                                করা হয়। সেতাবগঞ্জ পৌর হাটটি রংপুর বিভাগের অন্যতম
                                বৃহত্তম হাট। এ হাটটি প্রতিষ্ঠাকালে কুমিরের মেলা
                                দেখানো হত। কুমিরকে স্থানীয়ভাবে বোচ বলা হত। এই
                                বোচ থেকেই আমাদের উপজেলার নামকরণ হয়, বোচাগঞ্জ।{" "}
                                <br />
                                সময়ের পরিক্রমায় উন্নত শিক্ষা অর্জনের জন্য আর
                                জীবন জীবিকার তাগিদে বোচাগঞ্জের মানুষ ৮০ দশকের পর
                                থেকে ঢাকামুখী হতে থাকে। বোচাগঞ্জের অনেক সন্তানই
                                আজকে এই শহরে প্রতিষ্ঠিত এবং দেশব্যাপী তারা তাদের
                                কাজের জন্য প্রশংসিত। উন্নত শিক্ষা শেষে অনেকে
                                আবার দেশের বাইরে নিজেদের প্রতিষ্ঠিত করে আমাদের
                                মুখ উজ্জ্বল করেছে। শিক্ষা সংস্কৃতি ছাড়াও ইদানিং
                                খেলাধূলাতেও বোচাগঞ্জের ছেলে মেয়েরা দেশের হয়ে
                                প্রতিনিধিত্ব করছে। <br /> ঐতিহ্যবাহী বোচাগঞ্জ
                                কল্যাণ সমিতি-ঢাকা সেই সকল সন্তানদের একটি
                                প্রচেষ্টা যারা বোচাগঞ্জের মাটিতে জন্মগ্রহণ
                                করেছেন আর এখন ঢাকা বা এর আশেপাশে জেলাগুলোতে
                                স্থায়ী হয়েছেন। এই ঐক্যের ডাক আমাদের সকলের একাত্ম
                                হবার ডাক, বোচাগঞ্জের উন্নয়নে নিজেদের সম্পৃক্ত
                                করার ডাক। এই ডাক শুধুমাত্র ভালো কাজের ডাক। এখানে
                                নেই কোন ধর্ম বিভেদ, নেই কোন ধর্মবাদ, শহর কিংবা
                                গ্রামের ভেদাভেদ...
                            </p>
                            <a
                                href="#"
                                className="text-blue-700 text-sm hover:underline"
                            >
                                Details
                            </a>
                        </div>

                        {/* Committee + Member cards */}
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="bg-[#f0f6ff] w-full p-6 rounded-md">
                                <p className="text-red-700 text-lg font-semibold mb-3">
                                    Committee
                                </p>
                                <div className="flex items-start gap-4">
                                    <img
                                        src={committee}
                                        className="h-20 w-20 object-cover rounded"
                                        alt="Committee"
                                    />
                                    <div className="space-y-1.5">
                                        {Committee.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2"
                                            >
                                                <FaHandPointRight
                                                    className="text-gray-500 shrink-0"
                                                    size={13}
                                                />
                                                <p className="text-gray-700 text-sm">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#f0f6ff] w-full p-6 rounded-md">
                                <p className="text-red-700 text-lg font-semibold mb-3">
                                    Member
                                </p>
                                <div className="flex items-start gap-4">
                                    <img
                                        src={members}
                                        className="h-20 w-20 object-cover rounded"
                                        alt="Members"
                                    />
                                    <div className="space-y-1.5">
                                        {Member.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2"
                                            >
                                                <FaHandPointRight
                                                    className="text-gray-500 shrink-0"
                                                    size={13}
                                                />
                                                <p className="text-gray-700 text-sm">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mission + Vision cards */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Mission */}
                            <div className="bg-white border border-gray-200 rounded-md p-6 w-full text-center shadow-sm">
                                <div className="flex justify-center mb-3">
                                    <VscTarget
                                        className="text-red-400"
                                        size={56}
                                    />
                                </div>
                                <p className="text-lg font-bold text-gray-800 mb-3">
                                    Mission
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed text-center">
                                    বোচাগঞ্জবাসীর মধ্যে সামাজিক বন্ধন তৈরি করে
                                    একটি সুসংগঠিত ও কল্যাণমুখী সমিতি গড়ে তোলা।
                                    সদস্যদের পারস্পরিক সহযোগিতার মাধ্যমে সামাজিক
                                    উন্নয়ন নিশ্চিত করা এবং শিক্ষা, স্বাস্থ্য ও
                                    সংস্কৃতিতে অবদান রাখা।
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-white border border-gray-200 rounded-md p-6 w-full text-center shadow-sm">
                                <div className="flex justify-center mb-3">
                                    <FaEye className="text-red-400" size={52} />
                                </div>
                                <p className="text-lg font-bold text-gray-800 mb-3">
                                    Vission
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed text-center">
                                    একটি উন্নত বোচাগঞ্জ গড়ার স্বপ্ন নিয়ে আমরা
                                    কাজ করে যাচ্ছি। আমাদের লক্ষ্য হলো শিক্ষা,
                                    সংস্কৃতি ও সমাজকল্যাণমূলক কার্যক্রমের
                                    মাধ্যমে বোচাগঞ্জের সার্বিক উন্নয়নে অগ্রণী
                                    ভূমিকা পালন করা।
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── Right sidebar ── */}
                    <div className="flex flex-col gap-4">
                        {/* Important Links */}
                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="bg-[#7b9ec7] text-white text-sm font-semibold px-3 py-2">
                                Important Link
                            </div>
                            <div className="bg-white px-3 py-3 space-y-2">
                                {importantLinks.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.href}
                                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 transition"
                                    >
                                        <FaLink
                                            size={11}
                                            className="text-green-600 shrink-0"
                                        />
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Web Mail */}
                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="bg-[#7b9ec7] text-white text-sm font-semibold px-3 py-2">
                                Web Mail
                            </div>
                            <div className="bg-white px-3 py-4 flex justify-center">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                        <FaEnvelope
                                            size={28}
                                            className="text-orange-400"
                                        />
                                    </div>
                                    <a
                                        href="#"
                                        className="text-blue-600 text-sm hover:underline flex items-center gap-1"
                                    >
                                        Open Webmail{" "}
                                        <FaExternalLinkAlt size={10} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Login */}
                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="bg-[#7b9ec7] text-white text-sm font-semibold px-3 py-2">
                                Login
                            </div>
                            <div className="bg-white px-3 py-4 space-y-2">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-400"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-blue-400"
                                />
                                <button className="w-full bg-[#4a7ec7] hover:bg-[#3a6bb5] text-white text-sm font-medium py-1.5 rounded transition">
                                    Login
                                </button>
                            </div>
                        </div>

                        {/* Emergency Helpline */}
                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="bg-[#7b9ec7] text-white text-sm font-semibold px-3 py-2">
                                Emergency Helpline Number
                            </div>
                            <div className="bg-white px-3 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-red-100 rounded-md p-2 shrink-0">
                                        <svg
                                            viewBox="0 0 48 48"
                                            width="44"
                                            height="44"
                                        >
                                            <rect
                                                x="2"
                                                y="6"
                                                width="28"
                                                height="36"
                                                rx="4"
                                                fill="#e74c3c"
                                            />
                                            <text
                                                x="16"
                                                y="28"
                                                textAnchor="middle"
                                                fill="white"
                                                fontSize="10"
                                                fontWeight="bold"
                                            >
                                                HELP
                                            </text>
                                            <text
                                                x="16"
                                                y="38"
                                                textAnchor="middle"
                                                fill="white"
                                                fontSize="8"
                                            >
                                                999
                                            </text>
                                        </svg>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-red-600">
                                                999
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                Emergency
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-blue-600">
                                                1098
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                Child Helpline
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <div className="bg-[#7b9ec7] text-white text-sm font-semibold px-3 py-2 flex items-center justify-between">
                                Our Google Location
                                <a
                                    href="https://maps.google.com/?q=Bochaganj,Dinajpur,Bangladesh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-white underline flex items-center gap-1"
                                >
                                    Open in Maps <FaExternalLinkAlt size={9} />
                                </a>
                            </div>
                            <div className="bg-white">
                                <iframe
                                    title="Bochaganj Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57688.12!2d88.7!3d25.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbdc4b84c32a63%3A0x1c4b8e6b5f3e2a1d!2sBochaganj%2C%20Dinajpur!5e0!3m2!1sen!2sbd!4v1700000000000"
                                    width="100%"
                                    height="180"
                                    style={{ border: 0, display: "block" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Responsive styles */}
                <style>{`
                    @media (max-width: 640px) {
                        .community-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </section>
        </div>
    );
};

export default InformationSection;
