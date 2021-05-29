import {classNames} from "../../shared/util";
const SIZE_MAPS = {
    SMALL: 'px-2.5 py-3 text-xs ',
    LARGE: 'px-5 py-5',
};
export const Input  = ({ size = 'LARGE', className = '', ...props })=>{
    return (
        <input
            {...props}
            className={classNames(
                'appearance-none  rounded-lg border-b-2 border-gray-300 bg-white placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none',
                SIZE_MAPS[size],
                className
            )}
        />
    )
}

