import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .required("Email is required")
        .email(),
        // .matches(/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/, "email should be ___@gmail.com"),
    password: yup
      .string()
      .required("Password is required")
    //   .min(8, "password minimal 8 characters")
    //   .max(30, "password must not exceed 30 characters")
    //   .matches(/^(?=.*[A-Z])/, "password must contain one uppercase")
    //   .matches(/^(?=.*[0-9])/, "password must contain one number")
  });

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .required("username is required"),
    email: yup
        .string()
        .required("Email is required")
        .email(),
        // .matches(/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/, "email should be ___@gmail.com"),
    phone: yup
        .string()
        .required("Email is required")
        .min(12, "phone number minimal 12 number"),
    gender: yup
        .string()
        .required("Gender is required"),
    city: yup
        .string()
        .required("City is required"),
    address: yup
        .string()
        .required("City is required")
        .min(25, "Address minimal 25 character"),
    file: yup.mixed().required('File is required'),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "password minimal 8 characters")
      .max(30, "password must not exceed 30 characters")
      .matches(/^(?=.*[A-Z])/, "password must contain one uppercase")
      .matches(/^(?=.*[0-9])/, "password must contain one number"),
    confirmPassword : yup
        .string()
        .oneOf([yup.ref("password"), null], "Password Must Match")
        .required("Confirm Password is required")
  });