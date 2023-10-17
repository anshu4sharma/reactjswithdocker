import { useFormik } from "formik";
import { object, string, number, ref } from "yup";

// adding a custom error for field
// adding min or max length for name
const validationSchema = object({
  name: string().required("Name cannot be empty").min(4),
  phone: number()
    .required()
    .integer()
    .positive("Phone number cannot be negative"),
  email: string().email().required(),
  password: string().required(),
  confirm_password: string().label('confirm password').required().oneOf([ref('password'), null as any], 'Passwords must match'),
});
const App = () => {
  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password:""
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      console.log(values);
    },
  });
  
  // add form validation
  return (
    <div className="w-full flex justify-center items-center">
      <form className="w-full max-w-xl mt-4" onSubmit={handleSubmit}>
        <p className="text-3xl mb-4">Form Validation with formik and yup !</p>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your Name
          </label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.name && touched.name ? (
            <p className="text-red-700">{errors.name}</p>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={values.email}
            name="email"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.email && touched.email ? (
            <p className="text-red-700">{errors.email}</p>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your phone
          </label>
          <input
            type="tel"
            id="phone"
            value={values.phone}
            name="phone"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.phone && touched.phone ? (
            <p className="text-red-700">{errors.phone}</p>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={values.password}
            name="password"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.password && touched.password ? (
            <p className="text-red-700">{errors.password}</p>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            value={values.confirm_password}
            name="confirm_password"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="text-red-700">{errors.confirm_password}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
   
    </div>
  );
};

export default App;
