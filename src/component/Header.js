import { useState } from "react";
import SearchModal from "./SearchModal.js";

const Header = ({dummyList}) => {
    const [isSearch, setIsSearch] = useState(false);
    
    const showSearch = () => {
        setIsSearch(true);
    }
    const closeSearch = (i) => {
        setIsSearch(false);
    }

    return (
        <header id="header">
            <div className="hd_in">
                <h1 className="h_logo"><a href="../../public/index.html">CINE LIB</a></h1>
                <div className="h_utill">
                    <ul>
                        <li className="h_search">
                            <p onClick={showSearch}>검색</p>
                            <div className={isSearch ? "h_search_modal show" : "h_search_modal"}>
                                {dummyList.map((i) => (
                                    <SearchModal closeSearch={closeSearch} {...i} />
                                ))}
                            </div>
                        </li>
                        <li className="h_signIn"><p><a href="">로그인</a></p></li>
                        <li className="h_menu"><p>메뉴</p></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;