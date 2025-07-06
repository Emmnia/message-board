import { Injectable, signal } from "@angular/core";
import { Post } from "./interfaces";

@Injectable({ providedIn: 'root' })
export class PostService {
    private postsSignal = signal<Post[]>([]);

    posts = this.postsSignal.asReadonly();

    getPosts() {
        return this.postsSignal();
    }

    addPost(post: Post) {
        this.postsSignal.update(posts => [...posts, post]);
    }
}