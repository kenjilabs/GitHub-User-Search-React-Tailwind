export const Alert = ({
                           title = 'Error',
                           message = '',
                       }) => {
    return (
        <div className="alert bg-red-200 p-5 rounded-lg border-b-2 border-red-300">
            <div className="alert-content ml-4">
                <div className="alert-title font-semibold text-lg text-red-800">
                    {title}
                </div>
                <div className="alert-description text-sm text-red-600">{message}</div>
            </div>
        </div>
    )
}