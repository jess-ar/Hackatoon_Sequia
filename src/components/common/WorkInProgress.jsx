import underConstructionImage from "../../assets/images/underconstruction.webp";

const WorkInProgress = ({ section = "this page" }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[rgb(24,63,76)] px-4">
            <img
                src={underConstructionImage}
                alt="Under Construction"
                className="w-64 h-auto mb-6 rounded-lg shadow-lg"
            />
            <h1 className="text-4xl font-extrabold text-[rgb(255,255,255)] md:text-5xl">
                🚧 Work in Progress 🚧
            </h1>
            <p className="mt-4 text-lg text-[rgb(200,200,200)]">
                {section} is currently under development. Check back soon!
            </p>
            <a
                href="/"
                className="px-6 py-3 mt-6 text-lg font-semibold text-white transition-all bg-[rgb(19,110,110)] rounded-lg hover:bg-[rgb(44,123,123)] focus:ring-2 focus:ring-[rgb(44,123,123)] focus:ring-offset-2"
            >
                Return Home
            </a>
        </div>
    );
};

export default WorkInProgress;
