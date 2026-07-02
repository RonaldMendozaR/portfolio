export default function Background() {
    return (
        <div
            className="
                absolute
                inset-0
                -z-10
                overflow-hidden
            "
        >

            {/* Glow azul */}
            <div
                className="
                    absolute
                    inset-0
                    bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                    bg-[size:45px_45px]
                "
            />

            <div
                className="
                    absolute
                    right-20
                    top-1/2
                    -translate-y-1/2
                    w-125
                    h-125
                    rounded-full
                    bg-blue-500/20
                    blur-[140px]
                "
            />

        </div>
    );
}