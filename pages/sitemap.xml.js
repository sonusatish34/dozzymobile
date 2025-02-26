
const EXTERNAL_DATA_URL = 'https://api.longdrivecarz.in/site/cars-info?location=hyderabad';
import { fireDb } from '@/public/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
const fetchCatAndPosts = async () => {

    try {
        const postsQueryNew = query(collection(fireDb, "blogPost"),
            where("blog_state", "==", "active"),
            where("blogfor", "==", "LDC")
        );
        const postsQuerySnapshotNew = await getDocs(postsQueryNew);
        const postsnew = postsQuerySnapshotNew.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return postsnew
    } catch (err) {
        console.error(err);
    } finally {

    }
};
function generateSiteMap(FHList, cars) {
    return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.dozzy.com</loc>
            <changefreq>monthly</changefreq>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://www.dozzy.com/blog</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
        

       ${FHList?.map((item) => {
        return `

        <url>
            <loc>${`https://www.dozzy.com/${item?.property_name.replaceAll(' ', '-').toLowerCase()}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.9</priority>
        </url>
       `;
    })}
    
            
            ${cars?.map((item) => {
        return `
        
                <url>
                    <loc>${`https://www.dozzy.com/blog/posts/${item?.slug}`}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>weekly</changefreq>
                    <priority>0.9</priority>
                </url>
               `;
    })
            .join('')}
     </urlset>
   `;
}

function SiteMap() {
    // This will be handled by getServerSideProps, no need for content in the component itself
}

export async function getServerSideProps({ res, req }) {
    // Fetch the car data
    const cars = await fetchCatAndPosts(); // Fetching posts using the fixed function

    const host = req.headers.host;

    // const response = await fetch(EXTERNAL_DATA_URL);
    const response = await fetch("https://api.dozzy.com/customer/approved_properties?lat=0.0&long=0.0&program_id=1&property_capacity=1000");
    const items = await response.json();
    // const cars = ['book-a-rental-car-in-hyderabad','sedan-cars-for-rent-in-hyderabad','cars-rental-services-in-hyderabad'];
    const FHList = items?.data?.results;

    const sitemap = generateSiteMap(FHList, cars)

    // Generate the XML sitemap

    // Set the response header for XML
    res.setHeader('Content-Type', 'text/xml');

    // Write the generated sitemap to the response
    res.write(sitemap);
    res.end();

    return {
        props: {}, // No page props are needed for the sitemap
    };
}

export default SiteMap;


