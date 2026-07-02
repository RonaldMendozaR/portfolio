interface ButtonProps {
    text: string;
}

export default function Button({ text }: ButtonProps) {
    return (
        <button
            className="
                px-6
                py-3
                rounded-xl
                bg-blue-500
                text-white
                font-semibold
                hover:bg-blue-600
                transition
                duration-300
            "
        >
            {text}
        </button>
    );
}