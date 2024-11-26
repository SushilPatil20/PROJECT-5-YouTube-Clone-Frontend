import { useLocation } from "react-router"
import { jwtDecode } from "jwt-decode"; // Install with: npm install jwt-decode
import { formatDistanceToNow, parseISO } from 'date-fns';




export const carts = [
    {
        id: 10100001,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Mani ने 'Chunar' Song गाकर किया सबको Emotional | Superstar Singer 2| Heart Breaking Songs",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "CodeAcademy",
        views: "1.2M views",
        likes: 54000,
        dislikes: 1200,
        comments: [
            { user: "JohnDoe", text: "Amazing performance!" },
            { user: "JaneSmith", text: "So emotional, loved it!" },
            { user: "MusicFan99", text: "Gave me chills." }
        ],
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100002,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Top 10 Motivational Songs to Start Your Day",
        thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg",
        channel: "MusicHits",
        views: "2.5M views",
        likes: 75000,
        dislikes: 800,
        comments: [
            { user: "InspireMe", text: "Just what I needed to start the day!" },
            { user: "RockyBalboa", text: "Love this playlist!" }
        ],
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100003,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Relaxing Instrumental Music Compilation",
        thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg",
        channel: "PeacefulMelodies",
        views: "3.8M views",
        likes: 98000,
        dislikes: 400,
        comments: [
            { user: "ZenMaster", text: "Perfect for relaxation!" },
            { user: "SoothingSounds", text: "Listening to this daily." },
            { user: "MeditationGuru", text: "Beautiful music." }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100004,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Epic Battle Music - Best of Gaming Soundtracks",
        thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg",
        channel: "GameZone",
        views: "1.9M views",
        likes: 45000,
        dislikes: 1500,
        comments: [
            { user: "GamerPro", text: "Gets me pumped every time!" },
            { user: "BattleMusicFan", text: "Great for gaming sessions." }
        ]
        ,

        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100005,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Nature's Beauty: Calming Waterfall Sounds",
        thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg",
        channel: "NatureLover",
        views: "900K views",
        likes: 62000,
        dislikes: 500,
        comments: [
            { user: "NatureAddict", text: "So calming and beautiful!" },
            { user: "RelaxationStation", text: "Listening to this while studying." }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100006,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "CodeAcademy Tutorial: JavaScript Essentials",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "CodeAcademy",
        views: "450K views",
        likes: 30000,
        dislikes: 200,
        comments: [
            { user: "CodeNewbie", text: "This helped me understand the basics." },
            { user: "JSDev", text: "Great tutorial, thanks!" }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100007,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Yoga for Beginners | Daily Routine",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "HealthGuru",
        views: "1.1M views",
        likes: 40000,
        dislikes: 300,
        comments: [
            { user: "YogaLover", text: "Perfect for my morning routine." },
            { user: "FitLife", text: "Simple and effective exercises." }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100008,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Epic Coding Playlist - Focus Music",
        thumbnail: "https://i.ytimg.com/vi/tAGnKpE4NCI/hq720.jpg",
        channel: "DevVibes",
        views: "3.2M views",
        likes: 105000,
        dislikes: 600,
        comments: [
            { user: "FocusedCoder", text: "Helps me code longer!" },
            { user: "ChillVibes", text: "This is a vibe!" }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100009,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "JavaScript Full Course - Beginner to Advanced",
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg",
        channel: "LearnWithMe",
        views: "2.7M views",
        likes: 92000,
        dislikes: 800,
        comments: [
            { user: "DevBeginner", text: "A lot of helpful info!" },
            { user: "ProCoder", text: "I learned so much here!" }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100010,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Morning Relaxation Music for Meditation",
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg",
        channel: "SoulJourney",
        views: "4.0M views",
        likes: 78000,
        dislikes: 500,
        comments: [
            { user: "MeditationGuru", text: "Perfect for my morning routine." },
            { user: "InnerPeace", text: "Beautiful and calming." }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100011,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Best of Bollywood Romantic Songs",
        thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg",
        channel: "BollywoodBeats",
        views: "3.5M views",
        likes: 87000,
        dislikes: 900,
        comments: [
            { user: "RomanticSoul", text: "Brings back memories!" },
            { user: "BollywoodFan", text: "Love these classics!" }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100012,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Productivity Music for Programmers",
        thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg",
        channel: "FocusTime",
        views: "800K views",
        likes: 46000,
        dislikes: 300,
        comments: [
            { user: "CodeMaster", text: "Great for coding sessions." },
            { user: "InTheZone", text: "Helps me focus!" }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100013,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Soothing Rain Sounds for Sleep & Relaxation",
        thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg",
        channel: "CalmWave",
        views: "5.2M views",
        likes: 150000,
        dislikes: 200,
        comments: [
            { user: "Sleeper", text: "Puts me to sleep right away." },
            { user: "PeacefulDreams", text: "Perfect for unwinding." }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100014,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Python Programming Crash Course",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "CodeAcademy",
        views: "2.1M views",
        likes: 58000,
        dislikes: 900,
        comments: [
            { user: "PythonDev", text: "Very beginner friendly!" },
            { user: "CodeGeek", text: "Great tips for beginners!" }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100015,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "10 Tips for Better Public Speaking",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "PublicSpeaking101",
        views: "1.3M views",
        likes: 22000,
        dislikes: 300,
        comments: [
            { user: "SpeakerNerd", text: "These tips are really helpful!" },
            { user: "NervousSpeaker", text: "I'll definitely use these!" }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100016,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "The Art of Photography: Capture the Moment",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "PhotoMaster",
        views: "600K views",
        likes: 33000,
        dislikes: 200,
        comments: [
            { user: "PhotographyLover", text: "Amazing tips!" },
            { user: "InstaPro", text: "Can't wait to try these!" }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"

    },
    {
        id: 10100017,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Understanding Blockchain Technology",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "TechTalks",
        views: "850K views",
        likes: 50000,
        dislikes: 600,
        comments: [
            { user: "CryptoFan", text: "Great explanation!" },
            { user: "BlockchainGuru", text: "Very informative!" }
        ]
        ,
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"
    },
    {
        id: 10100018,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "How to Create Your First App with React",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "DevTraining",
        views: "1.4M views",
        likes: 70000,
        dislikes: 1000,
        comments: [
            { user: "ReactNerd", text: "This is a perfect starter!" },
            { user: "CodeEnthusiast", text: "Can't wait to get started!" }
        ]
        ,
        uploadDate: "30-10-2024"
        ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"
    },
    {
        id: 10100019,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Top 5 Meditation Techniques for Beginners",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "Mindfulness",
        views: "3.0M views",
        likes: 82000,
        dislikes: 500,
        comments: [
            { user: "CalmMind", text: "These techniques are so helpful!" },
            { user: "MindfulLiving", text: "I love the guidance!" }
        ],
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"
    },
    {
        id: 10100020,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Travel Vlog: Exploring the Wonders of Japan",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "Wanderlust",
        views: "1.8M views",
        likes: 96000,
        dislikes: 300,
        comments: [
            { user: "TravelBug", text: "This makes me want to travel!" },
            { user: "JapanLover", text: "Such beautiful footage!" }
        ],
        uploadDate: "30-10-2024",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio natus minima qui dolor harum voluptas voluptates nemo quas quidem expedita blanditiis dicta repudiandae veritatis exercitationem sint dolorum unde eum, autem debitis tempore. Voluptate, adipisci temporibus possimus repellat sequi cumque hic veritatis a obcaecati perspiciatis commodi fugit quam amet magni est ut facere. Ullam cum veritatis saepe in debitis quia neque culpa eveniet nam non animi totam autem ad voluptas, distinctio dignissimos. Tenetur et consectetur rerum placeat delectus, ea quaerat accusamus harum laudantium obcaecati temporibus repudiandae aut a nulla at cum incidunt itaque aliquid impedit qui dolorum totam sed maxime aperiam? Molestias provident rem maiores repellendus necessitatibus suscipit fugiat beatae ullam nobis tempore eius similique aut porro inventore architecto dolorem et, aliquam quisquam omnis debitis quibusdam tenetur odio placeat. Mollitia asperiores laboriosam aliquid minima necessitatibus quasi! Sunt fugiat, ab atque aperiam saepe alias eum quae culpa consequatur facere libero incidunt enim quam? Cupiditate cumque, consectetur corporis quaerat mollitia provident nobis nisi dignissimos incidunt est asperiores magnam sequi hic deserunt vel voluptates, ipsum ex autem unde odio perspiciatis omnis, accusamus voluptatum. Natus facere veritatis sit facilis repellendus sapiente! Culpa facere optio sint magnam,"
    }
];
export const comments = [
    {
        id: 1,
        channel: "CodeAcademy",
        profileImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&s",
        comment: "Very nice song👏🏻",
        likse: 7,
        dislikes: 3,
    },
    {
        id: 2,
        channel: "MUZIC MANTRA",
        profileImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_P-q6NHBvJE07jKBmpMxCtJV1OoWjIsGLig&s",
        comment: "Jay shree ram 🙏🏻🙏🏻🙏🏻",
        likse: 6,
        dislikes: 3,
    },
];
export const back = () => window.history.back()

export const checkScreenSize = () => window.innerWidth >= 1312


/**
 * 
 * @returns {String} pathname
 */
export const getUrlPathName = () => {
    const { pathname } = useLocation();
    return pathname
}

/**
 * 
 * @param {Number} num 
 * @returns {String} num
 */
export const formatCount = (num) => {
    if (num >= 1000 && num < 1000000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    return num.toString();
}


/**
 * 
 * @param {String} input 
 * @returns {String} name
 */
export const sanitizeString = (string) => {
    const baseName = string.replace(/\.[^/.]+$/, "");
    const name = baseName.replace(/[^a-zA-Z0-9 ]/g, " ");
    return name
}


/**
 * 
 * @returns {Boolean}
 */
export const compontShouldShowOnSignUpAndSignIn = (pathName) => {
    if (pathName) return !(pathName.toLocaleLowerCase().includes("signin") || pathName.toLocaleLowerCase().includes("signup"))
}


export const storeLocal = (key, value) => {
    return localStorage.setItem(key, value);
}

export const removeLocal = (key) => {
    return localStorage.removeItem(key);
}

export const getLocal = (key) => {
    return localStorage.getItem(key);
}


export const tokenValidator = (token) => {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decoded.exp > currentTime;
    } catch (error) {
        return false;
    }
};

/**
 * Converts an ISO 8601 timestamp to the "DD-MM-YYYY" format.
 * @param {string} isoDate - The ISO 8601 date string (e.g., "2024-11-18T17:05:01.097Z").
 * @returns {string} - The formatted date string in "DD-MM-YYYY".
 */
export const formatToDDMMYYYY = (isoDate) => {
    const date = new Date(isoDate); // Parse the ISO string into a Date object

    const day = String(date.getUTCDate()).padStart(2, '0'); // Get day and pad to 2 digits
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getUTCFullYear(); // Get full year

    return `${day}-${month}-${year}`; // Return the formatted date
}



export const formatTimeAgo = (dateString) => {
    const date = parseISO(dateString); // Parse the date string to Date object
    const distance = formatDistanceToNow(date, { addSuffix: true });

    // If it's less than a minute, show "just now"
    if (distance === 'less than a minute') {
        return 'Just now';
    }
    return distance; // For example: "2 years ago", "3 hours ago", etc.
};