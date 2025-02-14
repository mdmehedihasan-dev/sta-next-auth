"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { users } from "@/utils/userData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function UserTable() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.location.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="bg-[#ED1E79] flex justify-between items-center py-3 px-10">
        <p className="uppercase font-semibold text-xl text-white">sta task</p>
        <div className="flex items-center">
          <Image src={"/4.png"} className="rounded-full" width={50} height={50} />
          <p className="font-bold text-white">Admin Marie</p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4">All User Details</h2>
          <div className="w-[322px]">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded mb-4 w-full"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-[#FEF1E6]">
              <th className="border p-2">S.no</th>
              <th className="border p-2">User</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Contact</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user, index) => (
              <tr key={user.id} className="text-center border">
                <td className="border p-2">#{user.id}</td>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">{user.contact}</td>
                <td className="border p-2">{user.location}</td>
                <td className="p-2 flex items-center justify-center">
                  <FaArrowTrendUp color="#ED1E79" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="mx-2 px-4 py-2 flex items-center  rounded disabled:opacity-50"
          >
             <FaChevronLeft/>  Previous
            
          </button>
          <div className="px-2 py-2 "> <span>{currentPage}</span> , {totalPages}</div>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="mx-2 px-4 py-2 flex items-center rounded disabled:opacity-50"
          >
            Next <FaChevronRight/>
          </button>
        </div>
      </div>
    </>
  );
}
