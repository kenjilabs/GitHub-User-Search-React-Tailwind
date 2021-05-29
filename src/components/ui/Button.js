import {classNames} from "../../shared/util";

const SIZE_MAPS = {
    SMALL: 'px-6 py-3 text-xs ',
    LARGE: 'px-8 py-5 ',
};

const THEME_MAPS = {
    PRIMARY: 'bg-blue-400 focus:bg-blue-800  hover:bg-blue-700 text-gray-100 border-blue-200',
    SECONDARY: 'bg-gray-100 focus:bg-gray-300  hover:bg-gray-200 text-gray-400 hover:text-gray-100 border-gray-400',
}
export const Button = (
    {children = [], size = 'LARGE',theme='PRIMARY', className = '', loading = false, ...props}
) => {
    return (
        <button
            {...props}
            className={classNames(
                'appearance-none rounded-lg  border-b-2 focus:outline-none',
                SIZE_MAPS[size],
                loading
                    ? 'bg-red-500 transition ease-in-out duration-150 cursor-not-allowed text-gray-100 text-sm hover:bg-red-500 focus:border-red-700 active:bg-red-700'
                    : THEME_MAPS[theme],
                className,
            )}
            disabled={loading?'disabled':''}
        >
            {loading ? (<span className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
                Processing</span>) : (children)}

        </button>
    )
}

