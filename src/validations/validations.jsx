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
        .required("Username is required"),
    email: yup
        .string()
        .required("Email is required")
        .email(),
        // .matches(/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/, "email should be ___@gmail.com"),
    phone: yup
        .string()
        .required("Phone is required")
        .min(12, "phone number minimal 12 number"),
    gender: yup
        .string()
        .required("Gender is required"),
    city: yup
        .string()
        .required("City is required"),
    address: yup
        .string()
        .required("Address is required")
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
export const registerPartnerSchema = yup.object().shape({
    companyname: yup
        .string()
        .required("Company Name is required"),
    companyemail: yup
        .string()
        .required("Email is required")
        .email(),
        // .matches(/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/, "email should be ___@gmail.com"),
    companyphone: yup
        .string()
        .required("Phone is required")
        .min(12, "phone number minimal 12 number"),
    picname : yup
        .string()
        .required("PIC Name is required"),
    picposition : yup
        .string()
        .required("PIC Name is required"),
    picphone: yup
        .string()
        .required("Phone is required")
        .min(12, "phone number minimal 12 number"),
    picemail: yup
        .string()
        .required("Email is required")
        .email(),
    picaddress: yup
        .string()
        .required("Address is required")
        .min(25, "Address minimal 25 character"),
    companycity: yup
        .string()
        .required("City is required"),
    companyaddress: yup
        .string()
        .required("Address is required")
        .min(25, "Address minimal 25 character"),
    file: yup.mixed().required('File is required'),
    linkwebsite : yup.string().url('Must be a URL'),
    nib: yup
        .string()
        .required("NIB No is required"),
    siup: yup
        .string()
        .required("SIUP No is required"),
    event1: yup
        .string()
        .required("Event1 is required, minimal 3 event required"),
    event2: yup
        .string()
        .required("Event2 is required, minimal 3 event required"),
    event3: yup
        .string()
        .required("Event3 is required, minimal 3 event required"),
    bankname: yup
        .string()
        .required("Bank Name is required"),
    bankaccountname: yup
        .string()
        .required("Bank Account Name is required"),
    banknumber: yup
        .string()
        .required("Bank account number is required"),
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

  export const askSchema = yup.object().shape({
    ask: yup
        .string()
        .max(300, "Must Not more then 300 Char")
    });

export const serviceSchema = yup.object().shape({
    servicename : yup
        .string()
        .min(8, "Service Name minimal 8 Character")
        .max(50, "Service Name Maksimal 50 Character"),
    serviceprice : yup
        .number(),
    category : yup
        .string()
        .min(8, "Service Category minimal 8 Character")
        .max(25, "Service Category Maksimal 25 Character"),
    description : yup
        .string()
        .min(15, "Service Description minimal 8 Character")
        .max(300, "Service Description Maksimal 300 Character"),
})