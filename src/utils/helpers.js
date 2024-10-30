import { useLocation } from "react-router"

export const checkScreenSize = () => {
    return window.innerWidth >= 1312
}

export const getUrlPathName = () => {
    const { pathname } = useLocation();
    return pathname
}

export const formatLikesCount = (num) => {
    if (num >= 1000 && num < 1000000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    return num.toString();
}


export const sanitizeString = (input) => {
    const baseName = input.replace(/\.[^/.]+$/, "");

    const name = baseName.replace(/[^a-zA-Z0-9 ]/g, " ");
    return name
}



export const compontShouldShowOnSignUpAndSignIn = () => {
    return !(getUrlPathName().toLocaleLowerCase().includes("signin")
        || getUrlPathName().toLocaleLowerCase().includes("signup"))
}

export const carts = [
    {
        id: 10100001,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title:
            "Mani ने 'Chunar' Song गाकर किया सबको Emotional | Superstar Singer 2| Heart Breaking Songs",
        thumbnail:
            "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "CodeAcademy",
        views: "1.2M views",
    },
    {
        id: 10100002,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Top 10 Motivational Songs to Start Your Day",
        thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg",
        channel: "MusicHits",
        views: "2.5M views",
    },
    {
        id: 10100003,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Relaxing Instrumental Music Compilation",
        thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg",
        channel: "PeacefulMelodies",
        views: "3.8M views",
    },
    {
        id: 10100004,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Epic Battle Music - Best of Gaming Soundtracks",
        thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg",
        channel: "GameZone",
        views: "1.9M views",
    },
    {
        id: 10100005,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Nature's Beauty: Calming Waterfall Sounds",
        thumbnail: "https://i.ytimg.com/vi/DLX62G4lc44/hq720.jpg",
        channel: "NatureLover",
        views: "900K views",
    },
    {
        id: 10100006,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "CodeAcademy Tutorial: JavaScript Essentials",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "CodeAcademy",
        views: "450K views",
    },
    {
        id: 10100007,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Yoga for Beginners | Daily Routine",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "HealthGuru",
        views: "1.1M views",
    },
    {
        id: 10100008,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Epic Coding Playlist - Focus Music",
        thumbnail: "https://i.ytimg.com/vi/tAGnKpE4NCI/hq720.jpg",
        channel: "DevVibes",
        views: "3.2M views",
    },
    {
        id: 10100009,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "JavaScript Full Course - Beginner to Advanced",
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg",
        channel: "LearnWithMe",
        views: "2.7M views",
    },
    {
        id: 10100010,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Morning Relaxation Music for Meditation",
        thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg",
        channel: "SoulJourney",
        views: "4.0M views",
    },
    {
        id: 10100011,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Best of Bollywood Romantic Songs",
        thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg",
        channel: "BollywoodBeats",
        views: "3.5M views",
    },
    {
        id: 10100012,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Productivity Music for Programmers",
        thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg",
        channel: "FocusTime",
        views: "800K views",
    },
    {
        id: 10100013,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Soothing Rain Sounds for Sleep & Relaxation",
        thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hq720.jpg",
        channel: "CalmWave",
        views: "5.2M views",
    },
    {
        id: 10100014,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Python Programming Crash Course",
        thumbnail: "https://i.ytimg.com/vi/3fumBcKC6RE/hq720.jpg",
        channel: "CodeAcademy",
        views: "2.1M views",
    },
    {
        id: 10100015,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Coding ASMR - Focus Music for Coders",
        thumbnail: "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg",
        channel: "ChillCode",
        views: "1.5M views",
    },
    {
        id: 10100016,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Learn HTML in 10 Minutes - Crash Course",
        thumbnail: "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg",
        channel: "QuickLearn",
        views: "2.3M views",
    },
    {
        id: 10100017,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Best Piano Covers for Studying",
        thumbnail: "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg",
        channel: "PeacefulKeys",
        views: "4.7M views",
    },
    {
        id: 10100018,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "CSS Basics - Styling the Web",
        thumbnail: "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg",
        channel: "CodeBasics",
        views: "1.4M views",
    },
    {
        id: 10100019,
        url: "https://www.w3schools.com/html/mov_bbb.mp4",
        title: "Java Full Course - Step by Step Guide",
        thumbnail: "https://i.ytimg.com/vi/XqZsoesa55w/hq720.jpg",
        channel: "CodeMastery",
        views: "3.1M views",
    },
    {
        id: 10100020,
        url: "https://www.w3schools.com/html/movie.mp4",
        title: "Top 20 Pop Songs of 2024",
        thumbnail: "https://i.ytimg.com/vi/7wtfhZwyrcc/hq720.jpg",
        channel: "MusicMania",
        views: "7.8M views",
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




// export const carts = new Array(40).fill(null).map(() => ({
//     id: Math.floor(Math.random() * 10000000),
//     ...object
// }));




