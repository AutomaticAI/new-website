import React from "react";
import { Link } from "react-router-dom";

const Banner: React.FC = (props) => {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <h1 className="mt-48 text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">Make dreams a reality with AutoAI</h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">Try AutoAI to simplify data analysis. Generate answers and make quick & fast thoughts. No manual needed. Experience the future of analytics and say hello to innovation.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <span
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                    <Link to="https://use.autoai.site">Get started</Link>
                </span>
                <a href="https://help.autoai.site" className="text-sm font-semibold leading-6 text-gray-50">
                    Learn more <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    );
};

export default Banner;
