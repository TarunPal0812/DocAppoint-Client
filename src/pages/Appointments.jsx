import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id == docId);
    setDocInfo(docInfo);
    // console.log(docInfo);
  };

  // const getAvailableSlots = async () => {
  //   setDocSlots([]);

  //   // getting current date
  //   let today = new Date();
  //   for (let i = 0; i < 7; i++) {
  //     // getting date with index
  //     let currentDate = new Date(today);
  //     currentDate.setDate(today.getDate() + i);

  //     // Setting end time of the date with index
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
  //       let formetedTime = currentDate.toLocaleTimeString([], {
  //         hour: "2-digit",
  //         minute: "2-digit",
  //       });
  //       //Add Slots to the array
  //       timeSlots.push({
  //         datetime: new Date(currentDate),
  //         time: formetedTime,
  //       });
  //       //Increment time by 30 min
  //       currentDate.setMinutes(currentDate.getMinutes() + 30);
  //     }
  //     setDocSlots((prev) => [...prev, timeSlots]);
  //   }
  // };

  const getAvailableSlots = async () => {
    setDocSlots([]); // Clear previous slots

    const today = new Date();

    const allSlots = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Define slot start and end times
      let slotStart = new Date(currentDate);
      let slotEnd = new Date(currentDate);
      slotEnd.setHours(21, 0, 0, 0); // Slots until 9:00 PM

      if (i === 0) {
        // Today's slots: start from the next 30-minute interval from now
        const now = new Date();
        slotStart.setHours(now.getHours(), now.getMinutes(), 0, 0);

        // Round up to the next 30-minute interval
        const minutes = slotStart.getMinutes();
        if (minutes < 30) {
          slotStart.setMinutes(30);
        } else {
          slotStart.setMinutes(0);
          slotStart.setHours(slotStart.getHours() + 1);
        }

        // Ensure earliest slot starts from at least 10:00 AM
        if (slotStart.getHours() < 10) {
          slotStart.setHours(10, 0, 0, 0);
        }
      } else {
        // Other days: start at 10:00 AM
        slotStart.setHours(10, 0, 0, 0);
      }

      const timeSlots = [];

      while (slotStart < slotEnd) {
        const formattedTime = slotStart.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(slotStart),
          time: formattedTime,
        });

        // Increment by 30 minutes
        slotStart.setMinutes(slotStart.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSlots(allSlots);
  };
  
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
    console.log(docSlots);
    
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="">
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* Doc info  */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex text-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* Doctor About */}
            <div className="">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900  mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/* Booking slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p className="">Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer
                ${slotIndex === index ? "bg-primary text-white":"border border-gray-200"}`} key={index}>
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length && docSlots[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)} key={index} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white': "text-gray-400 border border-gray-300" }`}>
                {
                  item.time.toLowerCase()
                }
              </p>
            ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an appointment</button>
        </div>
        {/* Related Doctors */}
        <RelatedDoctors docId={docId} speciality=
        {docInfo.speciality}/>
      </div>
    )
  );
};

export default Appointments;
