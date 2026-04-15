import type { Person } from "../types/types";
import AvatarPlaceholder from "./AvatarPlaceholder";

interface ProfileCardProps {
    sectionLabel: string;
    person: Person;
    onDetailsClick?: (person: Person) => void;
}

const ProfileCard = ({
    sectionLabel,
    person,
    onDetailsClick,
}: ProfileCardProps) => (
    <div
        style={{
            border: "1px solid #c8d8e8",
            borderRadius: 6,
            overflow: "hidden",
        }}
    >
        <div
            style={{
                background: "#7b9ec7",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                padding: "7px 12px",
            }}
        >
            {sectionLabel}
        </div>
        <div
            style={{
                background: "#f7f9fc",
                padding: 14,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
            }}
        >
            <div
                style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "#d8e4f0",
                    border: "2px solid #b0c4de",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {person.imageUrl ? (
                    <img
                        src={person.imageUrl}
                        alt={person.name}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                ) : (
                    <AvatarPlaceholder />
                )}
            </div>

            <p
                style={{
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "#2c3e50",
                    textAlign: "center",
                    margin: 0,
                }}
            >
                {person.name}
            </p>
            <p
                style={{
                    fontSize: 12,
                    color: "#7f8c8d",
                    textAlign: "center",
                    margin: 0,
                }}
            >
                {person.role}
            </p>

            <button
                onClick={() => onDetailsClick?.(person)}
                style={{
                    background: "#7b9ec7",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    padding: "6px 22px",
                    fontSize: 12.5,
                    cursor: "pointer",
                    fontFamily: "inherit",
                }}
            >
                Details
            </button>
        </div>
    </div>
);

export default ProfileCard;
