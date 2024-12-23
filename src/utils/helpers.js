import { useLocation } from "react-router"
import { jwtDecode } from "jwt-decode";
import { formatDistanceToNow, parseISO } from 'date-fns';

export const categories = [
    "All",
    "Music",
    "Gaming",
    "Education",
    "Sports",
    "Movies",
    "News",
    "Podcasts",
    "Technology",
    "Food & Cooking",
    "Travel",
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