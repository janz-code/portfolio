export default interface ITimeline{
    name: string;
    startDate: Date
    endDate: Date
    institution: string;
    location: string;
    type: string;
    achievements?: string[];
}

export interface IEducationTimeline extends ITimeline{
}

export interface IExperienceTimeline extends ITimeline{
}