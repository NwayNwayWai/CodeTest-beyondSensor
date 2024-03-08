// Define a TypeScript interface
interface User {
  email: string;
  password: string;
  fullname: string;
  dob: Date;
  city: string;
  role: string;
}

// Sample user data
export const Users: User[] = [
  {
    email: "john_doe@example.com",
    password: "password123",
    fullname: "John Doe",
    dob: new Date("1990-05-15"),
    city: "New York",
    role: "user",
  },
  {
    email: "jane_smith@example.com",
    password: "pass@word",
    fullname: "Jane Smith",
    dob: new Date("1988-12-10"),
    city: "Los Angeles",
    role: "admin",
  },
  {
    email: "alice_green@example.com",
    password: "greenTea@123",
    fullname: "Alice Green",
    dob: new Date("1995-08-20"),
    city: "Chicago",
    role: "user",
  },
  {
    email: "bob_jones@example.com",
    password: "bobPass123",
    fullname: "Bob Jones",
    dob: new Date("1982-03-25"),
    city: "Houston",
    role: "user",
  },
  {
    email: "emma_white@example.com",
    password: "emma@white",
    fullname: "Emma White",
    dob: new Date("1976-11-05"),
    city: "San Francisco",
    role: "admin",
  },
  {
    email: "michael_clark@example.com",
    password: "clark@123",
    fullname: "Michael Clark",
    dob: new Date("1989-09-30"),
    city: "Miami",
    role: "user",
  },
  {
    email: "sophia_miller@example.com",
    password: "miller2022",
    fullname: "Sophia Miller",
    dob: new Date("1998-02-18"),
    city: "Seattle",
    role: "user",
  },
  {
    email: "william_baker@example.com",
    password: "will@123",
    fullname: "William Baker",
    dob: new Date("1985-07-12"),
    city: "Boston",
    role: "admin",
  },
  {
    email: "olivia_scott@example.com",
    password: "scottOlivia",
    fullname: "Olivia Scott",
    dob: new Date("1993-04-08"),
    city: "Denver",
    role: "user",
  },
  {
    email: "david_hall@example.com",
    password: "hallPass",
    fullname: "David Hall",
    dob: new Date("1979-06-28"),
    city: "Atlanta",
    role: "user",
  },
];
