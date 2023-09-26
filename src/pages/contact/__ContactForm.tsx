import React, { useRef } from "react";

// Formik library for form validation
import { Formik } from "formik";

// Toast library form notification alert
import { toast } from "react-toastify";

// Email service by Herotu
import sendMail from "../../services/sendMail";

export default function ContactForm() {
  const dateObj = new Date();
  const date = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;

  interface FormDataType {
    fullName: string;
    clientEmail: string;
    serviceType: string;
    serviceBudget: string;
    survey: string;
    serviceDescription: string;
  }

  const contactFormInitialValues = {
    fullName: "",
    clientEmail: "",
    serviceType: "",
    serviceBudget: "",
    survey: "",
    serviceDescription: "",
  } as FormDataType;

  const validateContactForm = (input: any) => {
    const errors = {} as FormDataType;

    if (!input.fullName) {
      errors.fullName = "Full name is required";
    } else if (input.fullName.length > 15) {
      errors.fullName = "Full name can only be 15 characters or less";
    }

    if (!input.clientEmail) {
      errors.clientEmail = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input.clientEmail)
    ) {
      errors.clientEmail = "Invalid email address";
    }

    if (!input.serviceType) {
      errors.serviceType = "Service selection is required";
    } else if (input.serviceType === "") {
      errors.serviceType = "Service selection is required";
    }

    if (!input.serviceBudget) {
      errors.serviceBudget = "Budget selection is required";
    } else if (input.serviceBudget === "") {
      errors.serviceBudget = "Please select budget!";
    }

    if (!input.serviceDescription) {
      errors.serviceDescription = "Service description is required";
    } else if (input.serviceDescription > 400) {
      errors.serviceDescription =
        "Service description can only be 200 characters or less";
    }

    return errors;
  };

  const notify = () => {
    toast.success("Email sent 👍🏿", {
      hideProgressBar: true,
      theme: "light",
    });
  };

  const submitContactForm = async (values: any, { resetForm }: any) => {
    // Insert contact data into google spreasheets
    const requestBody = {
      date: date,
      fullName: values.fullName,
      email: values.clientEmail,
      serviceType: values.serviceType,
      serviceBudget: values.serviceBudget,
      contactSurvey: values.survey,
      serviceDescription: values.serviceDescription,
    };

    const mail = await sendMail(requestBody);

    if (mail.pass.statusText === "ok") {
      // Notify user
      notify();

      // const sheet = await insertInGoogleSheet(undefined, requestBody);
    }

    // Clear form field
    resetForm();
  };

  const surveyLabelElemRef = useRef<HTMLLabelElement>(null);
  const surveyElemRef = useRef<HTMLSelectElement>(null);
  const serviceLabelElemRef = useRef<HTMLLabelElement>(null);
  const serviceElemRef = useRef<HTMLSelectElement>(null);

  return (
    <div id="contact-form-right" className="contact-form md:w-1/2">
      {/*
        Form fileds
        ..........
        FullName Company name(optional)
        Email address 
        Survey -- How they found us
        Pre-filled selection -- Type of project
         - Product design
         - Build a product
         - Automate task
        Budget -- 
        Text-area -- Project description
      */}
      <div className="h-auto rounded-lg shadow-md p-5">
        <div id="form-header" className="md:hidden mb-5 text-white">
          <h1 className="text-xl font-semibold mb-2">How can we help you?</h1>
          <p className="font-light text-sm">Tell us what about your project</p>
        </div>

        <Formik
          initialValues={contactFormInitialValues}
          validate={validateContactForm}
          onSubmit={submitContactForm}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="#fullName">Name</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                    placeholder="Your full name"
                    className="mt-1 block w-full text-sm font-medium border focus:ring-none focus:outline-none p-2 rounded-md"
                  />
                  <small className="text-red-400">
                    {errors.fullName && touched.fullName && errors.fullName}
                  </small>
                </div>

                <div className="col-span-6">
                  <label htmlFor="#cient-email">Email</label>
                  <input
                    type="email"
                    name="clientEmail"
                    id="client-email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.clientEmail}
                    placeholder="username@example.com"
                    className="select-label mt-1 block w-full text-sm font-light text-sm border focus:outline-none p-2 rounded-md"
                  />
                  <small className="text-red-400">
                    {errors.clientEmail &&
                      touched.clientEmail &&
                      errors.clientEmail}
                  </small>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="#serive-type"
                    className="select-label w-full block text-sm"
                    ref={serviceLabelElemRef}
                  >
                    I need help with
                  </label>
                  <select
                    name="serviceType"
                    id="serive-type"
                    className="mt-1 block w-full text-sm font-light border focus:outline-none p-2 rounded-md"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={serviceElemRef}
                    title="Servive type"
                  >
                    <option value="">Select an option</option>
                    <option value="Product design">UI/UX design</option>
                    <option value="Landing page">Landing page</option>
                    <option value="Mobile development">
                      Mobile development
                    </option>
                    <option value="Web app development">Web app MVP</option>
                    <option value="Web app development">
                      Backend API development
                    </option>
                    <option value="Task automation">Task automation</option>
                    <option value="Software code management">
                      App redesign and rework
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  <small className="text-red-400">
                    {errors.serviceType &&
                      touched.serviceType &&
                      errors.serviceType}
                  </small>
                </div>

                {/* <div className="col-span-6">
                  <label
                    htmlFor="#service-budget"
                    className="w-full block text-sm"
                    ref={surveyLabelElemRef}
                  >
                    Budget
                  </label>
                  <select
                    name="serviceBudget"
                    id="service-budget"
                    className="mt-1 block w-full text-sm font-light bg-white border focus:outline-none p-2 rounded-md"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={surveyElemRef}
                    title="Servive budget"
                  >
                    <option value="">Select budget</option>
                    <option value="$1.5k-$3k">$1.5k-$3k</option>
                    <option value="$4k-$9k">$4k-$9k</option>
                    <option value="$10k-$15">$10k-$15</option>
                    <option value="$15k-$20">$15k-$20</option>
                  </select>
                  <small className="text-red-400">
                    {errors.serviceBudget &&
                      touched.serviceBudget &&
                      errors.serviceBudget}
                  </small>
                </div> */}

                <div className="col-span-6">
                  <label
                    htmlFor="#destination-survey"
                    className="w-full block text-sm"
                    ref={surveyLabelElemRef}
                  >
                    How did you find us? <small>(Optional)</small>
                  </label>
                  <select
                    name="survey"
                    id="destination-survey"
                    className="mt-1 block w-full text-sm font-light bg-white border focus:outline-none p-2 rounded-md"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={surveyElemRef}
                    title="Survey"
                  >
                    <option defaultValue="">Select to tell us</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Linkedin">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="partnership">Brand partnership</option>
                    <option value="Word of mouth">Word of mouth</option>
                    <option value="Other">Other</option>
                  </select>

                  <small className="text-red-400">
                    {errors.survey && touched.survey && errors.survey}
                  </small>
                </div>
                
                <div className="col-span-6">
                  <textarea
                    name="serviceDescription"
                    id="duwork-project-description"
                    rows={6}
                    value={values.serviceDescription}
                    className="mt-1 block w-full text-sm border focus:outline-none p-2 rounded-md"
                    placeholder="Tell about your project..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  <small className="text-red-400">
                    {errors.serviceDescription &&
                      touched.serviceDescription &&
                      errors.serviceDescription}
                  </small>
                </div>
              </div>

              <div id="contact-submission" className="flex flex-col mt-5">
                <small className="text-white sm:text-center text-[12px] font-light mb-5">
                  Your data is safe with us. We don't share data with 3rd
                  parties!
                </small>

                <div className="text-right">
                  <button
                    type="submit"
                    className="cta-btn send-contact-form custom-text-dark w-full flex justify-center items-center font-semibold pl-10"
                    disabled={isSubmitting}
                  >
                    Submit{" "}
                    <span
                      className={`loader ml-2 ${
                        isSubmitting ? "opacity-100" : "!opacity-0"
                      }`}
                    ></span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
