import type { JSX } from "react";
import logo from "../assets/logo.png";
import type { EventCardData, StatItem } from "../types/types";
import {
    CommitteeIcon,
    FemaleMemberIcon,
    GeneralMemberIcon,
    LifeMemberIcon,
    MaleMemberIcon,
    TotalMemberIcon,
} from "./StatIcons";

const stats: StatItem[] = [
    { id: 1, label: "Total Member", value: 41, iconType: "total" },
    { id: 2, label: "General Member", value: 41, iconType: "general" },
    { id: 3, label: "Life Member", value: 41, iconType: "life" },
    { id: 4, label: "Female Member", value: 6, iconType: "female" },
    { id: 5, label: "Male Member", value: 35, iconType: "male" },
    { id: 6, label: "Committee", value: 0, iconType: "committee" },
];

const eventData: EventCardData = {
    title: "Boishakhi Cultural অনুষ্ঠান 2026",
    location: "Location: Uttara Community Center, Dhaka",
    description:
        "A cultural program with songs, dance, food stalls and Pohela Boishakh celebration for all members...",
    lastDate: "10 Apr 2026",
};

const iconMap: Record<StatItem["iconType"], JSX.Element> = {
    total: <TotalMemberIcon />,
    general: <GeneralMemberIcon />,
    life: <LifeMemberIcon />,
    female: <FemaleMemberIcon />,
    male: <MaleMemberIcon />,
    committee: <CommitteeIcon />,
};

const EventBannerSection = () => {
    return (
        <section className="w-full">
            {/* ── Banner ── */}
            <div className="bg-[#f5d5d0] px-4 py-6 md:px-8 md:py-8">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-6">
                    {/* Logo card */}
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-3 w-full sm:w-auto sm:min-w-60 shadow-sm shrink-0">
                        <img
                            src={logo}
                            alt="Organization logo"
                            className="h-28 w-28 object-contain"
                        />
                        <div className="text-center">
                            <p className="text-base md:text-lg font-bold text-gray-800 leading-snug">
                                ঐক্যবদ্ধ বোচাগঞ্জ কল্যাণ সমিতি-ঢাকা
                            </p>
                            <p className="text-xs md:text-sm text-gray-500 mt-1">
                                ঐক্যের বিকল্প নেই - সবাই মিলে এক হই
                            </p>
                        </div>
                    </div>

                    {/* Event card */}
                    <div className="bg-[#fce8e4] border border-[#e8b0a8] rounded-xl p-5 md:p-6 w-full">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                            {eventData.title}
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">
                            {eventData.location}
                        </p>
                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                            {eventData.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="bg-[#4a7ec7] hover:bg-[#3a6bb5] transition text-white text-sm font-medium px-4 py-1.5 rounded-md">
                                View Details
                            </button>
                            <span className="border border-[#c0392b] text-[#c0392b] text-sm font-medium px-3 py-1 rounded-md bg-white">
                                Last Date: {eventData.lastDate}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Stats bar ── */}
            <div className=" bg-white px-4 py-5 md:px-8">
                <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col items-center gap-1 text-center rounded-md p-4 bg-white shadow-[0_6px_10px_rgba(0,0,0,0.12)]"
                        >
                            <div className="flex items-center justify-center h-10">
                                {iconMap[stat.iconType]}
                            </div>
                            <span className="text-base md:text-lg font-bold text-gray-800">
                                {stat.value}
                            </span>
                            <span className="text-base text-gray-500">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventBannerSection;
