import {
  PencilSquareIcon,
  UserIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";

const OurCompanySection = () => {
  return (
    <div className="py-16 px-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl text-gray-700 font-semibold uppercase mb-6">
          OUR COMPANY
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-3xl text-blue-900 font-bold mb-4">
              We stay current with the{" "}
              <span className="text-orange-500">latest applications</span> and{" "}
              <br />
              building technologies
            </h3>
          </div>
          <div className="text-gray-600">
            <p className="mb-4">
              We build the finest homes and structures within our client’s
              budgets and time frame without sacrificing quality and
              workmanship. We work with you on all of your green energy ideas.
              We keep you up to date on the latest greenest building practices
              and materials.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-md overflow-hidden shadow-md transition-shadow hover:shadow-lg group">
            <div className=" p-6">
              <PencilSquareIcon className="w-12 text-blue-500 h-12 mb-4" />
              <h4 className="text-lg font-semibold mb-2">
                Construction Management
              </h4>
              <p className="text-sm">
                This area delivers the control you want over all critical
                aspects of your project.
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          <div className="bg-white rounded-md border border-gray-200 shadow-sm transition-shadow hover:shadow-lg group">
            <div className="p-6">
              <UserIcon className="text-orange-500 w-12 h-12 mb-4" />
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Owner&apos;s Representation
              </h4>
              <p className="text-sm text-gray-600">
                A good owner&apos;s rep saves their client time, money and a lot
                of headaches.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-md border border-gray-200  shadow-sm">
            <div className="p-6">
              <BuildingOffice2Icon className="text-green-500 w-12 h-12 mb-4" />
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                General Contractor
              </h4>
              <p className="text-sm text-gray-600">
                Clients hire Bauer because we deliver great value, without
                question.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompanySection;
