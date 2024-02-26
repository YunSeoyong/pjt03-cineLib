const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer_in">
                <div className="ft_logo">CINE LIB</div>
                <div className="ft_bottom">
                    <div className="ft_menu">
                        <ul>
                            <li><a href="">고객센터</a></li>
                            <li><a href="">이용약관</a></li>
                            <li><a href="">쿠키설정</a></li>
                            <li><a href="">법적고지</a></li>
                            <li><a href="">개인정보처리방침</a></li>
                        </ul>
                    </div>
                    <div className="ft_info">
                        <p>서울특별시 송파구 올림픽로 300 롯데월드타워 102층 0506호</p>
                        <p>
                            <span>통신판매업신고번호 : 제1997-태양계우라노스-0506</span>
                            <span>사업자등록번호 : 123-45-67890</span>
                        </p>
                        <p>
                            <span>대표 : 윤서용</span>
                            <span>seoy2515@gmail.com</span>
                            <span>010-4294-2415</span>
                        </p>
                        <p>&copy; 2023. YONG. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;