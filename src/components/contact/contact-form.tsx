import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { type FetchfullyResponse } from "fetchfully";
import { apiClient } from "src/lib/api-client.ts";
import { useState } from "preact/hooks";
/* ----------------------------------------------------- */

interface FormDataType {
  name: string;
  email: string;
  subject: string;
  survey?: string;
  message: string;
}

const formInputs = {
  name: "",
  email: "",
  subject: "",
  survey: "",
  message: "",
} as FormDataType;

const dateObj = new Date();
const date = `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<typeof formInputs>({ mode: "onSubmit" });
  const [resState, setResState] = useState<FetchfullyResponse | null>(null);

  const notify = (message: string) => {
    toast.success(message, {
      hideProgressBar: true,
      theme: "light",
    });
  };

  const submitHandler: SubmitHandler<typeof formInputs> = async (data) => {
    const requestPayload = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      survey: data.survey || "",
      message: data.message,
    };

    try {
      const res = await apiClient.post(
        "/.netlify/functions/send-email",
        requestPayload
      );

      setResState(res);

      if (res.isSuccess) {
        toast.success("Form submitted successfully!", {
          hideProgressBar: true,
          theme: "light",
        });

        // Clear form fields
        reset({ ...formInputs });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to submit form. Please try again later.", {
        hideProgressBar: true,
        theme: "light",
      });
    }
  };

  return (
    <div id="contact-form-right" className={`md:w-1/2`}>
      <div id="form-header" className="md:hidden mb-5 text-white">
        <h1 className="text-xl font-semibold mb-2">How can we help you?</h1>
        <p className="font-light text-sm">Tell us what about your project</p>
      </div>

      <form onSubmit={(e) => handleSubmit(submitHandler)(e as any)}>
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
              autoComplete="true"
              {...register("name", { required: true, maxLength: 15 })}
            />
            <small className="text-red-400">
              {errors.name?.type === "required" && "Name field is required"}
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
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            <small className="text-red-400">
              {errors.email?.type === "required" && "Email field is required"}
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
              autoComplete="true"
              {...register("subject", { required: true })}
            >
              <option selected disabled>
                Select an option
              </option>
              <option value="Product Strategy">Product Strategy</option>
              <option value="Product Design">UI/UX design</option>
              <option value="Mobile App Development">
                Mobile app development
              </option>
              <option value="Web App Development">Web app development</option>
              <option value="Desktop Development">
                Desktop app development
              </option>
              <option value="web API Development">
                Service API development
              </option>
              <option value="Task Automation">Task automation</option>
              <option value="Product MVP">Product MVP</option>
              <option value="Other">Other</option>
            </select>
            <small className="text-red-400">
              {errors.subject?.type === "required" &&
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
              autoComplete="true"
              {...register("survey")}
            >
              <option selected disabled>
                Select to tell us
              </option>
              <option value="twitter/x">Twitter</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Instagram">Instagram</option>
              {/* <option value="YouTube">YouTube</option> */}
              {/* <option value="partnership">Brand partnership</option> */}
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
              {...register("message", { required: true })}
            />
            <small className="text-red-400">
              {errors.message?.type === "required" &&
                "Description field is required"}
            </small>
          </div>
        </div>

        <div id="contact-submission" className="flex flex-col mt-5">
          <small className="text-white sm:text-center text-[12px] font-light mb-5">
            Your data is safe with us. We don't share data with 3rd parties!
          </small>

          <button
            type="submit"
            className="btn-cta h-12 w-full rounded-lg bg-duo-green-200 text-duo-dark flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed sm:w-auto"
            disabled={resState?.isLoading === true}
          >
            Submit {resState?.isLoading && <span className={`loader ml-2`} />}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
