'use client'

import { FieldErrors, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form'

interface EventFormProps {
  firstname: string
  lastname: string
  email: string
  optin: boolean
}

const FORM_URL = "https://6b7f2bc0.sibforms.com/serve/MUIEAA8Znd4utlSDiytsvFOQR5XI5iOo_Ev3JId6_9Cpj2kqBsp9Ur0VBzXTU9hLJcFI3Ht3mAchqhbr-kRFtftOWhw6_gLuHN9XBV3yao6Ome8qMvZCCQ4ZyCH_W0-N5D226rsCTgoEEPYPXDI_75YNkc7JKQDWMoUj6peJSZffwIdICxAx_2vtumxzMVQ6UTSSGpglAhTKBhkC?isAjax=1"

export default function EventForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<EventFormProps>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      optin: true
    }
  })

  const onSubmit: SubmitHandler<EventFormProps> = async (data: EventFormProps): Promise<void> => {
    console.log({ data })
    const res = await fetch(FORM_URL, {
      method: 'POST',
      body: JSON.stringify(data),
    })
    const json = await res.json()
    console.log({ json })
  }

  return (
    <div className="bg-purple-500 rounded-xl p-4 space-y-6">
      <p className='uppercase font-akzidenz text-base md:text-lg mb-2 text-left'>Jetzt unverbindlich anmelden</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className='max-lg:space-y-4 lg:flex lg:space-x-4 mb-6'>
          <Input label="Vorname" name="firstname" required={true} register={register} errors={errors} />
          <Input label="Nachname" name="lastname" required={true} register={register} errors={errors} />
          <Input label="Email" name="email" required={true} register={register} type="email" errors={errors} />
        </div>
        <div className='space-y-6'>
          <div className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="optin"
                aria-describedby="comments-description"
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                {...register("optin")}
              />
            </div>
            <div className="ml-3">
              <label htmlFor="optin" className="font-medium">
                Ich möchte über die Entwicklung des Projekts informiert werden
              </label>
            </div>
          </div>
          <button className="uppercase font-bold inline-flex items-center rounded-md border border-transparent bg-purple-300 px-4 pt-2.5 pb-1.5 text-sm text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">Absenden</button>
        </div>
      </form>
    </div>
  )
}

interface InputProps {
  label: string
  name: "firstname" | "lastname" | "email" | "optin"
  required?: boolean
  register: UseFormRegister<EventFormProps>
  type?: "text" | "email"
  errors: FieldErrors<EventFormProps>
}

function Input({ label, name, register, required = false, type, errors }: InputProps): JSX.Element {
  return (
    <div className='w-full'>
      <label htmlFor={name} className='flex flex-col font-medium'>{label}</label>
      <input id={name} type={type} {...register(name, { required })} className="w-full form-input text-purple-50 bg-purple-700 rounded border-transparent shadow-sm focus:border-purple-50 focus:ring-purple-50 pt-2.5 pb-1.5" />
      {errors[name] && <div className='text-red-500 mt-1 text-sm'>Dieses Feld ist erforderlich.</div>}
    </div>
  )
}