import Table from 'rc-table';
import {Pagination} from "./Pagination";

export const Results = ({data = [], columns = [], className = '', total = 0, page = 0, perPage, setPage}) => {

    if (data.length === 0) {
        return '';
    }

    return (
        <div className={className}>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <Table
                    rowKey={record => record.id}
                    columns={columns}
                    data={data}
                    footer={() => (<Pagination perPage={perPage} page={page} total={total} setPage={setPage}  />)}
                />
            </div>
        </div>
    )
}

