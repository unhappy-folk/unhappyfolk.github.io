export type Organization = {
    name: string;
    logo: string;
    github : string,
    donation : string,
    socialLinks : {
        [key: string]: string
    },
    about : {
        [key: string]: string
    }
}