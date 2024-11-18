import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slice/userSlice";
import { getUser } from "../services/authServices";
import { useEffect } from "react";

const useAuth = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const token = useSelector((state) => state.auth.token);
    const userId = useSelector((state) => state.auth.userId);
    const user = useSelector((state) => state.user)
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (userId) {
                    const user = await getUser(userId);
                    dispatch(setUser(user.user));
                }
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };
        fetchUserData();
    }, [token, userId]);
    return { isAuthenticated, token, userId, user };
};

export default useAuth;