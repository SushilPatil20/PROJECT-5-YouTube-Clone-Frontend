import * as Yup from "yup";

const searchStringSchema = Yup.object().shape({
    search: Yup.string()
        .trim()
        .required("Search query is required")
        .min(2, "Search query must be at least 2 characters long")
        .max(100, "Search query cannot exceed 100 characters")
        .matches(
            /^[a-zA-Z0-9\s.,!?'"-]+$/u,
            "Search query contains invalid characters"
        ),
});

export default searchStringSchema;
