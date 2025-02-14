import Image from "next/image";

const FeedbackDetails = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl w-full relative">
        <h2 className="text-pink-600 text-lg font-semibold mb-4">Feedback Details</h2>
        <button className="absolute top-4 right-4 text-gray-500 text-lg">&times;</button>
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/user-avatar.jpg"
              alt="User"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h3 className="text-red-500 font-semibold">Mr. Mahmud</h3>
              <p className="text-sm text-gray-600">mahmud@gmail.com</p>
              <p className="text-xs text-gray-500">76/A R no. 60/1 Rue des Saints-Paris, 75005 Paris</p>
              <p className="text-xs text-gray-500">+099999</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Image
              src="/provider-avatar.jpg"
              alt="Provider"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h3 className="text-red-500 font-semibold">Mr. Jone</h3>
              <p className="text-sm text-gray-600">jone@gmail.com</p>
              <p className="text-xs text-gray-500">15 Rue des Saints-Paris, 75006 Paris</p>
              <p className="text-xs text-gray-500">+092578</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-lg">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold text-gray-800">4.5/5</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          <strong>Comment:</strong> dui. at tortor. nisi vitae Nullam adipiscing malesuada faucibus sit lacus orci Nam ac convallis. amet, elit. Donec elit massa nisl. hendrerit lorem. nec nisi
        </p>
      </div>
    </div>
  );
};

export default FeedbackDetails;
