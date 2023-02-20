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

const FORM_URL = "https://f4ae8c7a.sibforms.com/serve/MUIEAHWpHkVY3QiB8xl_w0IVzdwNMNzQKtkaBsaDdm37IEjVeSV-QuCEFiLA5ri6vOymohzCGlnO_VUkkX8unDszIiwXwqLSmsmh_4EYWUiX7AH8Og1KQTfCT-vin2m6x0jbSndsjtRHkaguzbGtZwQ_IEAeF0lIpaC8k7Sq_41CKGIqwIBLURbHRMZKyohiMVuga_Z5qSjFjKGV?isAjax=1"

export default function EventForm() {
  const [success, setSuccess] = useState<boolean>(false)
  const { register, handleSubmit, setError, reset, formState: { errors } } = useForm<EventFormProps>({
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
        <p className='uppercase font-akzidenz text-base md:text-lg mb-2 text-left'>Anmeldung</p>
        <p>Wir freuen uns sehr, wernn ihr an der Präsentation teilnehmt. Damit wir abschätzen können wie groß der Rahmen wird, bitten wir euch um eine unverbindliche Anmeldung.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        {errors.root && <div className="self-start rounded-md font-bold bg-red-500 p-4 pb-3.5 text-red-900 text-sm">{errors.root.message}</div>}
        {success && (
          <div className="flex self-start rounded-md font-bold bg-lime-500 p-4 pb-3.5 text-lime-900 text-sm">
            <div>Deine Anmeldung war erfolgreich. Wir haben dir eine Mail zur Bestätigung gesendet. 🎉</div>
            <div className='ml-auto'>
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-lime-100 p-1.5 text-lime-900 hover:bg-lime-100 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2 focus:ring-offset-lime-50"
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
              className="h-5 w-5 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
              {...register("OPT_IN")}
            />
          </div>
          <div className="ml-3">
            <label htmlFor="optin" className="font-medium">
              Ich möchte über die Entwicklung des Projekts informiert werden
            </label>
          </div>
        </div>
        <button className="uppercase font-bold inline-flex items-center rounded-md border border-transparent bg-purple-300 px-4 pt-2.5 pb-1.5 text-sm text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">Absenden</button>
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
      <label htmlFor={autoComplete} className='flex flex-col font-medium'>{label}</label>
      <input id={autoComplete} type={type} autoComplete={autoComplete} {...register(name, { required })} className="w-full form-input text-purple-50 bg-purple-700 rounded-md border-transparent shadow-sm focus:border-purple-50 focus:ring-purple-50 pt-2.5 pb-1.5" />
      {errors[name] && <div className='text-red-500 mt-1 text-sm pl-4'>Dieses Feld ist erforderlich.</div>}
    </div>
  )
}