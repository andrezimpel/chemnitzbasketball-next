'use client'

import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { FieldErrors, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form'

interface EventFormProps {
  VORNAME: string
  NACHNAME: string
  EMAIL: string
  OPT_IN: boolean
}

const FORM_URL = "https://f4ae8c7a.sibforms.com/serve/MUIEAMb-uj2abmmygAZbhh8fc7sTNTY8Q1FrowNdKfdKSnXKmGJ8hXVtQUC0nWlqBU5oqp2EoXWrPmbk_q9CWYiylqonieulksLUKISqLEvfUnve5zEny0iGg2wo6l_UV-RCjzzvdnVjFLIegePINv0oVysC8_eAF6AKPP4rEspMn1W7G8xIUBwOmqVD1T9rk3Wav_MtyHG5Djh1?isAjax=1"

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function EventForm() {
  const [success, setSuccess] = useState<boolean>(false)
  const { register, handleSubmit, setError, reset, formState: { errors, isSubmitting } } = useForm<EventFormProps>({
    defaultValues: {
      VORNAME: '',
      NACHNAME: '',
      EMAIL: '',
      OPT_IN: true
    }
  })

  const onSubmit: SubmitHandler<EventFormProps> = async (data: EventFormProps): Promise<void> => {
    const formData = new FormData()
    Object.keys(data as EventFormProps).forEach((key: string) => {
      formData.append(key, data[key as keyof EventFormProps] as string)
    })

    const res = await fetch(FORM_URL, {
      method: 'POST',
      body: formData
    })
    if (res.ok) {
      setSuccess(true)
      reset()
    } else {
      setError('root', { type: 'manual', message: 'Es ist ein Fehler aufgetreten. Bitte versuche es später noch einmal. 🤝' })
    }
  }

  return (
    <div className="bg-purple-500 rounded-xl p-4 space-y-4">
      <div>
        <p className='uppercase font-akzidenz text-base md:text-lg mb-2 text-left'>Deine Stimme zählt</p>
        <p>Lasst uns der Stadt zeigen, wie viele hinter dem Projekt stehen.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={
        classNames(
          isSubmitting && "animate-pulse pointer-events-none",
          "w-full space-y-4"
        )
      }>
        {errors.root && <div className="self-start rounded-md font-bold bg-red-500 p-4 pb-3.5 text-red-900 text-sm">{errors.root.message}</div>}
        {success && (
          <div className="flex self-start rounded-md font-bold bg-lime-500 px-4 pt-4 pb-3 text-lime-900 text-sm">
            <div>Deine Anmeldung war erfolgreich. Wir haben dir eine Mail zur Bestätigung gesendet. Bitte klick auf den Link in der Email, damit deine Anmeldung bei uns eingeht. 🎉</div>
            <div className='ml-auto'>
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-transparent p-1.5 text-lime-900 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2 focus:ring-offset-lime-50"
                  onClick={() => setSuccess(false)}
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        )}
        <div className='max-lg:space-y-4 lg:flex lg:space-x-4 mb-6'>
          <Input label="Vorname" name="VORNAME" autoComplete="firstname" required={true} register={register} errors={errors} />
          <Input label="Nachname" name="NACHNAME" autoComplete="lastname" required={true} register={register} errors={errors} />
          <Input label="Email" name="EMAIL" autoComplete="email" required={true} register={register} type="email" errors={errors} />
        </div>
        <div className="relative flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="optin"
              aria-describedby="comments-description"
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
              {...register("OPT_IN")}
            />
          </div>
          <div className="ml-3">
            <label htmlFor="optin" className="font-medium">
              Ich möchte über die Entwicklung des Projekts informiert werden
            </label>
          </div>
        </div>
        <button className="uppercase font-bold inline-flex items-center rounded-md border border-transparent bg-purple-300 px-4 pt-2.5 pb-1.5 text-sm text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
          {isSubmitting && (
            <>
              <svg className="animate-spin -ml-1 -mt-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <div>Wird übertragen...</div>
            </>
          )}
          {!isSubmitting && "Absenden"}
        </button>
      </form>
    </div>
  )
}

interface InputProps {
  label: string
  name: "VORNAME" | "NACHNAME" | "EMAIL" | "OPT_IN"
  required?: boolean
  register: UseFormRegister<EventFormProps>
  type?: "text" | "email"
  errors: FieldErrors<EventFormProps>
  autoComplete?: string
}

function Input({ label, name, register, required = false, type, errors, autoComplete }: InputProps): JSX.Element {
  return (
    <div className='w-full'>
      <label htmlFor={autoComplete} className={
        classNames(
          errors[name] && "text-red-400",
          "flex flex-col font-medium"
        )
      }>{label}</label>
      <input id={autoComplete} type={type} autoComplete={autoComplete} {...register(name, { required })} className={
        classNames(
          errors[name] ? "border-red-400 focus:border-red-400 focus:ring-red-400" : "border-transparent focus:border-purple-50 focus:ring-purple-50",
          "w-full form-input text-purple-50 bg-purple-700 rounded-md shadow-sm pt-2.5 pb-1.5"
        )
      } />
      {errors[name] && <div className='text-red-400 mt-1 text-sm'>Bitte ausfüllen.</div>}
    </div>
  )
}