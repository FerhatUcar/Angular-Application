import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PostsService {
    constructor(private http: HttpClient) {
        console.log('PostsService Initialized...');
    }

    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}
