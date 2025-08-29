import {
  PencilSquareIcon,
  UserIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

const OurCompanySection = () => {
  return (
    <div className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-xl text-gray-700 font-semibold uppercase mb-6">
      OUR COMPANY
    </h2>

    {/* Heading */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
      <div>
        <h3 className="text-3xl mb-4">
          Building <span className="font-bold">infrastructure</span> that
          drives <br /> progress across Africa
        </h3>
      </div>
      <div className="text-gray-600">
        <p className="mb-4">
          At <span className="font-semibold">Rasyom Limited</span>, we design
          and deliver world-class roads, bridges, and buildings that shape the
          future of communities and businesses. Our focus is on durability,
          safety, and innovation while ensuring projects are completed within
          budget and on schedule.
        </p>
        <p>
          We combine modern engineering practices with local expertise to
          provide solutions that stand the test of time and empower growth
          across Nigeria and beyond.
        </p>
      </div>
    </div>

    {/* Services Highlights */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Roads */}
      <div className="relative rounded-md overflow-hidden shadow-md transition-shadow hover:shadow-lg group">
        <div className="p-6">
          <PencilSquareIcon className="w-12 text-blue-500 h-12 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Road Construction</h4>
          <p className="text-sm text-gray-600">
            We construct durable and sustainable road networks that improve
            connectivity, ease transportation, and boost economic activities.
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>

      {/* Bridges */}
      <div className="bg-white rounded-md border border-gray-200 shadow-sm transition-shadow hover:shadow-lg group">
        <div className="p-6">
          <UserIcon className="text-orange-500 w-12 h-12 mb-4" />
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Bridge Engineering
          </h4>
          <p className="text-sm text-gray-600">
            From design to execution, we deliver strong, safe, and modern
            bridges that connect people and communities for generations.
          </p>
        </div>
      </div>

      {/* Buildings */}
      <div className="bg-white rounded-md border border-gray-200 shadow-sm transition-shadow hover:shadow-lg group">
        <div className="p-6">
          <BuildingOffice2Icon className="text-green-500 w-12 h-12 mb-4" />
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Building Projects
          </h4>
          <p className="text-sm text-gray-600">
            We design and construct residential, commercial, and industrial
            buildings that meet the highest standards of safety, quality, and
            aesthetics.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default OurCompanySection;
