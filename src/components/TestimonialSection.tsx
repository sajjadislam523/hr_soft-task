import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
    id: number;
    text: string;
    name: string;
    role: string;
    avatarUrl?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "Hotel Alpha exceeded all my expectations. The room was spotless, the staff was incredibly helpful, and the free Wi-Fi made my work trip seamless. I'll definitely stay here again!",
        name: "Sarah May",
        role: "Business Traveler",
    },
    {
        id: 2,
        text: "Our family loved staying at Hotel Alpha! The kids enjoyed the spacious room, and the delicious room service made dining easy for us. Plus, the location is perfect for exploring the city.",
        name: "Sami Rayhan",
        role: "Family Vacationer",
    },
    {
        id: 3,
        text: "From the warm welcome at reception to the cozy room, everything about Hotel Alpha was top-notch. The rooftop view was breathtaking, and the gym kept me on track with my routine. Highly recommend it!",
        name: "Priya R.",
        role: "Solo Traveler, Priya Traveler",
    },
    {
        id: 4,
        text: "Absolutely wonderful experience from start to finish. The staff went above and beyond to make our anniversary special. We will be back every year!",
        name: "Karim Hassan",
        role: "Couple Traveler",
    },
    {
        id: 5,
        text: "The conference facilities were excellent and the catering team was outstanding. Everything ran smoothly and our clients were very impressed.",
        name: "Nadia Islam",
        role: "Corporate Organizer",
    },
];

const VISIBLE = 3;

const TestimonialsSection = () => {
    const [startIndex, setStartIndex] = useState(0);

    const prev = () =>
        setStartIndex(
            (i) => (i - 1 + testimonials.length) % testimonials.length,
        );
    const next = () => setStartIndex((i) => (i + 1) % testimonials.length);

    const visible = Array.from(
        { length: VISIBLE },
        (_, i) => testimonials[(startIndex + i) % testimonials.length],
    );

    return (
        <section className="py-10 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-8">
                    <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">
                        Testimonials
                    </p>
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
                        What peoples say about us.
                    </h2>
                </div>

                {/* Cards + arrows */}
                <div className="relative flex items-center gap-3">
                    {/* Prev button */}
                    <button
                        onClick={prev}
                        className="shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition z-10"
                        aria-label="Previous"
                    >
                        <FaChevronLeft size={12} />
                    </button>

                    {/* Cards grid */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {visible.map((t, idx) => (
                            <div
                                key={`${t.id}-${idx}`}
                                className="border border-gray-200 rounded-md p-5 flex flex-col items-center text-center gap-4 shadow-sm"
                            >
                                <p className="text-sm text-red-500 leading-relaxed flex-1">
                                    {t.text}
                                </p>
                                <div className="flex flex-col items-center gap-2">
                                    {/* Avatar */}
                                    <div className="w-14 h-14 rounded-full border-2 border-gray-300 overflow-hidden bg-gray-100 flex items-center justify-center">
                                        {t.avatarUrl ? (
                                            <img
                                                src={t.avatarUrl}
                                                alt={t.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <svg
                                                viewBox="0 0 48 48"
                                                width="36"
                                                height="36"
                                                fill="#aaa"
                                            >
                                                <circle
                                                    cx="24"
                                                    cy="18"
                                                    r="10"
                                                />
                                                <ellipse
                                                    cx="24"
                                                    cy="40"
                                                    rx="16"
                                                    ry="10"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-700">
                                            {t.name}
                                        </p>
                                        <p className="text-xs text-red-400">
                                            {t.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next button */}
                    <button
                        onClick={next}
                        className="shrink-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition z-10"
                        aria-label="Next"
                    >
                        <FaChevronRight size={12} />
                    </button>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setStartIndex(i)}
                            className={`w-2 h-2 rounded-full transition ${
                                i === startIndex ? "bg-gray-600" : "bg-gray-300"
                            }`}
                            aria-label={`Go to ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
