import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fireDb } from "../../../public/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { MdExplore } from "react-icons/md";
import Footer from "../../components/Footer/Footer";

const BlogLayout = ({
    recommended,
    children,
    catg,
    onSearch = () => { },
}) => {
    const [cList, setCList] = useState();
    useEffect(() => {
        const fetchCat = async () => {
            try {
                const catQuerySnapshot = await getDocs(
                    collection(fireDb, "catgfordozzy")
                );
                const categoriesData = catQuerySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                if (0) {
                    const sortedCategories = categoriesData.sort((a, b) => {
                        if (a.name.toLowerCase() === category.toLowerCase()) return -1;
                        if (b.name.toLowerCase() === category.toLowerCase()) return 1;
                        return 0;
                    });

                    setCList(sortedCategories);
                } else {
                    setCList(categoriesData);
                }

                // Fetch posts for the selected category
            } catch (err) {
                // setError('Failed to load data');
                console.error(err); // You can also log errors to an external service like Sentry
            } finally {
                // setLoading(false); // Hide loader after data is fetched or error occurs
            }
        };

        fetchCat();
    }, []);

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e?.target?.value);
        onSearch(e?.target?.value); // Pass the search query to CategoryPage
    };
    const settings = {
        className: "center",
        infinite: true,
        speed: 500,
        arrows: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <div>
            <div className="xl:px-14 lg:px-10 lg:border-8 lg:border-blue-100 ">
                <div className="flex flex-col lg:flex-row lg:items-center xl:gap-24 lg:gap-20 gap-2">
                    <div className="flex justify-between px-4 mxs:px-6 py-3 lg:py-4 lg:items-center border-8 border-blue-100 lg:border-none">
                        <Link href={`/blog`} className="">
                            <Image
                                className="h-10 w-40 lg:scale-105 scale-75 "
                                src={"/Dozzy123.webp"}
                                alt={"Dozzy App For Farmhouse Booking"}
                                width={1000}
                                height={1000}
                            />
                        </Link>
                        <div className="flex items-center">
                            <p className="relative left-8">
                                <CiSearch className="text-black size-5" />
                            </p>
                            <input
                                value={search}
                                type="text"
                                placeholder="Search"
                                onChange={handleSearch}
                                maxLength={10}
                                className="lg:rounded-full xl:w-56 w-32 border-none text-xs py-1 bg-gray-100 text-black  rounded-full lg:py-2 pl-10"
                            />
                        </div>
                    </div>
                    <div className="flex lg:gap-20 gap-[30px] items-center px-2 pt-1 border-t-[1p] ">
                        <Link
                            href={`/blog/explore-topics`}
                            className={`text-base py-1 lg:bg-[#556ee6] lg:rounded-3xl `}
                        >
                            <div className=' lg:flex  items-center space-x-2 '>
                                <span className='w-fit rounded-full lg:pl-1'><MdExplore className='size-6 text-black lg:text-white' /></span>
                                <span className=" hidden lg:block text-sm text-white lg:pr-2 ">Explore Topics</span>
                            </div>
                        </Link>
                        <div className='xl:w-[500px] lg:w-[250px] w-[215px] sm:w-64 mxs:w-60 text-center'>
                            <Slider
                                key={JSON.stringify(cList)}
                                {...settings}
                                className="blog-carousal"
                            >
                                {cList?.length > 0 &&
                                    cList.map((cat, i) => (
                                        <Link
                                            key={`category-${i}`}
                                            href={`/blog/${cat.name.toLowerCase()}${recommended ? "/recommended" : ""
                                                }`}
                                            className={`p-[5px] capitalize font-medium bg-[#556ee6]  text-[12px] lg:text-xs sm:text-xs  rounded-3xl lg:rounded-3xl lg:py-1.5 ${cat.name.toLowerCase() === catg?.toLowerCase() ? 'border-2 border-yellow-500 text-yellow-500' : 'text-white'}`}
                                        >
                                            {cat.name.toLowerCase()}
                                        </Link>
                                    ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <main>{children}</main>
            <div>
                <Footer forblog={true} />
            </div>
        </div>
    );
};

export default BlogLayout;
