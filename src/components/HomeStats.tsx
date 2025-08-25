import {
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

type Stat = {
  id: number;
  value: number | string;
  label: string;
  icon: React.ElementType;
};

const stats: Stat[] = [
  {
    id: 1,
    value: 1037,
    label: "Completed Projects",
    icon: ClipboardDocumentCheckIcon,
  },
  { id: 2, value: 5798, label: "Qualified Engineers", icon: UserGroupIcon },
  {
    id: 3,
    value: "747+",
    label: "Work Facilities",
    icon: WrenchScrewdriverIcon,
  },
  {
    id: 4,
    value: "30+",
    label: "Worldwide Branches",
    icon: BuildingOffice2Icon,
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center text-white">
            <stat.icon className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-gray-300 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
