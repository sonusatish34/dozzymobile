
const EXTERNAL_DATA_URL = 'https://api.longdrivecarz.in/site/cars-info?location=hyderabad';

function generateSiteMap(cars) {
    return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://www.longdrivecars.com/hyderabad</loc>
            <changefreq>monthly</changefreq>
            <priority>1</priority>
        </url>
        <url>
            <loc>https://www.longdrivecars.com/hyderabad/about</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
        <url>
            <loc>https://www.longdrivecars.com/hyderabad/contact.html</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
        <url>
            <loc>https://www.longdrivecars.com/hyderabad/get-near-by-cars</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
        </url>
        <url>
            <loc>https://www.longdrivecars.com/hyderabad/explore-self-drive-cars</loc>
            <changefreq>monthly</changefreq>
            <priority>0.9</priority>
            <lastmod>2025-01-28T06:16:03+00:00</lastmod>

        </url>
        

       ${cars?.map((item) => {
        return `

        <url>
            <loc>${`https://www.longdrivecars.com/hyderabad/car-rental/${item?.maker_model.replaceAll(' ','-').toLowerCase()}`}</loc>
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
    const host = req.headers.host;

    const response = await fetch(EXTERNAL_DATA_URL);
    const items = await response.json();
    // const cars = ['book-a-rental-car-in-hyderabad','sedan-cars-for-rent-in-hyderabad','cars-rental-services-in-hyderabad'];
    const cars = items?.data?.results;
    
      const  sitemap = generateSiteMap(cars)
    
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


