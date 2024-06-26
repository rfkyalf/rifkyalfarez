'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PulseLoader } from 'react-spinners';
import { ToastError, ToastSuccess } from '@/components/contact/toast';

interface FormInput {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const onSubmit = async (data: FormInput) => {
    try {
      setLoading(true);
      setShowButton(false);
      const res = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
          }),
        }
      );
      ToastSuccess({ message: 'Success, your message sent successfully' });
      reset();
    } catch (error) {
      ToastError({ message: 'Something went wrong, please try again' });
    } finally {
      setLoading(false);
      setShowButton(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
      noValidate
    >
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Name"
          {...register('name', {
            required: 'Please enter your name',
            pattern: {
              value: /\S+/,
              message: 'Name can not be blank',
            },
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters',
            },
            maxLength: {
              value: 50,
              message: 'Name must not exceed 35 characters',
            },
          })}
          className={`px-4 py-2 rounded-xl bg-transparent shadow dark:shadow-neutral-500 outline-none transition-shadow duration-300 ease-in-out focus:shadow-md text-neutral-950 dark:text-neutral-50 ${
            errors.name &&
            'shadow-red-500 dark:shadow-red-500 focus:shadow-red-500 placeholder-red-500'
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Please enter your email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message:
                'Invalid email address, please use format user@example.com',
            },
            maxLength: {
              value: 50,
              message: 'Email must not exceed 50 characters',
            },
          })}
          className={`px-4 py-2 rounded-xl bg-transparent shadow dark:shadow-neutral-500 outline-none transition-shadow duration-300 ease-in-out focus:shadow-md text-neutral-950 dark:text-neutral-50 ${
            errors.email &&
            'shadow-red-500 dark:shadow-red-500 focus:shadow-red-500 placeholder-red-500'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <textarea
          placeholder="Message"
          rows={5}
          {...register('message', {
            required: 'Please enter your message',
            pattern: {
              value: /\S+/,
              message: 'Message can not be blank',
            },
            minLength: {
              value: 3,
              message: 'Message must be at least 3 characters',
            },
            maxLength: {
              value: 500,
              message: 'Message must not exceed 500 characters',
            },
          })}
          className={`px-4 py-2 rounded-xl bg-transparent shadow dark:shadow-neutral-500 outline-none transition-shadow duration-300 ease-in-out focus:shadow-md text-neutral-950 dark:text-neutral-50 ${
            errors.message &&
            'shadow-red-500 dark:shadow-red-500 focus:shadow-red-500 placeholder-red-500'
          }`}
        />
        {errors.message && (
          <p className="text-red-500 text-sm font-semibold">
            {errors.message.message}
          </p>
        )}
      </div>
      {showButton && (
        <button
          type="submit"
          className="bg-neutral-800 py-2 rounded-xl text-neutral-50 text-base font-medium transition-colors duration-300 ease-in-out hover:bg-neutral-950 dark:hover:bg-neutral-700"
        >
          Send Message
        </button>
      )}

      {loading && (
        <div className="flex justify-center">
          <PulseLoader size={15} color={`#1e293b`} speedMultiplier={0.5} />
        </div>
      )}
    </form>
  );
}
