export type ProjectType = {
    name: string;
    description: string;
    reason: string;
    stack: Array<Stack>;
    content: Content;
    link: Array<string>;
};

export type Stack = {
    technology: string;
    file: string;
    id: string;
};

export type Content = {
    images: Array<string>;
    video: Array<string>;
};
