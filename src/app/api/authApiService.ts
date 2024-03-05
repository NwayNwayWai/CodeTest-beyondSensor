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
      if (data.email == "admin@gmail.com" && data.password == "Admin@123") {
        const result = {
          data: {
            id: "1",
            email: "admin@gmail.com",
            photo_url: "http:beyondsensor.com",
            full_name: "Admin",
            is_active: true,
          },
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlQgUyBPIiwiaWQiOiJjbHJwMHUzbTkwMDAxNnV1MTh0c3RnbWRtIiwidG9rZW5LZXkiOiIzZDg2NmFkZWVkMWJjIiwiaWF0IjoxNzA3OTgwNTU2LCJleHAiOjE3MDg1ODUzNTZ9.JNwyLHuf6qSkTYLA0cBhFKocmLXWb04mxdE9yF5DIoI",
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
      if (data.email == "admin@gmail.com") {
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
