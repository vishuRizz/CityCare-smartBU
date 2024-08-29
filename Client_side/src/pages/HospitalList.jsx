import React from "react";
import Navbar from "../components/Navbar";
import useHospitals from "../Hooks/Hospitals";

function HospitalList() {
  const { hospitals, loading, error } = useHospitals();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4 mt-14">
        <h2 className="mb-4 text-2xl font-bold">Hospitals</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hospitals.map((hospital) => (
            <li key={hospital._id} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{hospital.hospitalName}</h3>
              <p className="text-gray-600">Email: {hospital.email}</p>
              <p className="text-gray-600">Contact: {hospital.contactNumber}</p>
              <p className="text-gray-600">Address: {hospital.address}</p>
              <p className="text-gray-600">Type: {hospital.hospitalType}</p>
              <p className="text-gray-600">
                Emergency Services: {hospital.emergencyServices ? "Yes" : "No"}
              </p>
              <p className="text-gray-600">
                Number of Beds: {hospital.numberOfBeds}
              </p>
              {hospital.facilities && hospital.facilities.length > 0 && (
                <div>
                  <h4 className="mt-2 text-lg font-medium">Facilities:</h4>
                  <ul className="list-disc list-inside">
                    {hospital.facilities.map((facility, index) => (
                      <li key={index} className="text-gray-600">
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HospitalList;
