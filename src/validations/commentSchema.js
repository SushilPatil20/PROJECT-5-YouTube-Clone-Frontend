import * as Yup from 'yup';

const commentSchema = Yup.object().shape({
    text: Yup.string()
        .max(500, "Comment is too long")
        .matches(
            /^[\p{L}\p{N}\p{P}\p{Z}\p{S}\p{M}]*$/u,
            "Comment contains invalid characters"
        )
});

export default commentSchema;
