import type { Stack } from './project.type';

export type SkillStack = {
    type: string;
    technologies: Array<Stack>;
};

export type SkillType = {
    title: string;
    description: string;
    file: string;
    id: number;
    stack: Array<SkillStack>;
};
