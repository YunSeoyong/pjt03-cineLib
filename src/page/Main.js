import styled from "styled-components";
import MainBn from "../component/MainBn";

const Main = () => {


    return (
        <MainWrap>
            <MainBn />
        </MainWrap>
    );
};
export default Main;

const MainWrap = styled.main`
    position: relative;
    width: 100%;
    padding-top: 80px;
`;