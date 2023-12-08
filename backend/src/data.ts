
export const sample_foods: any[] = [
    {
        id: "1",
        name: "Pizza",
        price: 10,
        tags: ["italian", "pizza", "cheese"],
        favorite: true,
        stars: 4,
        imageurl: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
        origins: ["Italy"],
        cooktime: "30 minutes"
    },
    {
        id: "2",
        name: "Sushi",
        price: 15,
        tags: ["japanese", "sushi", "fish"],
        favorite: false,
        stars: 5,
        imageurl: "https://cdn.pixabay.com/photo/2017/08/08/12/34/sushi-2618034_960_720.jpg",
        origins: ["Japan"],
        cooktime: "30 minutes"
    },
    {
        id: "3",
        name: "Hamburger",
        price: 5,
        tags: ["american", "hamburger", "cheese"],
        favorite: true,
        stars: 3,
        imageurl: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
        origins: ["USA"],
        cooktime: "30 minutes"
    },
    {
        id: "4",
        name: "Pasta",
        price: 10,
        tags: ["italian", "pasta", "cheese"],
        favorite: false,
        stars: 4,
        imageurl: "https://cdn.pixabay.com/photo/2017/06/01/07/15/food-2362678_960_720.jpg",
        origins: ["Italy"],
        cooktime: "30 minutes"
    },
    {
        id: "5",
        name: "Curry",
        price: 10,
        tags: ["indian", "curry", "spicy"],
        favorite: false,
        stars: 4,
        imageurl: "https://cdn.pixabay.com/photo/2017/06/01/18/46/indian-food-2362569_960_720.jpg",
        origins: ["India"],
        cooktime: "30 minutes"
    },
]

export const sample_tags:any[] = [
    {name: 'All', count: 5},
    {name: "italian", count: 2},
    {name: "japanese", count: 1},
    {name: "american", count: 1},
    {name: "indian", count: 1},
    {name: "pizza", count: 1},
    {name: "cheese", count: 3},
    {name: "sushi", count: 1},

]

export const sample_users: any[] = [
    {
        name: "John Doe",
        email: "correo@correo.com",
        password: "123456",
        address: "123 Main St",
        isAdmin: true,
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password123",
        address: "456 Elm St",
        isAdmin: false,
    },
    {
        name: "Bob Johnson",
        email: "bob@example.com",
        password: "qwerty",
        address: "789 Oak St",
        isAdmin: false,
    },
];
