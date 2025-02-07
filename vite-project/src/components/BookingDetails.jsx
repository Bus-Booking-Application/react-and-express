import { useLocation, useNavigate } from 'react-router-dom';

const BookingDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { seaterSeats, sleeperSeats } = state;

  const handleConfirmBooking = () => {
    navigate('/success');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Passenger Details</h1>
      <div className="mb-4">
        <p><strong>Name:</strong> Deepak</p>
        <p><strong>No. of Seats Booked:</strong> {seaterSeats.length + sleeperSeats.length}</p>
        <p><strong>Seater Seats:</strong> {seaterSeats.join(', ')}</p>
        <p><strong>Sleeper Seats:</strong> {sleeperSeats.join(', ')}</p>
      </div>
      <button
        onClick={handleConfirmBooking}
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingDetails;
