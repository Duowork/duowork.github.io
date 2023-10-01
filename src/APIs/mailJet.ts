type dataDateType = {
  isExcludedFromCampaign: boolean;
  name: string;
  email: string;
};

export default async function sendContact(
  reqURL: string,
  reqType = "GET",
  auth: string,
  data: dataDateType,
  toastNotify: (alertType: string, message: string) => void,
) {
  const HEADERS = {
    "Content-Type": "application/json",
    Authorization: `basic ${auth}`,
  };

  const res = await fetch(reqURL, {
    method: reqType,
    headers: HEADERS,
    body: JSON.stringify(data),
  }).then((data) => data.json());

  // Email added to contact list.
  if (res.status === 201) {
    const message = "You're now subscribed! TTYS 🎉📱";

    toastNotify("success", message);
  }

  // Conflict with data. Possibly data already exist.
  if (res.status === 409) {
    const message = "This email is aready subscribed 👎🏿";

    toastNotify("error", message);
  }

  // Server error
  if (res.status === 500) {
    const message = "There seem to be problem! Try again later ⏳";
    toastNotify("error", message);
  }
}
