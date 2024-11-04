import * as Yup from 'yup';
const commentSchema = Yup.object().shape({
    comment: Yup.string()
        .max(500, "Comment is too long")
        .matches(
            /^[\w\s.,!?'"-]+$/u,
            "Comment contains invalid characters"
        ),
    author: Yup.string().required("Author name is required"),
    timestamp: Yup.date().default(() => new Date())
});

export default commentSchema;

