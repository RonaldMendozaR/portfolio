type SectionTitleProps = {
    title: string;
};

export default function SectionTitle({
    title,
}: SectionTitleProps) {
    return (
        <>
            <h2
                className="
                    text-5xl
                    font-bold
                    text-white
                "
            >
                {title}
            </h2>

            <div
                className="
                    w-28
                    h-1
                    rounded-full
                    bg-blue-500
                    mt-4
                    mb-10
                "
            />
        </>
    );
}