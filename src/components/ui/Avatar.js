export const Avatar = ({
                           label = '',
                           image = '',
                           url = '',
                       }) => {
    return (
        <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
                <img className="w-full h-full rounded-full"
                     src={image}
                     alt={label}/>
            </div>
        </div>
    )
}