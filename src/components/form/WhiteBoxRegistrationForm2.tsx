// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Eye, EyeOff } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { SetStateAction, useState } from "react";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { useMutation, useQuery } from "@tanstack/react-query";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { toast } from "sonner";
// import { Checkbox } from "@/components/ui/checkbox";

// const whiteBoxRegistrationFormSchema = z.object({
//   needs: z.string().min(1, { message: "List some specific needs  is required" }),
//   medical_info: z.string().optional(),
//   allergies: z.string().optional(),

//   }),

// export type whiteBoxRegistrationFormValues = z.infer<
//   typeof whiteBoxRegistrationFormSchema
// >;

// export default function whiteBoxRegisterationForm() {
//   const form = useForm<whiteBoxRegistrationFormValues>({
//     resolver: zodResolver(whiteBoxRegistrationFormSchema),
//     defaultValues: {
//       needs: "",
//       medical_info: "",
//       phone: "",
//       state: "",
//       address: "",
//       school: "",
//       level: "",
//     },
//   });

//   //   const registerUserMutation = useMutation({
//   //     mutationFn: registerUser,
//   //     onSuccess: (data) => {
//   //       toast.success(data.data.message || "An error occurred");
//   //       router.push("/verify-email");
//   //     },
//   //     onError: (error) => {
//   //       // toast.error( || "An error occurred");
//   //     },
//   //   });

//   async function onSubmit(values: whiteBoxRegistrationFormValues) {
//     // registerUserMutation.mutate(values);
//     // console.log(values);
//   }

//   return (
//     <>
//       {/* <div className="fixed z-100 w-full  p-4 min-w-screen content-center mx-auto inset-0 bg-black bg-opacity-50 "> */}
//       <div className="relative flex flex-col justify-center gap-4  text-[#c2c2c2]  rounded-2xl content-center mx-auto items-center bg-[#171717]">
//         <h2 className="text-2xl  font-bold">White Box Registration Form</h2>
//         <span className="text-white">Period Details</span>
//         <div className="flex gap-4">
//           <div className="flex gap-2">
//             <span>Regular Cycle</span>
//             <Checkbox />
//           </div>

//           <div className="flex gap-2">
//             <span>Irregular Cycle</span>
//             <Checkbox />
//           </div>
//         </div>
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className=" flex flex-col my-8 space-y-8 w-full p-5 "
//           >
//             <>
//               {/* <div className="grid grid-cols-2 gap-4"> */}
//               <div className=" flex flex-col gap-6 ">
//                 <FormField
//                   control={form.control}
//                   name="needs"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input
//                           placeholder="Specific needs"
//                           {...field}
//                           type="text"
//                           className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2 w-full  rounded-md  py-4 focus:outline-none focus:border-[#fff]"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="medical_info"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input
//                           placeholder="medical Information"
//                           {...field}
//                           type="text"
//                           className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2 w-full  rounded-md  py-4 focus:outline-none focus:border-[#fff]"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="phone"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input
//                           placeholder="Phone no"
//                           {...field}
//                           type="text"
//                           className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="address"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input
//                           placeholder="Address/LandMark"
//                           type="text"
//                           {...field}
//                           className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <div className="flex flex-col gap-6 text-left col-span-1">
//                 <span>School/College</span>
//                 <FormField
//                   control={form.control}
//                   name="school"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input
//                           placeholder="School/College"
//                           type="text"
//                           {...field}
//                           className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="level"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input
//                           placeholder="Level"
//                           type="text"
//                           {...field}
//                           className="bg-[#141414] text-[#c2c2c2] border-[#525151] border-2  w-full  rounded-md py-4 focus:outline-none focus:border-[#fff]"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               {/* </div> */}
//             </>

//             {/* <div className="flex flex-col justify-center items-center text-center mx-auto ">
//               <div className="inline-flex items-center justify-around gap-2">
//                 <p>
//                   By clicking on apply, you have read and agreed to our{" "}
//                   <span className="text-">
//                     <a>Terms and Conditions</a>
//                   </span>{" "}
//                 </p>
//                 <Checkbox className="w-4 h-4" />
//               </div>
//             </div> */}

//             <Button className="" size="default" type="submit">
//               Continue
//             </Button>
//           </form>
//         </Form>
//       </div>
//       {/* </div> */}
//     </>
//   );
// }
