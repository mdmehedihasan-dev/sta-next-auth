import { FaStar } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const feedbackData = [
  { id: "#1239", user: "Abdul", image: "/1.png", provider: "mr. jone", review: "5/5" },
  { id: "#1238", user: "Basar", image: "/2.png", provider: "Mr. Dibala", review: "5/5" },
  { id: "#1237", user: "Habiba", image: "/3.png", provider: "Paris hairs", review: "5/5" },
  { id: "#1236", user: "Basar", image: "/4.png", provider: "Alex Selun", review: "5/5" },
  { id: "#1234", user: "Habiba", image: "/2.png", provider: "Yolanda", review: "4.5/5" },
];

const FeedbackTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Feedbacks</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2">S.ID</th>
            <th className="py-2">User</th>
            <th className="py-2">Provider</th>
            <th className="py-2">Review</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{feedback.id}</td>
              <td className="py-2 flex items-center space-x-2">
                <img src={feedback.image} alt={feedback.user} className="w-8 h-8 rounded-md" />
                <span>{feedback.user}</span>
              </td>
              <td className="py-2">{feedback.provider}</td>
              <td className="py-2 flex items-center">
                <FaStar className="text-red-500 mr-1" /> {feedback.review}
              </td>
              <td className="py-2 text-blue-500">
                <FiExternalLink className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
