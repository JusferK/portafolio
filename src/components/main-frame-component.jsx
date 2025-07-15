import styles from './main-frame-component.module.css';
import Header from "./header/header.jsx";
import Banner from "./banner/banner.jsx";
import React from "../assets/svg/react.svg";
import ProjectTab from "./project-tab/project-tab.jsx";
import Footer from "./footer/footer.jsx";
import {
    lazy,
    useEffect,
    useRef,
    useState
} from "react";
import { Dialog } from "primereact/dialog";
const Projects = lazy(() => import('./main/projects/projects.jsx'));
const WhatIDo = lazy(() => import('./main/what-i-do/what-do.jsx'));

const MainFrameComponent = () => {

    const [visible, setVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('SobreMi');
    const [project, setProject] = useState(undefined);
    const sectionsRef = useRef({});

    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px 0px 0px',
        threshold: 0.3,
    };

    const hideModal = (project = undefined, action = 'CLOSE') => {
        setVisible(prev => !prev);
        action !== 'CLOSE' && setProject(project);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id));
        }, observerOptions);

        Object.values(sectionsRef.current).forEach(section => section && observer.observe(section));
    }, []);

    return (
        <>
            <Header props={activeSection}  />
            <main>
                <section
                    id="SobreMi"
                    className="block"
                    ref={el => sectionsRef.current.me = el}
                >
                    <Banner />
                </section>
                <section
                    id="Proyectos"
                    className="block"
                    ref={el => sectionsRef.current.project = el}
                >
                    <Projects props={{ handler: (projects, action) => hideModal(projects, action) }} />
                </section>
                <section
                    id="Habilidades"
                    className="block"
                    ref={el => sectionsRef.current.what = el}
                >
                    <WhatIDo />
                </section>
                <Dialog
                    visible={visible}
                    onHide={hideModal}
                    breakpoints={{ '576px': '95vw', '768px': '85vw' }}
                    draggable={false}
                    modal={true}
                    className={styles.modal_style}
                    blockScroll={true}
                >
                    <ProjectTab props={{ project }}/>
                </Dialog>
            </main>
            <Footer />
        </>
    )
};

export default MainFrameComponent;