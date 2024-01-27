import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  // Checkbox,
  Button,
} from "@material-tailwind/react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";
function Login() {
  const intitalState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(intitalState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    //   dispatch(login(values));
  };
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <form onSubmit={onSubmit}>
        <Card className="w-96 pt-4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-16  place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <label htmlFor="username">Name:</label>
            <Input
              label="Name"
              id="username"
              size="lg"
              type="text"
              name="name"
              autoComplete="username"
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:​outline-0 disabled:​bg-blue-gray-50 disabled:​border-0 disabled:​cursor-not-allowed transition-all placeholder-shown:​border placeholder-shown:​border-blue-gray-200 placeholder-shown:​border-t-blue-gray-200 border focus:​border-2 border-t-transparent focus:​border-t-transparent placeholder:​opacity-0 focus:​placeholder:​opacity-100 text-sm px-3 py-3 rounded-md !pr-9 border-blue-gray-200 focus:​border-gray-900"
              placeholder=" "
              value={values.name}
              onChange={onChange}
              icon={<FontAwesomeIcon icon={faHeart} className="text-red-500" />}
            />
            <label htmlFor="password">Password:</label>
            <Input
              label="Password"
              id="password"
              size="lg"
              type="password"
              name="password"
              autoComplete="current-password"
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:​outline-0 disabled:​bg-blue-gray-50 disabled:​border-0 disabled:​cursor-not-allowed transition-all placeholder-shown:​border placeholder-shown:​border-blue-gray-200 placeholder-shown:​border-t-blue-gray-200 border focus:​border-2 border-t-transparent focus:​border-t-transparent placeholder:​opacity-0 focus:​placeholder:​opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:​border-gray-900"
              placeholder=" "
              value={values.password}
              onChange={onChange}
            />
            <label htmlFor="image">Image:</label>
            <Input
              label="Image URL address"
              id="image"
              size="lg"
              type="text"
              name="image"
              value={values.image}
              onChange={onChange}
            />
            <div className="-ml-2.5"></div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              fullWidth
              onClick={() => dispatch(login(values))}
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Image is Optional
            </Typography>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
export default Login;

// const [showPasswordStrengthIndicator, setShowPasswordStrengthIndicator] = useState(false);
// if (name === "password" && value.trim().length > 0) {
//   setShowPasswordStrengthIndicator(true);
// } else {
//   setShowPasswordStrengthIndicator(false);
// }

//  {/* {showPasswordStrengthIndicator && (
//               <Typography
//                 variant="small"
//                 color="gray"
//                 className="mt-2 flex items-center gap-1 font-normal"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="-mt-px h-4 w-4"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 Use at least 8 characters, one uppercase, one lowercase and one
//                 number.
//               </Typography>
//             )} */}
//           {/* </div> */}
