// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../ui/table";

// import Badge from "../ui/badge/Badge";
// import Image from "next/image";

// interface Order {
//   id: number;
//   user: {
//     image: string;
//     name: string;
//     role: string;
//   };
//   projectName: string;
//   team: {
//     images: string[];
//   };
//   status: string;
//   budget: string;
// }

// // Define the table data using the interface
// const tableData: Order[] = [
//   {
//     id: 1,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Ryan Robinson",
//       role: "AML",
//     },
//     projectName: "Amlbot.com",
//     team: {
//       images: [
//         "/images/user/user-22.jpg",
//         "/images/user/user-23.jpg",
//         "/images/user/user-24.jpg",
//       ],
//     },
//     budget: "Board Member",
//     status: "Active",
//   },
//   {
//     id: 2,
//     user: {
//       image: "/images/user/user-18.jpg",
//       name: "Tommy Ericson",
//       role: "Fscs",
//     },
//     projectName: "fscs.org.uk",
//     team: {
//       images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
//     },
//     budget: "Excutive Director",
//     status: "Vacation",
//   },
//   {
//     id: 3,
//     user: {
//       image: "/images/user/user-27.jpg",
//       name: "Byan schmeiser",
//       role: "Fscs",
//     },
//     projectName: "fscs.org.uk",
//     team: {
//       images: ["/images/user/user-27.jpg"],
//     },
//     budget: "Senior Investigator",
//     status: "Active",
//   },
//   {
//     id: 4,
//     user: {
//       image: "/images/user/user-20.jpg",
//       name: "John Martin",
//       role: "Fscs",
//     },
//     projectName: "Fscs.org.uk",
//     team: {
//       images: [
//         "/images/user/user-28.jpg",
//         "/images/user/user-29.jpg",
//         "/images/user/user-30.jpg",
//       ],
//     },
//     budget: "Financial Lawer",
//     status: "Cancel",
//   },
//   {
//     id: 5,
//     user: {
//       image: "/images/user/user-21.jpg",
//       name: "Hysnie Caliegan",
//       role: "Blockchain Developer",
//     },
//     projectName: "Panel",
//     team: {
//       images: [
//         "/images/user/user-31.jpg",
//         "/images/user/user-32.jpg",
//         "/images/user/user-33.jpg",
//       ],
//     },
//     budget: "Technical Department",
//     status: "Active",
//   },
// ];

// export default function BasicTableOne() {
//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
//       <div className="max-w-full overflow-x-auto">
//         <div className="min-w-[1102px]">
//           <Table>
//             {/* Table Header */}
//             <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
//               <TableRow>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   User
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Experience 
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Team members
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Status
//                 </TableCell>
//                 <TableCell
//                   isHeader
//                   className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//                 >
//                   Role
//                 </TableCell>
//               </TableRow>
//             </TableHeader>

//             {/* Table Body */}
//             <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//               {tableData.map((order) => (
//                 <TableRow key={order.id}>
//                   <TableCell className="px-5 py-4 sm:px-6 text-start">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 overflow-hidden rounded-full">
//                         <Image
//                           width={40}
//                           height={40}
//                           src={order.user.image}
//                           alt={order.user.name}
//                         />
//                       </div>
//                       <div>
//                         <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
//                           {order.user.name}
//                         </span>
//                         <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
//                           {order.user.role}
//                         </span>
//                       </div>
//                     </div>
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     {order.projectName}
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     <div className="flex -space-x-2">
//                       {order.team.images.map((teamImage, index) => (
//                         <div
//                           key={index}
//                           className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
//                         >
//                           <Image
//                             width={24}
//                             height={24}
//                             src={teamImage}
//                             alt={`Team member ${index + 1}`}
//                             className="w-full"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                     <Badge
//                       size="sm"
//                       color={
//                         order.status === "Active"
//                           ? "success"
//                           : order.status === "Pending"
//                           ? "warning"
//                           : "error"
//                       }
//                     >
//                       {order.status}
//                     </Badge>
//                   </TableCell>
//                   <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                     {order.budget}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function ContactUs() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white/90 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have questions about our crypto compliance solutions? We&apos;re here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4">Email Us</h2>

              <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">For general inquiries:</p>
                <a
                  href="mailto:info@pilottrace.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  info@pilottrace.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">For support:</p>
                <a
                  href="mailto:support@pilottrace.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  support@pilottrace.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4">Call Us</h2>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">International:</p>
                <a href="tel:+442039615502" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  +44 20 3961 5502
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4">Visit Us</h2>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Office:</p>
              <address className="not-italic text-gray-700 dark:text-gray-300 leading-relaxed">
                10th Floor, Beaufort House, 15 St Botolph St
                <br />
                City of London, London EC3A 7QU
                <br />
                United Kingdom
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
