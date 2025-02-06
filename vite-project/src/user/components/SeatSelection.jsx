import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeatSelection = () => {
  const [seaterSeats, setSeaterSeats] = useState([]);
  const [sleeperSeats, setSleeperSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSelectSeat = (type, seatNumber) => {
    const seatId = `${type}-${seatNumber}`;


    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBookSeats = () => {
    const selectedSeaterSeats = selectedSeats.filter(seat => seat.includes("seater"));
    const selectedSleeperSeats = selectedSeats.filter(seat => seat.includes("sleeper"));

    setSeaterSeats(selectedSeaterSeats);
    setSleeperSeats(selectedSleeperSeats);

    navigate('/booking-details', {
      state: {
        name,
        seaterSeats: selectedSeaterSeats,
        sleeperSeats: selectedSleeperSeats,
        totalSeats: selectedSeats.length,
      },
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Book Your Seats</h1>
      <div className="grid grid-cols-2 gap-4">
  
        <div>
          <h2 className="text-xl font-semibold mb-2">Seater Seats</h2>
          {[1, 2, 3, 4, 5, 6,].map((seat) => {
            const seatId =`seater-${seat}`;
            const isSelected = selectedSeats.includes(seatId);
            return (
              <button
                key={seat}
                className={`px-4 py-2 m-2 rounded transition-colors 
                  ${isSelected ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-100'}`}
                onClick={() => handleSelectSeat('seater', seat)}
              >
                S {seat}
              </button>
            );
          })}
        </div>

        
        <div>
          <h2 className="text-xl font-semibold mb-2">Sleeper Seats</h2>
          {[1, 2, 3, 4].map((seat) => {
            const seatId =`sleeper-${seat}`;
            const isSelected = selectedSeats.includes(seatId);
            return (
              <button
                key={seat}
                className={`px-4 py-2 m-2 rounded transition-colors 
                  ${isSelected ? 'bg-green-500 text-white' : 'bg-white hover:bg-green-100'}`}
                onClick={() => handleSelectSeat('sleeper', seat)}
              >
                S {seat}
              </button>
            );
          })}
        </div>
      </div>
      <button
        onClick={handleBookSeats}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Book Seats
      </button>
    </div>
  );
};

export default SeatSelection;