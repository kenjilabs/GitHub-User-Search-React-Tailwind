import Table from 'rc-table';
import {Button} from "./ui/Button";

export const Pagination = ({total = 0,perPage=0,page=0, setPage}) => {



    const handlePageClick = (amount) => {
        setPage((page) => page + amount);
    };

    const nextPageNumber = page * perPage;
    const prevPageNumber = nextPageNumber - perPage;
    return (
        <div
            className="px-5 py-5 bg-white border-t flex  items-center justify-between">
            <div className="text-xs xs:text-sm text-gray-900">
                Showing {prevPageNumber === 0 ? 1 : prevPageNumber} to {nextPageNumber <= total ? nextPageNumber : total} of {total} Entries
            </div>
            {total > perPage && <div className="inline-flex mt-2 xs:mt-0">
                {page > 1 && (
                    <Button onClick={() => handlePageClick(-1)}  size="SMALL" theme="SECONDARY" className="bg-blue-100 hover:bg-blue-300 focus:bg-blue-200  border-r-0 rounded-r-none">
                        Prev
                    </Button>
                )}
                {nextPageNumber < total &&
                <Button onClick={() => handlePageClick(1)}  size="SMALL" theme="SECONDARY" className="bg-blue-100 hover:bg-blue-300 focus:bg-blue-200  border-l-0 rounded-l-none">
                    Next
                </Button>
                }

            </div>}

        </div>
    )
}

