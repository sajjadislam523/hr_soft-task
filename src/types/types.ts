export interface NoticeItem {
    id: number;
    text: string;
}

export interface Person {
    id: number;
    name: string;
    role: string;
    imageUrl?: string;
}

export interface CommunitySectionProps {
    heroImageUrl?: string;
    heroImageAlt?: string;
    notices: NoticeItem[];
    convener: Person;
    jointConvener: Person;
    onDetailsClick?: (person: Person) => void;
}

export interface StatItem {
    id: number;
    label: string;
    value: number;
    iconType: "total" | "general" | "life" | "female" | "male" | "committee";
}

export interface EventCardData {
    title: string;
    location: string;
    description: string;
    lastDate: string;
    onViewDetails?: () => void;
}
