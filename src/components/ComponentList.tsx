import { VisaLogHigh } from "@visa/nova-icons-react";

interface ComponentsListProps {
  components: string[];
}

export default function ComponentsList({ components }: ComponentsListProps) {
  return (
   <aside className="bg-green-100 border border-green-300 p-4 rounded-xl shadow-md max-w-md w-full mx-auto">
      <div className="flex items-center gap-2 mb-3 text-m font-semibold text-gray-700">
        <VisaLogHigh className="w-4 h-4" />
        <span>Components Used</span>
      </div>

      {components.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {components.map((component) => (
            <span
              key={component}
              className="text-m text-gray-700 bg-white/70 rounded-md px-3 py-1 hover:bg-white transition"
            >
              {component}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-sm italic">No components listed</p>
      )}
    </aside>
  );
}
