import type { NoticeItem } from "../types/types";

interface NoticeBoardProps {
    notices: NoticeItem[];
}

const BulletinIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4a6fa5"
        strokeWidth={2}
        width={20}
        height={20}
    >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
);

const NoticeBoard = ({ notices }: NoticeBoardProps) => (
    <div
        style={{
            marginTop: 14,
            border: "1px solid #c8d8e8",
            borderRadius: 6,
            padding: "14px 16px",
            background: "#f0f6ff",
        }}
    >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <div
                style={{
                    width: 38,
                    height: 38,
                    background: "#e8f0fb",
                    border: "1px solid #b0c4de",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                }}
            >
                <BulletinIcon />
            </div>

            <div style={{ flex: 1 }}>
                <p
                    style={{
                        color: "#c0392b",
                        fontSize: 15,
                        fontWeight: 700,
                        marginBottom: 10,
                    }}
                >
                    Notice Board
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {notices.map((item) => (
                        <li
                            key={item.id}
                            style={{
                                fontSize: 13.5,
                                color: "#333",
                                padding: "4px 0",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 6,
                            }}
                        >
                            <span
                                style={{
                                    color: "#4a6fa5",
                                    flexShrink: 0,
                                    marginTop: 1,
                                }}
                            >
                                ☎
                            </span>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default NoticeBoard;
