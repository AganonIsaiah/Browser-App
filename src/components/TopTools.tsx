import { ArrowLeft, ArrowRight, RotateCcw, Workflow } from "lucide-react"


export default function TopTools() {

  return (
    <div className="flex gap-2 m-4">

      <div className="flex gap-2">
        <button
          className="w-3.5 h-3.5 rounded-full"
          style={{ background: '#FF605C' }}
          aria-label="Close"
        />
        <button
          className="w-3.5 h-3.5 rounded-full"
          style={{ background: '#FFBD44' }}
          aria-label="Minimize"
        />
        <button
          className="w-3.5 h-3.5 rounded-full"
          style={{ background: '#00CA4E' }}
          aria-label="Maximize"
        />
      </div>


      <div className="flex gap-2 ml-auto">
        <button aria-label="Extensions">
          <Workflow
            size={16} />

        </button>

        <button aria-label="Back">
          <ArrowLeft
            size={16} />
        </button>

        <button aria-label="Forward">
          <ArrowRight
            size={16}
          />
        </button>

        <button aria-label="Reload">
          <RotateCcw
            size={16}
            className="transform scale-x-[-1]"
          />
        </button>
      </div>

    </div>
  )
}