export const validation = {
  email: { required: true },
  password: { required: true },
};


export const validationSignUp = {
    firstname: { required: true },
    lastname: { required: true },
    email: { required: true, pattern: /[a-z0-9._%]+@[a-z0-9]+\.[a-z]{2,}$/i },
    password: {
      required: true,
      minLength: 8,
      pattern:
        /^^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*\d){1,})(?=(.*[-+_!@#$%^&*.,?]){1,}).+$/i,
    },
    confirmPassword: { required: true, minLength: 8 },
  };