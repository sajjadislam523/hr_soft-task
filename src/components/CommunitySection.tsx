import type { CommunitySectionProps } from "../types/types";
import NoticeBoard from "./NoticeBoard";
import ProfileCard from "./ProfileCard";

const CommunitySection = ({
    heroImageUrl,
    heroImageAlt = "Community event",
    notices,
    convener,
    jointConvener,
    onDetailsClick,
}: CommunitySectionProps) => {
    return (
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
                <div>
                    <div
                        style={{
                            width: "100%",
                            height: 280,
                            borderRadius: 6,
                            overflow: "hidden",
                            background: "#ccd9e8",
                        }}
                    >
                        {heroImageUrl && (
                            <img
                                src={heroImageUrl}
                                alt={heroImageAlt}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        )}
                    </div>
                    <NoticeBoard notices={notices} />
                </div>

                {/* Right sidebar */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                    }}
                >
                    <ProfileCard
                        sectionLabel="Convener Message"
                        person={convener}
                        onDetailsClick={onDetailsClick}
                    />
                    <ProfileCard
                        sectionLabel="Joint Convener"
                        person={jointConvener}
                        onDetailsClick={onDetailsClick}
                    />
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
    );
};

export default CommunitySection;
