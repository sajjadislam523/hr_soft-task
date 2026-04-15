import { TfiFacebook, TfiLinkedin, TfiTwitterAlt } from "react-icons/tfi";
import logo from "../assets/logo.png";
import type { NoticeItem, Person } from "../types/types";
import CommunitySection from "./CommunitySection";
import EventBannerSection from "./EventBanerSection";
import Navbar from "./Navbar";

const notices: NoticeItem[] = [
    { id: 1, text: "পূর্বের কমিটি বিলুপ্ত ও নতুন কমিটি গঠন" },
    { id: 2, text: "ইফতার ও দোয়া মাহফিল" },
    { id: 3, text: "মাসিক সভার বিজ্ঞপ্তি" },
    { id: 4, text: "ঈদসহ বেতাগঞ্জ পরিবার" },
];

const convener: Person = {
    id: 1,
    name: "MD Tanjir Rejwan Chowdhury",
    role: "Convener",
};

const jointConvener: Person = {
    id: 2,
    name: "Md Najimuddin Sarkar",
    role: "Joint Convener",
};

const SocialButton = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-blue-300 rounded-full p-2 inline-flex cursor-pointer hover:bg-blue-400 transition">
        {children}
    </div>
);

const Hero = () => {
    return (
        <div>
            {/* Header */}
            <header className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-6 py-4 md:py-6">
                {/* Logo + Title */}
                <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                    <img
                        className="h-16 w-16 md:h-24 md:w-24 shrink-0"
                        src={logo}
                        alt="The logo"
                    />
                    <div className="flex flex-col items-center sm:items-start">
                        <p className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
                            ঐক্যবদ্ধ বোচাগঞ্জ কল্যাণ সমিতি-ঢাকা
                        </p>
                        <p className="text-sm sm:text-base md:text-xl font-bold text-gray-600 mt-1">
                            ঐক্যের বিকল্প নেই - সবাই মিলে এক হই
                        </p>
                    </div>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-2 shrink-0">
                    <SocialButton>
                        <TfiFacebook className="text-white w-4 h-4" />
                    </SocialButton>
                    <SocialButton>
                        <TfiTwitterAlt className="text-white w-4 h-4" />
                    </SocialButton>
                    <SocialButton>
                        <TfiLinkedin className="text-white w-4 h-4" />
                    </SocialButton>
                </div>
            </header>

            <Navbar />

            <CommunitySection
                notices={notices}
                convener={convener}
                jointConvener={jointConvener}
                onDetailsClick={(person) =>
                    console.log("Details clicked:", person)
                }
            />
            <EventBannerSection />
        </div>
    );
};

export default Hero;
