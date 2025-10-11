import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type FormDataType from "./formDataType.ts";
import { toast } from "react-toastify";
import sendData from "./formEndpoint.ts";

const formInputs = {
  fullName: "",
  clientEmail: "",
  serviceType: "",
  serviceBudget: "",
  survey: "",
  serviceDescription: "",
} as FormDataType;

const dateObj = new Date();
const date = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;

const isSubmitting = false;

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<typeof formInputs>();

  const notify = (message: string) => {
    toast.success(message, {
      hideProgressBar: true,
      theme: "light",
    });
  };

  const onSubmit: SubmitHandler<typeof formInputs> = async (data) => {
    const requestPayload = {
      date: date,
      fullName: data.fullName,
      email: data.clientEmail,
      serviceType: data.serviceType,
      serviceBudget: data.serviceBudget,
      contactSurvey: data.survey,
      serviceDescription: data.serviceDescription,
    };

    const { pass, fail } = await sendData(requestPayload);

    console.log(pass, fail);

    // Alert user
    if (fail?.statusText === "fail") {
      notify(fail.message);
    }

    if (pass?.statusText === "ok") {
      notify(pass.message);
    }

    // Clear form fields
    reset({ ...formInputs });
  };

  return (
    <div id="contact-form-right" className={`md:w-1/2`}>
      <div id="form-header" className="md:hidden mb-5 text-white">
        <h1 className="text-xl font-semibold mb-2">How can we help you?</h1>
        <p className="font-light text-sm">Tell us what about your project</p>
      </div>

      <form>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <label htmlFor="#fullName" class="text-[14px] text-white">
              Name*
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Your full name"
              className="mt-1 block w-full text-[#ffffffb3] text-sm font-medium bg-transparent border border-white focus:ring-none focus:outline-none p-2 rounded-md placeholder:text-white placeholder:text-sm placeholder:opacity-70 focus:border-duo-green-200"
              {...register("fullName", { required: true, maxLength: 15 })}
            />
            <small className="text-red-400">
              {errors.fullName?.type === "required" && "Name field is required"}
            </small>
          </div>

          <div className="col-span-6">
            <label htmlFor="#client-email" class="text-[14px] text-white">
              Email*
            </label>
            <input
              type="email"
              id="client-email"
              placeholder="username@example.com"
              className="mt-1 block w-full text-[#ffffffb3] text-sm font-medium bg-transparent border border-white focus:ring-none focus:outline-none p-2 rounded-md placeholder:text-white placeholder:text-sm placeholder:opacity-70 focus:border-duo-green-200"
              autoComplete="true"
              {...register("clientEmail", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            <small className="text-red-400">
              {errors.clientEmail?.type === "required" &&
                "Email field is required"}
            </small>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="#service-type"
              className="select-label w-full block text-[14px] text-white"
              // ref={serviceLabelElemRef}
            >
              I need help with*
            </label>
            <select
              id="service-type"
              className="mt-1 block w-full text-[#ffffffb3] text-sm font-medium bg-transparent border border-white focus:ring-none focus:outline-none p-2 rounded-md placeholder:text-white placeholder:text-sm placeholder:opacity-70 focus:border-duo-green-200"
              // ref={serviceElemRef}
              title="Service"
              {...register("serviceType", { required: true })}
            >
              <option selected disabled>
                Select an option
              </option>
              <option value="product-design">UI/UX design</option>
              <option value="landing-page">Landing page</option>
              <option value="mobile-app-development">
                Mobile app development
              </option>
              <option value="web-app-development">Web app development</option>
              <option value="desktop-development">
                Desktop app development
              </option>
              <option value="app-mvp">App MVP</option>
              <option value="web-api-development">
                Backend API development
              </option>
              <option value="Task automation">Task automation</option>
              <option value="app-design-and-refactoring">
                App redesign and refactoring
              </option>
              <option value="consultation">Google Workspace automation</option>
              <option value="Other">Other</option>
            </select>
            <small className="text-red-400">
              {errors.serviceType?.type === "required" &&
                "Service field is required"}
            </small>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="#destination-survey"
              className="w-full block text-[14px] text-white"
              // ref={surveyLabelElemRef}
            >
              How did you find us? <small>(Optional)</small>
            </label>
            <select
              id="destination-survey"
              className="mt-1 block w-full text-[#ffffffb3] text-sm font-medium bg-transparent border border-white focus:ring-none focus:outline-none p-2 rounded-md placeholder:text-white placeholder:text-sm placeholder:opacity-70 focus:border-duo-green-200"
              // ref={surveyElemRef}
              title="Survey"
              {...register("survey")}
            >
              <option selected disabled>
                Select to tell us
              </option>
              <option value="Twitter">Twitter</option>
              <option value="Linkedin">LinkedIn</option>
              <option value="Instagram">Instagram</option>
              <option value="YouTube">YouTube</option>
              <option value="partnership">Brand partnership</option>
              <option value="Word of mouth">Word of mouth</option>
              <option value="Other">Other</option>
            </select>

            <small className="text-red-400">
              {/* Optional selection. No need to alert user */}
            </small>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="#project-description"
              className="w-full block text-[14px] text-white"
              // ref={surveyLabelElemRef}
            >
              Description*
            </label>
            <textarea
              id="project-description"
              rows={6}
              className="mt-1 block w-full text-[#ffffffb3] text-sm font-medium bg-transparent border border-white focus:ring-none focus:outline-none p-2 rounded-md placeholder:text-white placeholder:text-sm placeholder:opacity-70 focus:border-duo-green-200"
              placeholder="Tell about your project..."
              {...register("serviceDescription", { required: true })}
            />
            <small className="text-red-400">
              {errors.serviceDescription?.type === "required" &&
                "Description field is required"}
            </small>
          </div>
        </div>

        <div id="contact-submission" className="flex flex-col mt-5">
          <small className="text-white sm:text-center text-[12px] font-light mb-5">
            Your data is safe with us. We don't share data with 3rd parties!
          </small>

          <div className="text-right">
            <button
              type="submit"
              className="btn-cta w-full rounded-lg bg-duo-green-200 text-duo-dark flex items-center justify-center"
              disabled={isSubmitting}
            >
              Submit{" "}
              <span
                className={`loader ml-2 ${
                  isSubmitting ? "opacity-100" : "!opacity-0"
                }`}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
