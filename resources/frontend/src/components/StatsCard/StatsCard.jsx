import { Link } from "react-router-dom";

const StatsCard = ({ title, value, icon, linkTo }) => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-md bg-gray-100 p-3">
                        {icon}
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dt className="text-sm font-medium text-gray-500 truncate">
                            {title}
                        </dt>
                        <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-gray-900">
                                {value}
                            </div>
                        </dd>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                    <Link
                        to={linkTo}
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        Ver tudo<span className="sr-only"> {title}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
