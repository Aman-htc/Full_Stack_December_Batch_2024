export const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@schola.com",
    password: "123456",
    role: "admin",
    avatar: "https://i.pravatar.cc/150?img=12",
    phone: "+91 98765 43210",
    schoolName: "Schola International School"
  },
  {
    id: 2,
    name: "Teacher User",
    email: "teacher@schola.com",
    password: "123456",
    role: "teacher",
    avatar: "https://i.pravatar.cc/150?img=47",
    phone: "+91 98765 43211",
    schoolName: "Schola International School"
  },
  {
    id: 3,
    name: "Student User",
    email: "student@schola.com",
    password: "123456",
    role: "student",
    avatar: "https://i.pravatar.cc/150?img=32",
    phone: "+91 98765 43212",
    schoolName: "Schola International School"
  }
  
];

export const authResponses = {
  loginSuccess: {
    success: true,
    message: "Login successful",
    token: "schola-static-token-123456",
    redirectTo: "/dashboard"
  },
  loginFailed: {
    success: false,
    message: "Invalid email or password"
  },
  logoutSuccess: {
    success: true,
    message: "Logout successful",
    redirectTo: "/login"
  },
  signupSuccess: {
    success: true,
    message: "Signup successful",
    redirectTo: "/verifyotp"
  }
};
