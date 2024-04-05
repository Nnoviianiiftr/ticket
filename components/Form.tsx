"use client";

import React, { FormEvent } from "react";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [formState, setFormState] = useState({
    partner_name: "",
    partner_phone: "",
    email_cc: "",
    name: "",
    description: "",
  });

  const [errors, setErrors] = useState<any[]>([]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    // Validate form
    const errors: any[] = [];

    if (!captcha) {
      errors.push("Please complete the captcha.");
      toast.error("Please complete the captcha.", {
        onClose: () => console.log("Toast closed"),
      });
      return;
    }

    if (formState.partner_name.length < 3) {
      errors.push({ partner_name: "Partner name must be at least 3 characters." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email_cc)) {
      errors.push({ email_cc: "Please enter a valid email address." });
    }

    if (!/^\d+$/.test(formState.partner_phone)) {
      errors.push({ partner_phone: "Partner phone must be numbers only." });
    }

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    // Submit the form only when there are no errors
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
        toast.success("Successfully Sent", {
          onClose: () => {
            window.location.reload();
          },
        });
      } else {
        console.error("Error:", response.status);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Sending, Please try again");
    }
  };

  const [captcha, setCaptcha] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
                {errors.map((error: any, index: number) => (
                  <p key={index} className="error">{error.partner_name}</p>
                ))}

                <input
                  type="text"
                  placeholder="Email Address"
                  name="email_cc"
                  onChange={handleChange}
                  required
                />
                {errors.map((error: any, index: number) => (
                  <p key={index} className="error">{error.email_cc}</p>
                ))}

                <input
                  type="text"
                  placeholder="Phone Number"
                  name="partner_phone"
                  onChange={handleChange}
                  required
                />
                {errors.map((error: any, index: number) => (
                  <p key={index} className="error">{error.partner_phone}</p>
                ))}

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
                  disabled={!captcha}
                  onClick={onSubmit}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Form;