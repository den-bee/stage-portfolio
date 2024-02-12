export interface Post {
    id: number;
    attributes: {
        title: string;
        content: string;
        datePosted: string;
        image: string;       
    }
}

export interface Posts {
    posts: {
        data: Post[]
    }
}

