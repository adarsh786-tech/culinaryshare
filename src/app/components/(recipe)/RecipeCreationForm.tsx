"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RecipeFormImage from "@/assets/recipe_form_mockup.jpg";

const RecipeCreationForm = () => {
  const router = useRouter();
  return (
    // <div className="min-h-screen flex  items-center justify-center">
    //   <div className="from-slate-700 via-slate-950 to-slate-700 p-8 w-96 rounded-lg shadow-xl shadow-white">
    //     <div className="flex flex-row gap-2 items-center justify-between">
    //       <h2 className="text-2xl font-semibold font-serif text-white text-center mb-6">
    //         UPLOAD PROJECT
    //       </h2>
    //       <button
    //         onClick={() => {}}
    //         className="flex justify-center items-center rounded-lg shadow-sm shadow-purple-800"
    //       >
    //         {/* <Image
    //           src={null}
    //           alt="Upload Data"
    //           priority={false}
    //           className="w-[40px] h-[40px]"
    //         /> */}
    //       </button>
    //     </div>
    //     <form>
    //       <div className="mb-6">
    //         <label
    //           htmlFor="projectName"
    //           className="block font-light mb-2 text-white"
    //         >
    //           Project Name
    //         </label>
    //         <input
    //           type="text"
    //           id="projectName"
    //           name="projectName"
    //           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
    //           placeholder="Example: `ThunderGPT - 2.O`"
    //           required
    //           value="5"
    //           //   onChange={(e) =>
    //           //     setProject({ ...project, projectName: e.target.value })
    //           //   }
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <label htmlFor="projectDetails" className="block mb-2 text-white">
    //           Description
    //         </label>
    //         <textarea
    //           id="projectDetails"
    //           name="projectDetails"
    //           className="w-full px-4 py-2 border rounded-lg resize-none h-20 focus:outline-none focus:ring focus:border-blue-300"
    //           placeholder="Example: GPT Powered Thunder Project..."
    //           value="5"
    //           //   onChange={(e) =>
    //           //     setProject({ ...project, projectDescription: e.target.value })
    //           //   }
    //         ></textarea>
    //       </div>
    //       <div className="mb-6">
    //         <label htmlFor="projectLink" className="block mb-2 text-white">
    //           Project Link
    //         </label>
    //         <input
    //           type="url"
    //           id="projectLink"
    //           name="projectLink"
    //           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
    //           placeholder="https://example.com"
    //           required={true}
    //           value="5"
    //           //   onChange={(e) =>
    //           //     setProject({ ...project, projectURL: e.target.value })
    //           //   }
    //         />
    //       </div>

    //       <div className="mb-6">
    //         <label htmlFor="projectStack" className="block mb-2 text-white">
    //           Tech Stack (, separated)
    //         </label>
    //         <input
    //           type="text"
    //           id="projectStack"
    //           name="projectStack"
    //           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
    //           placeholder="Example: `React, Tailwind`"
    //           required={true}
    //           value="5"
    //           //   onChange={(e) =>
    //           //     setProject({ ...project, projectStack: e.target.value })
    //           //   }
    //         />
    //       </div>

    //       <div className="flex flex-row justify-center items-center p-2 gap-10">
    //         <button
    //           onClick={() => {}}
    //           className="flex justify-center items-center rounded-lg shadow-sm shadow-white"
    //         >
    //           {/* <Image
    //             src={UploadContent}
    //             alt="Upload Data"
    //             className="w-[40px] h-[40px]"
    //           /> */}
    //         </button>
    //         <button
    //           onClick={() => {}}
    //           className="flex justify-center items-center rounded-lg shadow-sm shadow-white"
    //         >
    //           {/* <Image
    //             src={ProfilePageRouteImage}
    //             alt="Upload Data"
    //             className="w-[40px] h-[40px]"
    //           /> */}
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="relative w-full bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            People who care about your growth
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            modi blanditiis dolores quasi eaque explicabo!
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div>
              <input
                className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your email"
                id="email"
              ></input>
              <p className="mt-2 text-sm text-gray-500">
                We care about your privacy
              </p>
            </div>
            <div>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 m-5">
          <Image
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9]"
            src={RecipeFormImage}
            fill
            alt="Image by pch.vector on Freepik"
            onClick={() =>
              router.push(
                "https://www.freepik.com/free-vector/tiny-female-chef-cooking-vegan-meal-using-recipe-kitchen-cook-making-dish-from-restaurant-menu-flat-vector-illustration-healthy-food-diet-culinary-nutrition-concept-website-design_22344050.htm#fromView=search&page=1&position=5&uuid=fe56427d-157f-4904-b829-709d6ba8576b"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeCreationForm;
