const questions = [
  {
    question: 'Was ist Chemnitz Basketball?',
    answer: 'Chemnitz Basketball ist eine Initiative von Basketballfans, die sich für den Bau eines neuen Basketballplatzes am Konkordiapark einsetzt. Wir wollen die Liebe der Stadt für Kunst, Kultur und Sport zum Ausdruck bringen. Wir glauben fest daran, dass ein neuer Basketballplatz auf dem Konkordiapark eine Bereicherung für unsere Stadt ist. Helft uns das Projekt umzusetzen!',
  },
  {
    question: 'Warum soll ein neuer Basketballplatz gebaut werden?',
    answer: 'Der aktuelle Basketballplatz am Konkordiapark ist die Jahre gekommen. Das Spielfeld besteht aus Asphalt und zu hohen Rasenkanten. Dadurch gibt es ein erhöhtes Verletzungsrisiko. Nichtsdestotrotz ist es der zentrale Platz in Chemnitz und verdient es in neuem Glanz zu erstrahlen.',
  },
  {
    question: 'Wie soll der Platz aussehen?',
    answer: "Das befindet sich aktuell in einer Abstimmung. Scroll gern nach oben und gib deine Stimme ab! :-)"
  }
]

export default function Video(): JSX.Element {
  return (
    <div id="about" className="my-12 space-y-8">
      <div className="container max-w-4xl mx-auto px-4 space-y-4">
        <h2 className="inline font-bold bg-pink-600 text-lg md:text-xl uppercase">Häufige Fragen</h2>
        <div className="space-y-2 font-overpass md:text-justify">
          <p className="md:text-lg">CHEMNITZ BASKETBALL bringt die Liebe der Stadt für Kunst, Kultur und Sport zum Ausdruck. Wir glauben fest daran, dass ein neuer Basketballplatz auf dem Konkordiapark eine Bereicherung für unsere Stadt ist. Helft uns das Projekt umzusetzen!</p>
        </div>
      </div>
      <div className="container max-w-4xl mx-auto px-4 space-y-8">
        {questions.map(({ question, answer }, index) => (
          <div key={index}>
            <div className="mb-2 uppercase">
              <div className="inline text-lilac-800 bg-lilac-200">{question}</div>
            </div>
            <div className="font-overpass md:text-justify">{answer}</div>
          </div>
        ))}
      </div>
    </div>
  )
}