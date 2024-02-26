import { useState } from "react";

const SearchModal = ({closeSearch}) => {
    const [searchInput, setSearchInput] = useState('');
    const changeSearch = (e) => {
        setSearchInput(e.target.value);
    }
    const onCloseSearch = () => {
        closeSearch();
    }

    return (
        <div className="searchModal">
            <div className="search_in">
                <form action="">
                    <input 
                        type="text"
                        placeholder="검색어를 입력하세요."
                        id="searchInput"
                        name="searchInput"
                        value={searchInput}
                        onChange={changeSearch}
                    />
                    <button
                        className="sm_btn"
                    >검색하기</button>
                </form>
                <div className="sm_close" onClick={onCloseSearch}><span className="hide">검색창 닫기</span></div>
            </div>
        </div>
    );
};

export default SearchModal;