import { useSelector } from "react-redux";

const useAuth = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);

    return { isAuthenticated, token, user };
};

export default useAuth;