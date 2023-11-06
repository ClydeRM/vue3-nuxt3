// When request comes in, fire this function
export default defineEventHandler(
  async (event) => {
    // handle query params
    const { role } = getQuery(event);

    // handle post request body
    const { age, name } = await readBody(event);

    // return to frontend
    if (role === "employee") {
      return {
        message: `Role: ${role} login.`,
      };
    }
    if (age > 18) {
      return {
        message: `Hello, ${name}, welcome! you are ${age} years old`,
      };
    }
    return {
      message: `${name}, welcome to the children park!`,
    };
  }
);
