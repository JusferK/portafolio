export type Description = {
    name: string;
    file: string;
    link: string;
    id: string;
};

export type SocialMediaAction = (media: Description) => void;

export type SocialMedia = Description & {
    clickHandler: SocialMediaAction;
};

export type ProfileDescription = {
    title: string;
    subtitle: string;
    description: string;
    bigAvatar: string;
    socialMedia: Array<SocialMedia>;
};
