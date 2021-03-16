/// <reference types="react" />
declare const Header: (props: any) => JSX.Element;
declare type SubHeaderProps = {
    title: string;
};
declare const SubHeader: ({ icon, iconType, title }: SubHeaderProps) => JSX.Element;
export { Header, SubHeader };
