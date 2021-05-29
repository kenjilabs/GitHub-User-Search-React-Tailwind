import Table from 'rc-table';
import {Button} from "./ui/Button";

export const Results = ({data = [], columns = [], className = '', total = 0, page = 0, perPage, setPage}) => {

    if (data.length === 0) {
        return '';
    }

    const handlePageClick = (amount) => {
        setPage((page) => page + amount);
    };

    const nextPageNumber = page * perPage;
    const prevPageNumber = nextPageNumber - perPage;
    return (
        <div className={className}>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <Table
                    rowKey={record => record.id}
                    columns={columns}
                    data={data}
                    footer={() => (<div
                        className="px-5 py-5 bg-white border-t flex  items-center justify-between">
                        <div className="text-xs xs:text-sm text-gray-900">
                            Showing {prevPageNumber === 0 ? 1 : prevPageNumber} to {nextPageNumber <= total ? nextPageNumber : total} of {total} Entries
                        </div>
                        {total > perPage && <div className="inline-flex mt-2 xs:mt-0">
                            {page > 1 && (
                                <Button onClick={() => handlePageClick(-1)}  size="SMALL" theme="SECONDARY" className="bg-gray-100 hover:bg-gray-400  border-r-0 rounded-r-none">
                                    Prev
                                </Button>
                            )}
                            {nextPageNumber < total &&
                            <Button onClick={() => handlePageClick(1)}  size="SMALL" theme="SECONDARY" className="bg-gray-100 hover:bg-gray-400  border-l-0 rounded-l-none">
                                Next
                            </Button>
                            }

                        </div>}

                    </div>)}
                />
            </div>
        </div>
    )
}

