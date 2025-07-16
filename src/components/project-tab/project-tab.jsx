import { TabView, TabPanel } from 'primereact/tabview';
import { useEffect, useState } from "react";
import styles from './project-tab.module.css';
import React from "../../assets/svg/react.svg";
import { Carousel } from "primereact/carousel";
import { projectImages } from "../../util/util.js";
import { ProgressSpinner } from 'primereact/progressspinner';
import { Image as PrimeImage } from 'primereact/image';


const ProjectTab = ({ props }) => {

    const { project } = props;
    const { content } = project;
    const [useBiggerContainer, setUseBiggerContainer] = useState(false);

    useEffect(() => {
        setUseBiggerContainer(content.images.length > 10);
    }, [props])

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
                          className={`${useBiggerContainer ? styles.bigger_container : ''}`}
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

    const [imageIsMobile, setImageIsMobile] = useState(false);

    useEffect(() => {
        const imageUrl = projectImages[props];
        if (!imageUrl) return;

        const img = new Image();
        img.src = imageUrl;

        img.onload = () => {
            setImageIsMobile(img.width < 500);
        };


    }, [props]);

    return (
        <div className={styles.carousel_container}>
            <PrimeImage
                src={projectImages[props]}
                alt='imagen del proyecto'
                loading="lazy"
                width="100%"
                height={imageIsMobile ? '80%' : '100%'}
                imageStyle={{ objectFit: 'contain' }}
                preview={true}
            />
        </div>
    );
};

const VideoTemplate = (props) => {
    const [isLoading, setIsLoading] = useState(true);

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