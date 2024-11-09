import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().required('Username is required').min(3, 'Must be at least 3 characters'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[A-Z]/, 'Password must contain an uppercase letter')
        .matches(/[a-z]/, 'Password must contain a lowercase letter')
        .matches(/\d/, 'Password must contain a number'),
    avatar: Yup.mixed()
        .test('fileSize', 'File size is too large', (value) => value.length === 0 || (value && value[0].size <= 5000000))
        .test('fileType', 'Unsupported File Format', (value) => {
            return value.length === 0 || ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type);
        }),
});

