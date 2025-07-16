import { FileDown } from "lucide-react"
import { PencilRuler } from "lucide-react"

/**
 * Button to open devtools
 * Download button
 */
export default function BotTools() {

  return (
    <div className="flex justify-between m-4">

      <button>
        <PencilRuler
          size={16}
        />
      </button>

      <button>
        <FileDown
          size={16}
        />
      </button>
    </div>
  )
}