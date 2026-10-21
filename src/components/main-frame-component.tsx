import styles from './main-frame-component.module.css';
import Header from "./header/header";
import Banner from "./banner/banner";
import ProjectTab from "./project-tab/project-tab";
import Footer from "./footer/footer";
import {
    lazy,
    Suspense,
    useEffect,
    useRef,
    useState
} from "react";
import { Dialog } from "primereact/dialog";
import type { ProjectType } from '../type/project.type';
const Projects = lazy(() => import('./main/projects/projects'));
const WhatIDo = lazy(() => import('./main/what-i-do/what-do'));

const MainFrameComponent = () => {

    const [visible, setVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('SobreMi');
    const [project, setProject] = useState<ProjectType | null>(null);
    const sectionsRef = useRef<Record<'me' | 'project' | 'what', HTMLElement | null>>({
        me: null,
        project: null,
        what: null,
    });

    const openProject = (selectedProject: ProjectType): void => {
        setProject(selectedProject);
        setVisible(true);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActiveSection(entry.target.id);
            });
        }, {
            root: null,
            rootMargin: '-100px 0px 0px 0px',
            threshold: 0.3,
        });

        Object.values(sectionsRef.current).forEach(section => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header activeSection={activeSection} />
            <main>
                <section
                    id="SobreMi"
                    className="block"
                    ref={el => { sectionsRef.current.me = el; }}
                >
                    <Banner />
                </section>
                <section
                    id="Proyectos"
                    className="block"
                    ref={el => { sectionsRef.current.project = el; }}
                >
                    <Suspense fallback={<p>Cargando proyectos...</p>}>
                        <Projects onSelectProject={openProject} />
                    </Suspense>
                </section>
                <section
                    id="Habilidades"
                    className="block"
                    ref={el => { sectionsRef.current.what = el; }}
                >
                    <Suspense fallback={<p>Cargando habilidades...</p>}>
                        <WhatIDo />
                    </Suspense>
                </section>
                <Dialog
                    visible={visible}
                    onHide={() => setVisible(false)}
                    breakpoints={{ '576px': '95vw', '768px': '85vw' }}
                    draggable={false}
                    modal={true}
                    className={styles['modal_style']}
                    blockScroll={true}
                >
                    {project && <ProjectTab project={project} />}
                </Dialog>
            </main>
            <Footer />
        </>
    )
};

export default MainFrameComponent;