interface VideoPlayerProps {
  id: string
  title: string
}

export default function VideoPlayer({ id, title }: VideoPlayerProps): JSX.Element {
  return (
    <iframe
      className="w-full aspect-video"
      src={`https://www.youtube.com/embed/${id}?autoplay=1`}
      srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}svg{width:68px;}</style><a href=https://www.youtube.com/embed/${id}?autoplay=1><img src=https://img.youtube.com/vi/${id}/maxresdefault.jpg alt='${title}'><span><svg height='100%' viewBox='0 0 68 48' width='100%'><path fill='#f00' d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z'></path><path d='M 45,24 27,14 27,34' fill='#fff'></path></svg></span></a>`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    ></iframe>
  )
}