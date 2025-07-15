import { TabView, TabPanel } from 'primereact/tabview';
import { useEffect, useState } from "react";
import styles from './project-tab.module.css';
import React from "../../assets/svg/react.svg";
import { Carousel } from "primereact/carousel";
import { projectImages } from "../../util/util.js";
import { ProgressSpinner } from 'primereact/progressspinner';


const ProjectTab = ({ props }) => {

    const { project } = props;
    const { content } = project;

    return (
      <div className={styles.project_tab_container}>
          <TabView className={styles.tabview}>
              <TabPanel
                  header='Fotos'
                  className={styles.information_container}
              >
                  <section>
                      <h2>Imagenes</h2>
                      <Carousel
                          value={content.images}
                          numVisible={1}
                          numScroll={1}
                          itemTemplate={ImageTemplate}
                      />
                  </section>
              </TabPanel>
              <TabPanel
                  header='Videos'
                  className={styles.information_container}
              >
                  <section>
                      <h2>Videos</h2>
                      <Carousel
                          value={content.video.length === 0 ? [null] : content.video}
                          numVisible={1}
                          numScroll={1}
                          itemTemplate={VideoTemplate}
                      />
                  </section>
              </TabPanel>
          </TabView>
      </div>
    );
};

const ImageTemplate = (props) => {
    const [isImageMobile, setIsImageMobile] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = projectImages[props];
        img.onload = () => {
            if (img.width < 450) setIsImageMobile(true);
        };
    }, []);

    return (
        <div className={styles.carousel_container}>
            <img
                src={projectImages[props]}
                alt='imagen del proyecto'
                loading="lazy"
                style={{
                    objectFit: 'contain',
                    width: `${ isImageMobile ? '27%' : '80%' }`,
                }}
            />
        </div>
    );
};

const VideoTemplate = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => console.log(props), []);

    return (
        <div className={styles.carousel_container}>
            {props ? (
                <>
                    { isLoading && (
                        <ProgressSpinner
                            className={styles.spinner}
                            strokeWidth="4"
                            aria-label="Loading"
                            animationDuration="1s"
                        />
                    )}
                    <iframe
                        src={props}
                        frameBorder="0"
                        allowFullScreen
                        loading="lazy"
                        onLoad={() => setIsLoading(false)}
                        style={{
                            objectFit: 'contain',
                            width: `100%`,
                        }}
                    />
                </>
            ) : (
                <h2 style={{
                    color: 'white',
                    alignSelf: 'center',
                }}
                >No hay videos disponibles</h2>
            )}
        </div>
    );
};

export default ProjectTab;