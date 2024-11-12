import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const navigate = useNavigate();
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fectchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    // console.log("docInfo", docInfo);
  };

  // const getAvailableSlots = async () => {
  //   setDocSlots([]);

  //   // getting current date
  //   let today = new Date();

  //   for (let i = 0; i < 7; i++) {
  //     // getting date with index
  //     let currentDate = new Date(today);
  //     currentDate.setDate(today.getDate() + i);

  //     // setting end time of the date with index
  //     let endTime = new Date();
  //     endTime.setDate(today.getDate() + i);
  //     endTime.setHours(21, 0, 0, 0);

  //     // setting hours
  //     if (today.getDate() === currentDate.getDate()) {
  //       currentDate.setHours(
  //         currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
  //       );
  //       currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
  //     } else {
  //       currentDate.setHours(10);
  //       currentDate.setMinutes(0);
  //     }

  //     let timeSlots = [];
  //     while (currentDate < endTime) {
  //       let formattedTime = currentDate.toLocaleTimeString([], {
  //         hour: "2-digit",
  //         minute: "2-digit",
  //       });

  //       // add slot to aaray
  //       timeSlots.push({
  //         datetime: new Date(currentDate),
  //         time: formattedTime,
  //       });

  //       // Increment current time by 30 minutes
  //       currentDate.setMinutes(currentDate.getMinutes() + 30);
  //     }

  //     setDocSlots((prev) => [...prev, timeSlots]);
  //   }
  // };

  // const getAvailableSlots = async () => {
  //   const newDocSlots = []; // Temporary array to hold slots

  //   // Get current date
  //   let today = new Date();

  //   for (let i = 0; i < 7; i++) {
  //     // Getting date with index
  //     let currentDate = new Date(today);
  //     currentDate.setDate(today.getDate() + i);

  //     // Setting end time of the date with index
  //     let endTime = new Date(currentDate);
  //     endTime.setHours(21, 0, 0, 0);

  //     // Setting hours
  //     if (today.getDate() === currentDate.getDate()) {
  //       // Start from the next half-hour mark or 10:00 AM, whichever is later
  //       const nextHour = currentDate.getHours();
  //       const nextMinutes = currentDate.getMinutes() > 30 ? 0 : 30;

  //       currentDate.setHours(nextHour);
  //       currentDate.setMinutes(nextMinutes);
  //       if (currentDate < today) {
  //         // Ensure we don't set a past time
  //         currentDate.setHours(10);
  //         currentDate.setMinutes(0);
  //       }
  //     } else {
  //       // For other days, start from 10:00 AM
  //       currentDate.setHours(10);
  //       currentDate.setMinutes(0);
  //     }

  //     let timeSlots = [];
  //     while (currentDate < endTime) {
  //       let formattedTime = currentDate.toLocaleTimeString([], {
  //         hour: "2-digit",
  //         minute: "2-digit",
  //       });

  //       // Add slot to array
  //       timeSlots.push({
  //         datetime: new Date(currentDate),
  //         time: formattedTime,
  //       });

  //       // Increment current time by 30 minutes
  //       currentDate.setMinutes(currentDate.getMinutes() + 30);
  //     }

  //     // Add day's slots to temporary array
  //     newDocSlots.push(timeSlots);
  //   }

  //   // Update state once after constructing all slots
  //   setDocSlots(newDocSlots);
  // };

  const getAvailableSlots = async () => {
    const newDocSlots = []; // Temporary array to hold slots

    // Get current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.toDateString() === currentDate.toDateString()) {
        // Calculate slots for today
        const nextMinutes = today.getMinutes() >= 30 ? 0 : 30;
        const nextHour =
          today.getMinutes() >= 30 ? today.getHours() + 1 : today.getHours();

        currentDate.setHours(nextHour);
        currentDate.setMinutes(nextMinutes);

        if (currentDate < today) {
          currentDate.setHours(10);
          currentDate.setMinutes(0);
        }
      } else {
        // Start from 10:00 AM for other days
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      newDocSlots.push(timeSlots);
    }

    setDocSlots(newDocSlots);
  };

  useEffect(() => {
    fectchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log("docSlots", docSlots);
  }, [docSlots]);

  useEffect(() => {
    if (docSlots.length > 0) {
      setSlotIndex(0); // Default to today
    }
  }, [docSlots]);

  return (
    // {/* Doctor Details */}
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt="doctor-img"
            />
          </div>

          <div className="flex-1 border border-gray-300 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img
                className="w-5"
                src={assets.verified_icon}
                alt="verify_icon"
              />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree}-{docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <div>
                <p className="flex items-center gap-1 text-sm font-medium text-gray-800 mt-3">
                  About <img src={assets.info_icon} alt="info icon" />
                </p>
                <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                  {docInfo.about}
                </p>
              </div>
              <p className="text-gray-500 font-medium mt-4">
                Appointment fee:{" "}
                <span className="text-gray-600">
                  {currencySymbol}
                  {docInfo.fees * 90}/-
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Booking Slots */}

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>
                    {item[0]
                      ? daysOfWeek[item[0].datetime.getDay()]
                      : daysOfWeek[new Date().getDay()]}
                  </p>
                  <p>
                    {item[0]
                      ? item[0].datetime.getDate()
                      : new Date().getDate()}
                  </p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 && docSlots[slotIndex]?.length > 0 ? (
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 mt-4 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-4">
                No slots available for the selected day.
              </p>
            )}
          </div>
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
          >
            Book an appointment
          </button>
        </div>

        {/* Listing Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
