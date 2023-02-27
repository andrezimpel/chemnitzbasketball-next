import { Body } from '@react-email/body'
import { Button } from '@react-email/button'
import { Container } from '@react-email/container'
import { Head } from '@react-email/head'
import { Html } from '@react-email/html'
import { Img } from '@react-email/img'
import { Link } from '@react-email/link'
import { Preview } from '@react-email/preview'
import { Section } from '@react-email/section'
import { Tailwind } from '@react-email/tailwind'
import { Text } from '@react-email/text'

export default function Email() {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              black: '#111',
              pink: {
                "50": "#fff0fe",
                "100": "#ffdbfe",
                "200": "#ffb8fd",
                "300": "#ff94fb",
                "400": "#ff70fa",
                "500": "#ff4dfa",
                "600": "#ff0af7",
                "700": "#c700c0",
                "800": "#850080",
                "900": "#420040"
              },
              violet: {
                "50": "#e2dcfe",
                "100": "#c4b9fe",
                "200": "#8e78fc",
                "300": "#5332fb",
                "400": "#2a04e6",
                "500": "#1d03a1",
                "600": "#180282",
                "700": "#11025f",
                "800": "#0c0141",
                "900": "#05011e"
              },
              lime: {
                "50": "#fafffd",
                "100": "#f5fffb",
                "200": "#f0fff9",
                "300": "#e5fff4",
                "400": "#e0fff2",
                "500": "#d6ffee",
                "600": "#7affc8",
                "700": "#1aff9f",
                "800": "#00bd6e",
                "900": "#005c36"
              },
              purple: {
                "50": "#f0e2fd",
                "100": "#e1c5fc",
                "200": "#c690f9",
                "300": "#a856f6",
                "400": "#8b1cf3",
                "500": "#6f0bca",
                "600": "#5709a0",
                "700": "#420779",
                "800": "#2d0452",
                "900": "#150227"
              },
              lilac: {
                "50": "#f8f7fc",
                "100": "#edecf9",
                "200": "#dad9f2",
                "300": "#cbcaed",
                "400": "#b9b7e6",
                "500": "#a7a4e0",
                "600": "#706bcc",
                "700": "#413caf",
                "800": "#2b2772",
                "900": "#151339"
              },
              olive: {
                "50": "#fafcf8",
                "100": "#f6f8f1",
                "200": "#ecf2e4",
                "300": "#e3ebd6",
                "400": "#d9e4c8",
                "500": "#d0debb",
                "600": "#aac383",
                "700": "#83a550",
                "800": "#576e35",
                "900": "#2c371b"
              },
              red: {
                "50": "#fcedef",
                "100": "#fadbe0",
                "200": "#f4b3bd",
                "300": "#ef8f9e",
                "400": "#e9677b",
                "500": "#e4415a",
                "600": "#cd1d38",
                "700": "#9c162a",
                "800": "#670f1c",
                "900": "#36080f"
              }
            },
          },
          fonts: {
            sans: ['Overpass', 'sans-serif'],
            overpass: ['Overpass', 'sans-serif'],
          }
        },
      }}
    >
      <Html className='bg-black font-mono'>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="format-detection" content="telephone=no" />
          <title>Chemnitz Basketball</title>
          <link href="https://chemnitzbasketball.com/_next/static/css/96c91f572fef6dc3.css" rel="stylesheet" />
        </Head>
        <Preview className='hidden'>Wir laden dich herzlich ein!</Preview>
        <Body className='bg-black text-white font-["Overpass_Mono",_"ui-monospace",_"monospace"]'>
          <Container className='max-w-[512px] mx-auto p-6'>
            <Section>
              <Img
                src={`https://www.chemnitzbasketball.com/images/logo.png`}
                width="80"
                height="80"
                alt="CHEMNITZ BASKETBALL"
                className='mb-6'
              />
              <Text className='inline bg-purple-500 font-bold text-2xl uppercase'>
                Projektbeteiligung
              </Text>
              <Text className='font-base text-justify'>
                Hi VORNAME
              </Text>
              <Text className='font-base text-justify'>
                Danke, dass du 2020 auf unserer Website für einen neuen Basketballplatz gestimmt hast. Seitdem ist Dank deiner Hilfe schon viel passiert. Wir konnten den Stadtrat davon überzeugen Mittel bereitzustellen, um eine Variantenplanung zu erarbeiten.
              </Text>
              <Text className='font-base text-justify'>
                Diese stellen wir im Rahmen einer Projektbeteiligung am 4. März in der Messe Chemnitz um 16.00 Uhr vor.
              </Text>
              <Text className='font-base text-justify'>
                Ende März wird der Haushalt der Stadt Chemnitz für 23/24 verabschiedet. Damit ein neuer Platz Teil des Haushaltes wird, müssen wir die Stadtverwaltung davon überzeugen, dass die Bürger:innen hinter dem Projekt stehen.
              </Text>
              <Text className='font-base text-justify'>
                Wir sind eine große und aktive Community. Es ist wichtig, dass wir genau das der Stadt zeigen.
              </Text>
              <Text className='font-base text-justify text-purple-300'>
                Denn, je mehr Menschen zur Präsentation kommen, desto wahrscheinlicher ist auch der Bau des neuen Basketballplatzes.
              </Text>
              <Text className='font-base text-justify mt-8'>
                Wir bitten dich daher, VORNAME, uns am 4. März um 16.00 Uhr in der Messe Chemnitz zu unterstützen. Damit wir besser abschätzen können, wie viele Teilnehmer:innen kommen, bitten wir dich um eine unverbindliche Anmeldung.
              </Text>
              <Button
                pX={10}
                pY={10}
                href="https://www.chemnitzbasketball.com"
                className='bg-purple-500 text-white rounded-md font-bold text-center w-full block'
              >
                Zur Anmeldung
              </Button>
              <Text className='mt-6 text-xs text-justify text-gray-500'>
                Klicke <Link href="{{unsubscribe}}" className='text-gray-500 underline hover:text-purple-300'>hier</Link>, wenn du eine E-Mail von uns erhalten möchtest.
              </Text>
              <Text className='mt-6 text-sm text-gray-500'>
                © 2022 CHEMNITZ BASKETBALL. ALLE RECHTE VORBEHALTEN.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}