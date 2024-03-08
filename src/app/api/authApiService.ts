import { Users } from "@/data/User";
import appAxios from "@/lib/axios";
import {
  APIResponse,
  ForgetPassResponse,
  IResponse,
  LoginResponse,
} from "@/types/response";

const authApiService = {
  login: async (data: {
    email: string;
    password: string;
  }): Promise<APIResponse<LoginResponse | IResponse>> => {
    try {
      // Assuming you have access to the user data stored on a data page
      const user = Users.find(
        (user) => user.email == data.email && user.password == data.password
      );
      if (user) {
        const result = {
          data: {
            email: user.email,
            password: user.password,
            fullname: user.fullname,
            dob: user.dob,
            city: user.city,
            role: user.role,
          },
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlQgUyBPIiwiaWQiOiJjbHJwMHUzbTkwMDAxNnV1MTh0c3RnbWRtIiwidG9rZW5LZXkiOiIyZWZlMjE5MmU1YmE0IiwiaWF0IjoxNzA5NjMxNDk3LCJleHAiOjE3MTAyMzYyOTd9._AmLL01V6e5F5r5NN5fpubymIkXoJQ_5T4VLAM6GJOw", // Assuming you have a function to generate access token based on user id
        };

        const response = {
          status: 200,
          data: result,
        };
        return response;
      } else {
        const errorResponse = {
          statusCode: 404,
          message: "Incorrect email or password!",
          error: "Incorrect email or password!",
        };
        const response = {
          status: 404,
          data: errorResponse,
        };
        return response;
      }
    } catch (error) {
      return {
        status: 500,
        data: {
          message: "An unexpected error occurred.",
          error: "Unexpected Error",
          statusCode: 500,
        },
      };
    }
  },
  forgetPassword: async (data: {
    email: string;
  }): Promise<APIResponse<ForgetPassResponse | IResponse>> => {
    try {
      const user = Users.find((user) => user.email == data.email);
      if (user) {
        const result = {
          email: "admin@gmail.com",
        };
        const response = {
          status: 200,
          data: result,
        };
        return response;
      } else {
        const errorResponse = {
          statusCode: 404,
          message: "User not found",
          error: "User not found",
        };
        const response = {
          status: 404,
          data: errorResponse,
        };
        return response;
      }
    } catch (error) {
      return {
        status: 500,
        data: {
          message: "An unexpected error occurred.",
          error: "Unexpected Error",
          statusCode: 500,
        },
      };
    }
  },

  //   logout: async (): Promise<APIResponse<LogoutResponse | IResponse>> => {
  //     try {
  //       const res = await appAxios.get('auth/logout');
  //       return res;
  //     } catch (error) {
  //       return {
  //         status: 500,
  //         data: {
  //           message: 'An unexpected error occurred.',
  //           error: 'Unexpected Error',
  //           statusCode: 500,
  //         },
  //       };
  //     }
  //   },
};

export default authApiService;
