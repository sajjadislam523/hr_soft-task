import { FaHandPointRight } from "react-icons/fa";
import committee from "../assets/committee.jpg";
import members from "../assets/members.jpg";

const Committee = [
    "Executive Committee 2026",
    "Picnic Sub Committee",
    "Executive Committee 2025",
];

const Member = ["Find a Member", "New Member Registration", "Member Details"];

const InformationSection = () => {
    return (
        <div>
            <section
                style={{
                    padding: "1rem",
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 280px",
                        gap: 16,
                    }}
                    className="community-grid"
                >
                    {/* Left column */}
                    <div className="space-y-8">
                        <div className="w-full h-auto rounded-md bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)] px-4 py-8">
                            <p className="text-green-800 text-2xl text-center font-">
                                Introduction of OBKS
                            </p>
                            <p className="mt-4 text-lg leading-9">
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
                            <a href="#" className="text-blue-700">
                                Details
                            </a>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="bg-[#f0f6ff] w-full p-6">
                                <p className="text-red-700 text-lg mb-2">
                                    Committee
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={committee}
                                        className="h-20 w-20"
                                        alt=""
                                    />
                                    <div>
                                        {Committee.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2"
                                            >
                                                <FaHandPointRight />
                                                <p className="text-gray-700">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#f0f6ff] w-full p-6">
                                <p className="text-red-700 text-lg mb-2">
                                    Member
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={members}
                                        alt=""
                                        className="h-20 w-20"
                                    />
                                    <div>
                                        {Member.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2"
                                            >
                                                <FaHandPointRight />
                                                <p className="text-gray-700">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>

                    {/* Right sidebar */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                        }}
                    ></div>
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
