import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="h-screen  flex items-center justify-center px-6 bg-orange-50 dark:bg-[#1B1A55]">
            <div className="max-w-xl text-center space-y-6">
                <h1 className="text-6xl font-extrabold text-orange-500">404</h1>
                
                <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    Oops! You wandered off the learning path... 🍊
                </p>

                <p className="text-md md:text-lg text-gray-600 dark:text-gray-400">
                    But don’t worry, adventures always lead back home!
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center px-6 py-3 rounded-full transition-colors bg-orange-500 hover:bg-orange-600 text-white dark:bg-orange-400 dark:hover:bg-orange-500 duration-200 text-sm font-bold shadow-md"
                >
                    Take Me Home
                </Link>
            </div>
        </div>
    );
}

export default Custom404;
