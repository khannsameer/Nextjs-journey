import { db } from "@/config/db";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  User,
  Activity,
} from "lucide-react";
import { notFound } from "next/navigation";

// Return a list of `params` to populate the [slug] dynamic segment

// export async function generateStaticParams() {
//   const [doctors] = await db.execute(`select doctor_id from doctors`);
//   return doctors.map((doctor) => ({ id: doctor.doctor_id.toString() }));
// }

// [
//   { id: "1" },
//   { id: "2" },
//   { id: "3" }
// ]

const SingleDoctor = async (props) => {
  const params = await props.params;
  console.log("prams: ", params);

  const [[doctor]] = await db.execute(
    `SELECT * FROM doctors WHERE doctor_id = ?`,
    [params.id]
  );
  console.log("🚀 ~ SingleDoctor ~ doctor:", doctor);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  if (!doctor) return notFound();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
      <div className="max-w-md w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-3xl">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 p-8 text-white">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,white,transparent)]"></div>
          <div className="flex items-center space-x-5 relative z-10">
            <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-3xl font-bold shadow-md">
              {getInitials(doctor.first_name, doctor.last_name)}
            </div>
            <div>
              <h2 className="text-3xl font-bold leading-tight">
                Dr. {doctor.first_name} {doctor.last_name}
              </h2>
              <p className="text-purple-100 text-sm font-medium mt-1 tracking-wide">
                {doctor.specialization}
              </p>
              <div className="flex items-center mt-2">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    doctor.is_active ? "bg-green-400" : "bg-red-400"
                  }`}
                ></div>
                <span className="text-sm">
                  {doctor.is_active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Contact Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-700">
              <Mail className="w-5 h-5 text-blue-500" />
              <span className="text-sm">{doctor.email}</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <Phone className="w-5 h-5 text-green-500" />
              <span className="text-sm">{doctor.phone}</span>
            </div>
            <div className="flex items-start space-x-4 text-gray-700">
              <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
              <div className="text-sm leading-relaxed">
                <p>{doctor.address}</p>
                <p>
                  {doctor.city}, {doctor.state} {doctor.postal_code}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Professional Info */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-xs text-gray-500">Experience</p>
                <p className="text-sm font-semibold">
                  {doctor.experience_years} years
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-xs text-gray-500">License</p>
                <p className="text-sm font-semibold">{doctor.license_number}</p>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-indigo-500" />
              <div>
                <p className="text-xs text-gray-500">Joined</p>
                <p className="text-sm font-semibold">
                  {formatDate(doctor.joining_date)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Activity className="w-5 h-5 text-pink-500" />
              <div>
                <p className="text-xs text-gray-500">Date of Birth</p>
                <p className="text-sm font-semibold">
                  {formatDate(doctor.date_of_birth)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 px-8 py-4 text-center text-xs text-gray-500 font-medium">
          ID: {doctor.doctor_id} • Last Updated:{" "}
          {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
