type SectionTitleProps = {
    title: string;
    subtitle?: string;
};

export default function SectionTitle({
    title,
    subtitle,
}: SectionTitleProps) {
    return (
        <div className="mb-14">
            <h2 className="text-5xl font-bold">
                {title}
            </h2>

            <div className="w-32 h-1 bg-blue-500 rounded-full mt-4 mb-6"></div>

            {subtitle && (
                <p className="text-gray-400 max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
}