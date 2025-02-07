import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-green-600">Your Seat has been Booked Successfully!</h1>
        <Link to="/" className="text-blue-500 mt-4 block">Go Back</Link>
      </div>
    </div>
  );
};

export default Success;
