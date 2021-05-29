import {useEffect, useState} from "react";
import {Results} from "./Results";
import {Button} from "./ui/Button";
import {Input} from "./ui/Input";
import {Avatar} from "./ui/Avatar";
import axios from "axios";
import {Alert} from "./ui/Alert";
import _ from "lodash";

const BASE_URL = 'https://api.github.com/search/users';
const PER_PAGE = 9;
const FIRST_PAGE = 1;

const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar_url',
        key: 'avatar_url',
        width: '40px',
        render: (item, data) => <Avatar image={item} label={data.login}/>,
    },
    {
        title: 'Login',
        dataIndex: 'login',
        key: 'login',
        render: (item, data) => <p><a target="_blank" href={data.html_url}>{item}</a></p>,

    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        width: '40px',
        render: (item) => <p>{item}</p>,

    },
];


export default () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(FIRST_PAGE);
    const [sort, setSort] = useState('login');
    const [order, setOrder] = useState('asc');

    useEffect(search, [page]);


    function search(){
        if(value === ''){
            return;
        }
        setIsLoading(true);

        axios.get(BASE_URL, {
            params: {
                q: value,
                page: page,
                sort: sort,
                order: order,
                per_page: PER_PAGE,
            }
        })
            .then(function (response) {
                const {data, status} = response;
                setIsLoading(false);
                setItems(data.items);
                setTotalCount(data.total_count);
            })
            .catch(function (er) {
                const {message} = er;
                setError(message);
                setItems([])
                setIsLoading(false);
            })

    }

    function handleSubmit(e) {
        e.preventDefault();
        reset();
        if(FIRST_PAGE === page){
            search();
        }else{
            setPage(FIRST_PAGE)
        }
    }

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleClear(){
        setValue('');
        reset();
    }

    const reset = () => {
        setError('');
        setItems([]);
    }

    return (
        <div>
            <div className="sm:mt-40 ">

                <form className="sm:w-9/12 m-auto" onSubmit={handleSubmit}>
                    <h1 className="font-bold text-left text-gray-400 text-2xl sm:text-4xl mb-4 sm:mb-8">Search GitHub User</h1>

                    <div className="w-full flex relative mb-8">
                        {value !=='' && <span onClick={handleClear} className="absolute -bottom-7 text-xs text-gray-400 left-2 font-semibold underline cursor-pointer">Clear Search</span>}
                        <Input placeholder="Search..."
                               size="LARGE"
                               value={value}
                               className="rounded-r-none w-full"
                               onChange={handleChange}/>
                        <Button
                            loading={isLoading}
                            className="rounded-l-none md:w-1/4"
                            size="LARGE"
                            type="submit"
                        >Go</Button>
                    </div>
                    <div className="relative  my-2">
                        {error && <Alert title="Error" message={error}/>}
                    </div>
                </form>
            </div>
            <Results data={items} total={totalCount} page={page} perPage={PER_PAGE} setPage={setPage} columns={columns} className="relative sm:w-9/12 m-auto"/>
        </div>

    )
}
