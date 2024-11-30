import * as Yup from 'yup';

export const videoSchema = Yup.object().shape({
    title: Yup.string()
        .required('Video title is required')
        .min(3, 'Title must be at least 3 characters long'),
    description: Yup.string()
        .required('Description is required')
        .max(1000, "Description is to large")
        .min(10, 'Description must be at least 10 characters long')
});


export const thumbnailSchema = Yup.object().shape({
    thumbnail: Yup.mixed()
        .required('Thumbnail is required')
        .test('fileSize', 'File size is too large.', (value) => {
            return !value || value.size <= 5000000;
        })
        .test('fileType', 'Unsupported File Format',
            (value) => {
                return !value || ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
            })
})


export const videoUploadSchema = Yup.object({
    file: Yup
        .mixed()
        .required("A file is required")
        .test("fileFormat", "Unsupported file format", (value) => {
            // Check if a file exists and its type matches supported formats
            return value && ["video/mp4", "video/avi", "video/mov"].includes(value.type);
        })
        .test("fileSize", "File size is too large.", (value) => {
            // Ensure file size does not exceed 10MB (example)
            return value && value.size <= 10 * 1024 * 1024;
        }),
});