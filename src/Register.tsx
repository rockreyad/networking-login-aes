import React, { useState } from "react";
import { UserType, userData } from "./utils/user";
import { Formik } from "formik";
import { useFormik } from "formik";

const Register = () => {
  const [data, setData] = useState(userData);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      setData([...data, values]);
      console.log(values, "are added!");
    },
  });
  return (
    <div>
      <section className="bg-gray-100 py-10" style={{ minHeight: "86vh" }}>
        <div className="container max-w-screen-xl mx-auto px-4">
          {/* <!--  COMPONENT: SIGN IN --> */}
          <div
            style={{ maxWidth: "360px" }}
            className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
          >
            <form action="" onSubmit={formik.handleSubmit}>
              <h2 className="mb-5 text-2xl font-semibold text-center">
                Register to
                <span className="font-bold px-2 uppercase"> Iubat</span>
                Wifi
              </h2>

              <div className="mb-4">
                <label className="block mb-1"> Username </label>
                <input
                  {...formik.getFieldProps("username")}
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  type="text"
                  name="username"
                  placeholder="input your username"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1"> Password </label>
                <input
                  {...formik.getFieldProps("password")}
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  type="password"
                  name="password"
                  placeholder="input your password"
                />
              </div>

              <button
                type="submit"
                className="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 capitalize"
              >
                Get Access
              </button>
            </form>
          </div>
          {/* <!--  COMPONENT: SIGN IN //END --> */}
        </div>
      </section>
    </div>
  );
};

export default Register;
