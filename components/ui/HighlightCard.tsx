import { LucideIcon } from "lucide-react";

type HighlightCardProps = {
    title: string;
    icon: LucideIcon;
};

export default function HighlightCard({
    title,
    icon: Icon,
}: HighlightCardProps) {
    return (
        <div
            className="
                flex
                items-center
                gap-4
                rounded-xl
                border
                border-slate-800
                bg-slate-900
                px-5
                py-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500
            "
        >
            <Icon
                size={26}
                className="text-blue-400"
            />

            <p className="font-medium text-gray-200">
                {title}
            </p>
        </div>
    );
}