const href =
  'mailto:thibault.friedrich@interaction-dynamics.io?subject=How to work together?'

export function MainCallToAction() {
  return (
    <a
      className="bg-primary text-background py-3 px-6 text-lg rounded-full font-semibold flex items-center justify-center cursor-pointer flex-1 font-sans"
      href={href}
    >
      Contact me
    </a>
  )
}
