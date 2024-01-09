import { toast } from "react-toastify";

export default function toastNotify (alertType: string, message: string) {
    if (alertType === "success") {
      toast.success(message, {
        hideProgressBar: true,
        theme: "light",
      });
    }
  
    if (alertType === "warning") {
      toast.warning(message, {
        hideProgressBar: true,
        theme: "light",
      });
    }
  
    if (alertType === "error") {
      toast.error(message, {
        hideProgressBar: true,
        theme: "light",
      });
    }
  };