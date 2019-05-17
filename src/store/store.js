import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import {createTime, uuidv4} from "../utils/utils";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        logged: false,
        currentUser: null,
        author: [
            {
                id: "bf40f3b9-a774-4086-ae58-04de879ba151",
                username: "morteza",
                password: "123",
                image: "https://static.productionready.io/images/smiley-cyrus.jpg",
                following: false,
                likes: [
                    {id: "741a4aa9-dfc4-460e-905c-8535388f22dc", commentId: "4834e40d-48a5-4108-9017-57957fd3e745"}
                ]
            },
            {
                id: "7cc4b78b-0742-42dc-b650-c230e0b10e18",
                username: "john",
                password: "123",
                image: "https://static.productionready.io/images/smiley-cyrus.jpg",
                following: false,
                likes: []
            }
        ],
        comments: [
            {
                id: "4834e40d-48a5-4108-9017-57957fd3e745",
                name: "John",
                createdData: "2 minutes ago",
                postId: "8c383826-9815-45bf-8053-1b3598104cd7",
                comment: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus.",
                image: "https://picsum.photos/id/400/70/70",
                likeCount: 10,
                ref: null,
            },
            {
                id: "d12d255e-1878-420d-bc5c-a8c78fa5ae6f",
                postId: "8c383826-9815-45bf-8053-1b3598104cd7",
                name: "John",
                createdData: "2 minutes ago",
                comment: "This is a comment 2",
                image: "https://picsum.photos/id/400/70/70",
                ref: "4834e40d-48a5-4108-9017-57957fd3e745",
            },
            {
                id: "1301a730-3e8b-456a-aef8-5eb275b6f51c",
                postId: "8c383826-9815-45bf-8053-1b3598104cd7",
                comment: "Reply to This is a comment 2 @John",
                name: "John",
                createdData: "2 minutes ago",
                image: "https://picsum.photos/id/400/70/70",
                ref: "4834e40d-48a5-4108-9017-57957fd3e745",
            },
            {
                id: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                postId: "8c383826-9815-45bf-8053-1b3598104cd7",
                name: "John",
                createdData: "2 minutes ago",
                comment: "This is a new comment 10",
                image: "https://picsum.photos/id/400/70/70",
                ref: null,
            },
            {
                id: "dd81bb33-727b-43cb-ab9c-92b21c2ef7f3",
                postId: "8c383826-9815-45bf-8053-1b3598104cd7",
                comment: "Reply to This is a new comment 10",
                image: "https://picsum.photos/id/400/70/70",
                ref: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
            }
        ],
        posts: [
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "This is a test",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-16T17:07:10.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    likeCount: 20,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-16T17:38:10.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    likeCount: 12,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "Lios",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "0a1714bd-8957-425e-828a-ea047b5dd1cd",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
            [
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
                {
                    id: "16c7739a-1cbc-4c8e-a95d-fbe390628f5e",
                    title: "Vuejs",
                    description: "",
                    image: "https://picsum.photos/id/227/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Programming Language", "Javascript", "Framework"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "3e4f4a41-9d82-4416-9428-1658ee0d039d",
                    category: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c",
                    author: "7cc4b78b-0742-42dc-b650-c230e0b10e18"
                },
                {
                    id: "8c383826-9815-45bf-8053-1b3598104cd7",
                    title: "CLRS",
                    description: "",
                    image: "https://picsum.photos/id/228/360/280",
                    body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                    createdAt: "2019-05-12T18:57:39.390Z",
                    updatedAt: "2019-05-12T18:57:39.390Z",
                    tagList: ["Data Structure", "Computer Science", "Algorithm"],
                    favorited: false,
                    favoritesCount: 0,
                    comment: "4834e40d-48a5-4108-9017-57957fd3e745",
                    category: "f8430a7b-3d91-4da9-a643-be556beb0df7",
                    author: "bf40f3b9-a774-4086-ae58-04de879ba151"
                },
            ],
        ],
        filter: {
            allPost: true,
            search: null,
            category: null
        },
        categories: [
            {id: "5251cb21-28b6-464f-b0e8-e2cc9afeb66a", catname: "All"},
            {id: "f8430a7b-3d91-4da9-a643-be556beb0df7", catname: "Computer Science"},
            {id: "97a04f5c-58ce-40b4-be84-87f3af9c8b5c", catname: "Javascript Library"},
            {id: "0a1714bd-8957-425e-828a-ea047b5dd1cd", catname: "Animals"},
            {id: "774b6798-f0e9-4824-8794-7c24858a6281", catname: "Natural"},
            {id: "89932572-e22b-4e14-a9d5-da2059d088ee", catname: "Countries"}
        ],
        singlePost: null,

        pageSize: 5,
        activePage: 1,
        postCount: 0,
        pageCount: 0,
        pagesAvailable: null
    },
    getters: {
        postCategoriesByPieChart: state => {
            if (state.currentUser !== null) {
                let dataLabel = [], dataValue = [];
                const cats = state.categories.filter(x=> x.catname !== "All");
                cats.forEach(category => {
                    dataLabel.push(category.catname);
                    let temp = 0;
                    state.posts.forEach(page => {
                        temp += page.filter(x => x.category === category.id && x.author ===  state.currentUser.id).length;
                    });
                    dataValue.push(temp);
                });
                return {
                    dataLabel,
                    dataValue
                }
            }
        },
        getCurrentUserPosts: state => {
            if (state.currentUser !== null) {
                let dataLabel = [], dataValue = [];
                state.posts.forEach(page => {
                    page.filter(x => x.author === state.currentUser.id)
                        .forEach(a => {
                            dataLabel.push(a.title);
                            dataValue.push(a.likeCount);
                        });
                });
                return {
                    dataLabel,
                    dataValue
                }
            }
            else {
                return null;
            }
        },
        getCurrentUser: state => {
            return state.currentUser;
        },
        getComments: (state) => id => {
            const commentsResult = [];
            state.comments.filter(x => x.postId === id && x.ref === null)
                .forEach(comment => {
                    const result = {comment: comment, replies: []};
                    state.comments.filter(y => y.ref === comment.id).forEach(item => {
                        result.replies.push(item);
                    });
                    commentsResult.push(result);
                });
            return commentsResult;
        },
        getLogStatus: state => state.logged,
        singlePost: state => {
            return state.singlePost;
        },
        latestPosts: state => {
            return state.posts[0];
        },
        posts: state => {
            return state.posts[state.activePage - 1];
        },
        categories: state => {
            let result = [];
            state.posts.forEach(list => {
                list.forEach(post => {
                    result.push(post.category)
                })
            });
            const temp = _.uniq(result).map(item => {
                return {
                    id: item,
                    catname: state.categories.find(x => x.id === item).catname
                }
            });
            temp.unshift(state.categories.find(x => x.catname === "All"));
            return temp;
        },
        activePage: state => {
            return state.activePage;
        },
        postCount: state => {
            return state.postCount;
        },
        pageCount: state => {
            return Math.ceil(state.postCount / state.pageSize);
        },
        pagesAvailable: state => {
            return state.pagesAvailable;
        },
        filteredPost: state => {
            const {filter} = state;
            if (filter.allPost) {
                const temp = state.posts[state.activePage - 1];
                temp.forEach(post => {
                    post.createdAt = createTime(post.createdAt);
                });
                return temp;
            }
            else if (filter.category) {
                const result = [];
                state.posts.forEach(list => {
                    list.forEach(post => {
                        if (post.category === filter.category.id) {
                            result.push(post);
                        }
                    })
                });
                return result;
            }
            else if (filter.search) {
                return state.posts;
            }
        }
    },
    mutations: {
        setUserLike: (state, payload) => {
            const findUser = state.author.find(x => x.id === state.currentUser.id);
            if (findUser) {
                const findCommentInUserProfile = findUser.likes.findIndex(x => x.commentId === payload);
                if (findCommentInUserProfile > -1) {
                    findUser.likes.splice(findCommentInUserProfile, 1);
                }
                else {
                    findUser.likes.push({id: uuidv4(), commentId: payload});
                }
            }
        },
        createUserComment: (state, comment) => {
            state.comments.push({
                id: uuidv4(),
                name: comment.name,
                createdDate: "Recently",
                postId: comment.postid,
                comment: comment.message,
                image: "https://picsum.photos/id/400/70/70",
                likeCount: 0,
                ref: null
            })
        },
        createReplyToComment: (state, payload) => {
            const {comment, message, postId} = payload;
            state.comments.push({
                id: uuidv4(),
                name: state.currentUser.username,
                createdDate: "Recently",
                postId: postId,
                comment: message,
                image: "https://picsum.photos/id/400/70/70",
                likeCount: 0,
                ref: comment.id
            })
        },
        signout: (state) => {
            state.currentUser = null;
            state.logged = false;
        },
        checkLogin: (state, payload) => {
            const {username, password} = payload;
            const findUser = state.author.find(x => x.username === username && x.password === password);
            state.logged = !!findUser;
            if (findUser) {
                state.currentUser = findUser;
            }
        },
        addUser: (state, payload) => {
            payload.id = uuidv4();
            payload.image = "https://static.productionready.io/images/smiley-cyrus.jpg";
            payload.following = false;
            state.author.push(payload);
        },
        resetPagination: (state) => {
            state.pageSize = 5;
            state.activePage = 1;
        },
        changeCategory: (state, category) => {
            if (category.catname === "All") {
                state.filter = {
                    allPost: true,
                    category: null,
                    search: null
                };
            } else {
                state.filter = {
                    allPost: false,
                    category: {
                        id: category.id
                    },
                    search: null
                };
            }
        },
        selectPost: (state, payload) => {
            state.singlePost = payload;
        },
        createPost: (state, payload) => {
            payload.id = uuidv4();
            payload.author = state.currentUser.id;
            payload.createdAt = new Date(Date.now());
            payload.updatedAt = new Date(Date.now());
            if (state.posts[state.posts.length - 1].length < state.pageSize) {
                state.posts[state.pageCount-1].push(payload);
            }
            else {
                const temp = [];
                temp.push(payload);
                state.posts.push(temp);
            }
        },
        setPosts: (state, payload) => {
            // Vue is unable to react to mutations on state arrays (by index)
            Vue.set(state.posts, state.activePage - 1, payload);
            // state.posts.splice(index, 1, payload)
        },
        setCategories: (state, payload) => {
            state.categories = payload;
            // state.categories = [...state.categories, ...payload];
        },
        setPostCount: (state, payload) => {
            state.pageCount = Math.ceil(payload / state.pageSize);
            state.pagesAvailable = _.range(1, state.pageSize + 1);
            state.postCount = payload;
        },
        setPageAvailable: (state, payload) => {
            const {value, moveType} = payload;
            if ((moveType === null || moveType === 'next')
                && state.pagesAvailable[state.pagesAvailable.length - 1] === state.pageCount) {
                return;
            }
            if (value + state.pageSize - 1 <= state.pageCount) {
                state.pagesAvailable = _.range(value, value + state.pageSize);
            }
            else {
                if ((state.pageCount - value + 1) < state.pageSize) {
                    const temp = state.pageSize - (state.pageCount - value + 1);
                    state.pagesAvailable = _.range(value - temp, state.pageCount + 1);
                }
                else {
                    state.pagesAvailable = _.range(value, state.pageCount + 1);
                }
            }
        },
        setActivePage: (state, payload) => {
            state.activePage = payload;
        }
    },
    actions: {
        asyncCreatePost: ({commit}, payload) => {
            Vue.http.post('posts').then(response => {
                commit('createPost', response.body)
            });
        },
        asyncGetCats: ({commit}) => {
            Vue.http.get('posts/categories')
                .then(response => {
                    commit('setCategories', response.body.cats)
                })
        },
        asyncGetPosts: ({commit, state}) => {
            const {pageSize} = state;
            Vue.http.get(`articles?limit=${pageSize}&offset=0`)
                .then(response => {
                    const _articles = response.body.posts;
                    commit('getPosts', _articles);
                    commit('setPostCount', response.body.postCount)
                });
        },
        syncGetPosts: ({commit, state}) => {
            // commit('setPosts', state.posts);
            commit('setPostCount', state.posts.length * state.pageSize)
        },

        asyncGetSpecificPage: ({commit, state}, info) => {
            const {value, moveType} = info;
            if (state.posts[value - 1] !== undefined) {
                commit('setPageAvailable', {value, moveType});
                commit('setActivePage', value);
                return;
            }
            const {pageSize} = state;
            const offset = value * pageSize - pageSize;
            Vue.http.get(`articles?limit=${pageSize}&offset=${offset}`)
                .then(response => {
                    const _articles = response.body.posts;
                    commit('setPageAvailable', {value, moveType});
                    commit('setActivePage', value);
                    commit('getPosts', _articles);
                });
        },
        syncGetSpecificPage: ({commit, state}, info) => {
            const {value, moveType} = info;
            commit('setPageAvailable', {value, moveType});
            commit('setActivePage', value);
        },
    },
    modules: {}
});
