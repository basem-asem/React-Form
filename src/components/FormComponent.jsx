import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormComponent.css';

const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      birthday: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      // You can handle form submission here (e.g., send data to a server).
      // For now, let's just show a success message and clear the form.
      alert('Form submitted successfully!');
      resetForm();
    },
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="error">{formik.errors.phone}</div>
        ) : null}

        <label htmlFor="phone">Adress:</label>
        <input
          id="adress"
          name="adress"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="error">{formik.errors.address}</div>
        ) : null}

        <label htmlFor="phone">Birthday:</label>
        <input
          id="birthday"
          name="birthday"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.birthday && formik.errors.birthday ? (
          <div className="error">{formik.errors.birthday}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
