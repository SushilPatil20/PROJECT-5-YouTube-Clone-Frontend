import * as Yup from "yup";

const channelSchema = Yup.object().shape({
    channelName: Yup.string()
        .min(3, "Channel name should have at least 3 characters")
        .max(50, "Channel name should have at most 50 characters")
        .required("Channel name is required"),

    handle: Yup.string()
        .matches(/^@[a-zA-Z0-9._-]+$/, {
            message: "Handle must start with '@' and can only contain letters, numbers, underscores, or periods",
            excludeEmptyString: true
        })
        .min(3, "Handle should have at least 3 characters")
        .max(30, "Handle should have at most 30 characters")
        .required("Handle is required"),

    description: Yup.string()
        .max(500, "Description should have at most 500 characters")
        .optional(),

    profilePicture: Yup.string()
        .url("Profile picture must be a valid URL")
        .optional(),
});

export default channelSchema;
