'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { FieldErrors, SubmitHandler, useForm, UseFormRegister } from "react-hook-form"
import useSWR from "swr"
import { twMerge } from 'tailwind-merge'

const fetcher = (url) => fetch(url).then((res) => res.json())

const courtData = [
  { value: "1", file: '01.png' },
  { value: "2", file: '02.png' },
  { value: "3", file: '03.png' },
  { value: "4", file: '04.png' },
  { value: "5", file: '05.png' },
  { value: "6", file: '06.png' },
  { value: "7", file: '07.png' },
  { value: "8", file: '08.png' }
]

type Inputs = {
  design: string[],
  email: string,
  namespace: string
}

type State = {
  user?: {
    id?: string
    email: string,
    votes: {
      [key: string]: string[]
    }
  },
  votedToday: boolean
}

const NAMESPACE = 'courtDesign'
const isBrowser = typeof window !== "undefined"

export default function DesignVotingFrorm() {
  const email = isBrowser && localStorage.getItem(NAMESPACE)
  const { data, error, isLoading } = useSWR(
    `/api/voting?email=${encodeURIComponent(email)}`,
    fetcher
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error. Shit.</div>

  return <Component {...data} />
}

function Component(data) {
  const [state, setState] = useState<State>(data)
  const { user, votedToday } = state

  const { register, handleSubmit, watch, formState: { errors, isSubmitSuccessful } } = useForm<Inputs>({
    defaultValues: {
      design: [],
      email: user?.email || "",
      namespace: NAMESPACE
    }
  })

  const design = watch("design")
  const email = watch("email")
  const count = useMemo(() => {
    return design?.length || 0
  }, [design])

  const onSubmit: SubmitHandler<Inputs> = async ({ design, email, namespace }) => {
    if (!email) return
    if (design.length > 3 && design.length < 1) return

    console.log('vote')

    const res = await fetch('/api/voting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ design, email, namespace })
    })
    const _res = await res.json()
    localStorage.setItem(NAMESPACE, _res.user.email)
    setState(_res)
    setTimeout(() => document.getElementById("votingForm").scrollIntoView(), 500)
  }

  return (
    <div id="votingForm" className="border-2 rounded-lg border-purple-600 p-2 md:p-6 relative space-y-6">
      {votedToday && (
        <div className='text-white bg-purple-500 rounded-lg p-4 space-y-4'>
          <p>Du hast heute schon abgestimmt. Wir freuen uns sehr, wenn du deine Stimme morgen erneut abgibst.</p>
          <p>🏀🖤🤎❤️🧡💛💚💙💜🤍</p>
        </div>
      )}
      {!votedToday && isSubmitSuccessful && (
        <div className='text-white bg-purple-500 rounded-lg p-4 space-y-4'>
          <p>Wir freuen uns ganz sehr über deine Stimme! Du erhältst eine E-Mail mit einem Link, den du bestätigen musst, damit deine Stimme zählt. Das machen wir, um deine Stimme zu verifizieren.</p>
          <p>🏀🖤🤎❤️🧡💛💚💙💜🤍</p>
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={twMerge(
          (votedToday || isSubmitSuccessful) && "pointer-events-none opacity-70",
          "space-y-6"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courtData.map(({ value, file }) => (
            <Option
              key={value}
              register={register}
              value={value}
              selected={design}
              disabled={count > 2}
              file={file}
            />
          ))}
        </div>
        {!votedToday && (
          <>
            <div className="space-y-2">
              <Input
                label="E-Mail-Adresse"
                name="email"
                register={register}
                errors={errors}
                type="email"
                help="Wir benötigen deine E-Mail-Adresse, um deine Stimme zu verifizieren. Du erhältst eine E-Mail mit einem Link, den du bestätigen musst, damit deine Stimme zählt."
              />
            </div>
            <div className='sticky bottom-0 flex items-center justify-end space-x-4 py-2 bg-black bg-opacity-90 backdrop-blur-md'>
              {count === 0 ? <p className='text-sm leading-4'>Wähle bis zu 3 Designs aus.</p> : <p className='text-sm leading-4'>{count} von bis zu 3 ausgewählt.</p>}
              <button
                className={twMerge(
                  "uppercase font-bold inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 pt-2.5 pb-1.5 text-sm text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2",
                  (count === 0 || email === "") && "cursor-not-allowed pointer-events-none bg-purple-200",
                )}
              >Weiter</button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}

function Option({ register, value, selected, disabled, file }: { register: any, value: string, selected: string[], disabled: boolean, file?: string }) {
  const isSelected = useMemo(() => {
    return (selected || [])?.includes(value) || false
  }, [selected])

  const classNameLabel: string = useMemo(() => {
    return twMerge(
      'text-gray-500 cursor-pointer bg-stone-800 hover:bg-stone-400 rounded-2xl p-2 relative',
      disabled && !isSelected && "cursor-not-allowed pointer-events-none opacity-50",
      isSelected && "bg-stone-300 hover:bg-stone-100",
    )
  }, [isSelected, disabled])

  return (
    <label className={classNameLabel}>
      {isSelected && (
        <div className='bg-pink-500 rounded-lg p-2 fill-white inline-block absolute -right-1 -top-1'>
          <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
          </svg>
        </div>
      )}
      <input type="checkbox" defaultValue={value} {...register("design")} className="hidden" />
      <Image
        className='w-full'
        src={`/images/court-designs/${file}`}
        width={500}
        height={500}
        alt={`Design #${value}`}
      />
      <div className='font-overpass text-white leading-5 mt-4'>Kraftvollen Farbverläufe, klaren Linien und markierte Shooting-Spots von NBA-Stars, die über QR-Codes weitere Stats und Infos bieten. Form meets function.</div>
    </label>
  )
}

interface InputProps {
  label: string
  name: keyof Inputs
  required?: boolean
  register: UseFormRegister<Inputs>
  type?: "email"
  errors: FieldErrors<Inputs>
  autoComplete?: string
  help?: string
}

function Input({ label, name, register, required = false, type, errors, autoComplete, help }: InputProps): JSX.Element {
  return (
    <div className='w-full'>
      <label htmlFor={autoComplete} className={
        twMerge(
          errors[name] && "text-red-400",
          "flex flex-col font-medium"
        )
      }>{label}</label>
      <input id={autoComplete} type={type} autoComplete={autoComplete} {...register(name, { required })} className={
        twMerge(
          errors[name] ? "border-red-400 focus:border-red-400 focus:ring-red-400" : "border-transparent focus:border-purple-50 focus:ring-purple-50",
          "w-full form-input text-purple-50 bg-purple-700 rounded-md shadow-sm pt-2.5 pb-1.5"
        )
      } />
      {errors[name] && <div className='text-red-400 mt-2 text-sm font-overpass'>Bitte ausfüllen.</div>}
      {help && <div className='text-gray-400 mt-2 text-sm font-overpass'>{help}</div>}
    </div>
  )
}