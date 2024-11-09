import { useLocation } from "react-router-dom";

/**
 * Custom hook to get the current pathname
 * @returns {String} pathname
 */
export const useUrlPathName = () => {
    const { pathname } = useLocation();
    return pathname;
};
