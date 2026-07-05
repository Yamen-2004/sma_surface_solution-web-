import { useState } from 'react'
import { ArrowDown, ArrowRight, ImageOff } from 'lucide-react'

const PROJECTS = [
  { before: '/assets/projects/project_one_before.jpeg', after: '/assets/projects/project_one_after.jpeg' },
  { before: '/assets/projects/project_two_before.jpeg', after: '/assets/projects/project_two_after.jpeg' },
  { before: '/assets/projects/project_three_before.jpeg', after: '/assets/projects/project_three_after.jpeg' },
  { before: '/assets/projects/project_four_before.jpeg', after: '/assets/projects/project_four_after.jpeg' },
  { before: '/assets/projects/project_five_before.jpeg', after: '/assets/projects/project_five_after.jpeg' },
  { before: '/assets/projects/project_six_before.jpeg', after: '/assets/projects/project_six_after.jpeg' },
]

export default function ProjectsSection({ sectionRef }) {
  const [selected, setSelected] = useState(0)
  const project = PROJECTS[selected]

  return (
    <section
      ref={sectionRef}
      className="w-full bg-base px-5 md:px-12 lg:px-[120px] py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-[30px] h-0.5 bg-gold" />
            <span className="text-xs font-semibold tracking-[3px] text-gold">OUR WORK</span>
            <div className="w-[30px] h-0.5 bg-gold" />
          </div>
          <h2 className="mt-4 text-3xl lg:text-[42px] font-extrabold text-white leading-tight">
            Before &amp; After
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-soft">
            See the transformation we deliver on every project
          </p>
        </div>

        {/* Main Viewer */}
        <div className="mt-10 lg:mt-14">
          <div className="hidden lg:flex items-start gap-5">
            <div className="flex-1">
              <ImageCard label="BEFORE" src={project.before} labelColor="#E53935" height={460} />
            </div>
            <div className="flex flex-col items-center justify-center" style={{ height: 460 }}>
              <div className="bg-gold rounded-full p-3.5">
                <ArrowRight size={24} className="text-black" />
              </div>
            </div>
            <div className="flex-1">
              <ImageCard label="AFTER" src={project.after} labelColor="#4CAF50" height={460} />
            </div>
          </div>

          <div className="lg:hidden flex flex-col gap-4">
            <ImageCard label="BEFORE" src={project.before} labelColor="#E53935" height={280} />
            <div className="flex justify-center">
              <ArrowDown size={32} className="text-gold" />
            </div>
            <ImageCard label="AFTER" src={project.after} labelColor="#4CAF50" height={280} />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-8 flex gap-3 overflow-x-auto no-scrollbar">
          {PROJECTS.map((p, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative flex-shrink-0 w-[120px] h-20 rounded overflow-hidden border transition ${
                selected === i ? 'border-gold border-2' : 'border-border'
              }`}
            >
              <img src={p.after} alt={`Project ${i + 1}`} className="w-full h-full object-cover" />
              {selected !== i && <div className="absolute inset-0 bg-black/40" />}
              {selected === i && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function ImageCard({ label, src, labelColor, height }) {
  const [error, setError] = useState(false)
  return (
    <div
      className="relative rounded-sm border border-border overflow-hidden"
      style={{ height }}
    >
      {!error ? (
        <img
          src={src}
          alt={label}
          onError={() => setError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#1A1A1A]">
          <ImageOff className="text-border-faint" size={40} />
        </div>
      )}
      <div
        className="absolute top-4 left-4 px-3.5 py-1.5 rounded-sm"
        style={{ backgroundColor: labelColor }}
      >
        <span className="text-[11px] font-extrabold text-white tracking-wider">{label}</span>
      </div>
    </div>
  )
}
