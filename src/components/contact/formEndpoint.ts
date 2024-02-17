type payloadDataType = {
    date: string
    fullName: string
    email: string
    serviceType: string
    serviceBudget: string
    contactSurvey?: string
    serviceDescription: string
}

export default async function sendData (payload: payloadDataType) {
    type AlertDataType = {
        code: number;
        statusText: string;
        message: string;
    }
    const data = {} as {
        pass: AlertDataType
        fail: AlertDataType
    };

    try {
        const formUrl = `https://public.herotofu.com/v1/${import.meta.env.PUBLIC_HEROTUFU_API_KEY}`;

        console.log(import.meta.env.PUBLIC_HEROTUFU_API_KEY)
        
        const res = await fetch(formUrl,{
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (res.status === 422) {
            throw new Error("Fail to send. Pleas try again 👎🏿");
        }

        if (res.status === 200) {
            data.pass = {
                code: res.status,
                statusText: 'ok',
                message: "Email sent 👍🏿"
            };
        }


    } catch (error: any) {

        data.fail = {
            code: 442,
            statusText: "fail",
            message: error.message
        }
    }

    return data
}