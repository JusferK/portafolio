import { TabView, TabPanel } from 'primereact/tabview';
import { useEffect, useState } from "react";
import styles from './project-tab.module.css';
import { Carousel } from "primereact/carousel";
import { projectImages } from "../../util/util";
import { ProgressSpinner } from 'primereact/progressspinner';
import { Image as PrimeImage } from 'primereact/image';
import type { ProjectType } from '../../type/project.type';


type ProjectTabProps = {
    project: ProjectType;
};

const ProjectTab = ({ project }: ProjectTabProps) => {

    const { content } = project;
    const useBiggerContainer = content.images.length > 10;

    return (
      <div className={styles['project_tab_container']}>
          <TabView className={styles['tabview']}>
              <TabPanel
                  header='Fotos'
                  className={styles['information_container']}
              >
                  <section>
                      <h2>Imagenes</h2>
                      <Carousel
                          value={content.images}
                          numVisible={1}
                          numScroll={1}
                          itemTemplate={(image: string) => <ImageTemplate key={image} image={image} />}
                          className={`${useBiggerContainer ? styles['bigger_container'] : ''}`}
                      />
                  </section>
              </TabPanel>
              <TabPanel
                  header='Videos'
                  className={styles['information_container']}
              >
                  <section>
                      <h2>Videos</h2>
                      <Carousel
                          value={content.video.length === 0 ? [null] : content.video}
                          numVisible={1}
                          numScroll={1}
                          itemTemplate={(video: string | null) => <VideoTemplate key={video} video={video} />}
                      />
                  </section>
              </TabPanel>
          </TabView>
      </div>
    );
};

const ImageTemplate = ({ image }: { image: string }) => {

    const [imageIsMobile, setImageIsMobile] = useState(false);

    useEffect(() => {
        const imageUrl = projectImages[image];
        if (!imageUrl) return;

        const img = new Image();
        img.onload = () => {
            setImageIsMobile(img.width < 500);
        };
        img.src = imageUrl;

        return () => { img.onload = null; };

    }, [image]);

    return (
        <div className={styles['carousel_container']}>
            <PrimeImage
                src={projectImages[image]}
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

const VideoTemplate = ({ video }: { video: string | null }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={styles['carousel_container']}>
            {video ? (
                <>
                    { isLoading && (
                        <ProgressSpinner
                            className={styles['spinner']}
                            strokeWidth="4"
                            aria-label="Loading"
                            animationDuration="1s"
                        />
                    )}
                    <iframe
                        src={video}
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
