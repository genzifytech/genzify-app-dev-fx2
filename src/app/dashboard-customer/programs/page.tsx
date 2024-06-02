"use client";
import { getPrograms } from "@/api/program";
import DashboardLayout from "@/components/layouts/DasboardLayout";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function ProgramPage() {
  // const { isLoading, data, error } = useQuery({
  //   queryKey: ["program"],
  //   queryFn: getPrograms,
  // });

  const { isLoading, data, error } = useQuery({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });

  console.log(data, "programQuery.data");

  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col p-4 md:grid grid-cols-6 gap-4 h-screen ">
          <div className="flex  bg-[url('/images/white-box.png')]  text-white  bg-center bg-no-repeat  h-96 md:h-full mx-auto rounded-2xl bg-cover  w-full  col-span-2 row-span-2">
            <div className="flex flex-col backdrop-blur-xl text-wrap align-middle  items-left x-4 py-2 justify-end self-end   ">
              <div className="m-4 ">
                <h2 className="my-3 text-xl font-medium"> White Box Project</h2>

                <p>
                  The White-Box Project is how GENZiFy Africa intends to provide
                  period care products, educational materials, and emotional
                  support to female Gen-Zs in identified communities,
                  during menstruation
                </p>
              </div>
            </div>
          </div>

          <div className="flex  bg-[url('/images/sip-flip.png')]  text-white  bg-center bg-no-repeat  h-96 md:h-full mx-auto rounded-2xl bg-cover  w-full  col-span-2 row-span-2">
            <div className="flex flex-col backdrop-blur-xl text-wrap align-middle  items-left x-4 py-2 justify-end self-end   ">
              <div className="m-4 ">
                <h2 className="my-3 text-xl font-medium">Sip and Flip</h2>

                <p>
                  Join GENZiFy youths monthly to discuss inspiring books over
                  fine wine, fostering critical thinking and curiosity in a
                  social atmosphere
                </p>
              </div>
            </div>
          </div>

          <div className="flex  bg-[url('/images/life.png')]  text-white  bg-center bg-no-repeat  h-96 md:h-full mx-auto rounded-2xl bg-cover  w-full col-span-2 row-span-2 ">
            <div className="flex flex-col backdrop-blur-xl text-wrap align-middle  items-left x-4 py-2 justify-end self-end   ">
              <div className="m-4 ">
                <h2 className="my-3 text-xl font-medium"> Life Program</h2>

                <p>
                  We&apos;re revolutionizing mental health support for African
                  youth. Offering free, anonymous therapy sessions accessible
                  anytime, anywhere through the GENZiFy website. Join us in
                  prioritizing mental well-being for GenZs
                </p>
              </div>
            </div>
          </div>

          <div className="flex  bg-[url('/images/vet.png')]  text-white  bg-center bg-no-repeat  h-96 md:h-full mx-auto rounded-2xl bg-cover  w-full  col-span-3 row-span-1 ">
            <div className="flex flex-col backdrop-blur-xl text-wrap align-middle  items-left x-4 py-2 justify-end self-end   ">
              <div className="m-4 ">
                <h2 className="my-3 text-xl font-medium"> Vet Program</h2>

                <p>
                  Discover tailored internship opportunities for Gen Zs through
                  our VET Programs. Easily search and apply for positions across
                  diverse industries, supported by expert guidance to boost your
                  success. Start shaping your career journey today with us.
                </p>
              </div>
            </div>
          </div>

          <div className="flex  bg-[url('/images/vet.png')]  text-white  bg-center bg-no-repeat  h-96 md:h-full mx-auto rounded-2xl bg-cover  w-full  col-span-3 row-span-1">
            <div className="flex flex-col backdrop-blur-xl text-wrap align-middle  items-left x-4 py-2 justify-end self-end w-full   ">
              <div className="m-4 ">
                <h2 className="my-3 text-xl font-medium">Go pro...</h2>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
