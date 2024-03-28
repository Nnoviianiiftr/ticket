"use client";

import React, { FormEvent } from "react";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";

const CreateFormSchema = z.string();

CreateFormSchema.parse;

const Form = () => {
  const [formState, setFormState] = useState({
    partner_name: "",
    partner_phone: "",
    email_cc: "",
    name: "",
    description: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email: any) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      console.log("formState", formState);
      const body = JSON.stringify({
        params: formState,
      });
      const response = await fetch(
        "https://odoo.lodylody.my.id/ticket/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success("Successfully Sent");
      } else {
        console.error("Error:", response.status);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Sending, Please try again");
      // console.log(response)
    }
  };

  useEffect(() => {
    toast.success("Successfully Send");
    toast.error("There's something wrong");
  }, []);

  const [captcha, setCaptcha] = useState<string | null>();

  const [errors, setErrors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const mySchema = z.object({
        name: z.string().min(8),
        email: z.coerce.string().email().min(5),
      });

      const response = mySchema.safeParse({
        name: name,
        email: "email",
      });

      //refine error
      if (!response.success) {
        let errArr: any[] = [];
        const { errors: err } = response.error;
        for (var i = 0; i < err.length; i++) {
          errArr.push({ for: err[i].path[0], message: err[i].message });
        }
        setErrors([]);
        throw err;
      }

      setErrors([]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  (event: FormEvent) => {
    event.preventDefault();
    console.log(captcha);
    if (captcha) {
      console.log("ReCAPTCHA Verified!");
    }
  };

  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-form">
        <div
          className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12"
          id="form">
          <h2 className="bold-40 lg:bold-64">Create ticket now!</h2>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <div className="formContainer">
              <form onSubmit={onSubmit} className="form">
                <input
                  type="text"
                  placeholder="Name"
                  name="partner_name"
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  placeholder="Email Address"
                  name="email_cc"
                  onChange={handleChange}
                  required
                />
                {/* <div className="mt-1 text-xs text-red-500">
                  {errors.find((error) => error.for === "email")?.message}
                </div> */}

                <input
                  type="text"
                  placeholder="Phone Number"
                  name="partner_phone"
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  placeholder="Subject"
                  name="name"
                  onChange={handleChange}
                />

                <textarea
                  name="description"
                  id=""
                  placeholder="Description"
                  onChange={handleChange}
                />

                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  className="mx-auto"
                  onChange={setCaptcha}
                />

                <button
                  type="submit"
                  onClick={() => {
                    handleSubmit;
                    window.location.reload();
                  }}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
