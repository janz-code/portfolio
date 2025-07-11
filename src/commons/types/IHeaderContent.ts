export default interface IHeaderContent {
    title: string;
    nav: INavigationContent[]
}

export interface INavigationContent{
    label: string;
    path: string;
}