import './main-frame-component.css';
import Header from "./header/header.jsx";
import Banner from "./banner/banner.jsx";
import Main from "./main/main.jsx";

const MainFrameComponent = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Main />
            </main>
        </>
    )
};

export default MainFrameComponent;