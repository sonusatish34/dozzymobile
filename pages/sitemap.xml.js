// pages/sitemap.xml.js

import { fireDb } from '@/public/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

const fetchCatAndPosts = async () => {
  try {
    const postsQueryNew = query(
      collection(fireDb, 'blogPost'),
      where('blog_state', '==', 'active'),
      where('blogfor', '==', 'Dozzy')
    );
    const postsQuerySnapshotNew = await getDocs(postsQueryNew);
    return postsQuerySnapshotNew.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error(err);
    return [];
  }
};
const fetchCatAndPostsBng = async () => {
  try {
    const postsQueryNew = query(
      collection(fireDb, 'blogPost'),
      where('blog_state', '==', 'active'),
      where('blogfor', '==', 'DozzyBng')
    );
    const postsQuerySnapshotNew = await getDocs(postsQueryNew);
    return postsQuerySnapshotNew.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error(err);
    return [];
  }
};

function escapeXML(str = '') {
  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}


function generateSiteMap(FHList, FHList2, cars, cars2) {
  const farmhouseKeywords = [
    "cheap-farmhouse-for-rent-in-hyderabad", "farm-stay", "hillview-farmstay", "farm-cottages",
    "farmhouse-in-hyderabad", "farm-accommodation", "farmhouse-with-pool",
    "cheap-farm-house-for-rent", "farmhouse-for-rent-in-hyderabad", "luxury-farm-stay",
    "family-farm-stay", "pet-friendly-farm-stays", "farm-stay-hyderabad",
    "farm-stays-around-hyderabad", "farm-house-swimming-pool", "farmhouse-for-lease",
    "farmhouse-for-daily-rent", "rural-farm-houses-for-rent", "3-bedroom-farm-house-for-rent",
    "farm-stays-in-hyderabad", "farm-stays-near-me", "farm-house-for-rent-in-hyderabad",
    "farm-house-for-parties", "modern-farmhouse-pool", "farm-house-to-rent-near-me",
    "2-bedroom-farm-house-for-rent", "farm-house-near-me-for-rent", "farm-house-for-hire",
    "farm-house-for-one-day-rent", "farm-house-for-rent-for-a-day",
    "farmhouse-with-swimming-pool-near-me", "farmhouse-for-couples",
    "farmhouse-with-swimming-pool-for-rent", "farm-house-for-daily-rent",
    "farm-house-for-event", "swimming-pool-farm-house", "pool-farm-house",
    "entire-farm-house-for-rent", "best-farmhouse-with-pool", "farmstays-in-hyderabad",
    "farmhouse-with-big-swimming-pool", "farmstays-near-hyderabad",
    "small-farmhouse-with-pool", "small-farm-house-with-swimming-pool",
    "farmhouse-vacation-rental-near-me", "best-private-places-for-lovers-in-hyderabad",
    "farm-house-for-functions", "near-farm-house-with-swimming-pool",
    "farmhouse-for-night-stay-in-hyderabad", "private-farm-house-for-rent-in-hyderabad",
    "farm-house-for-haldi", "farm-house-for-haldi-function", "hideout-farmstay-hyderabad-price"
  ];

  const staticUrls = `
    <url>
      <loc>https://www.dozzy.com</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1</priority>
    </url>
    <url>
      <loc>https://www.dozzy.com/blog</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://www.dozzy.com/bangalore</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://www.dozzy.com/about</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://www.dozzy.com/contact-us</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://www.dozzy.com/privacy-policy</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    
  `;
  const BngstaticUrls = `
     <url>
      <loc>https://www.dozzy.com/bangalore/about</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
     <url>
      <loc>https://www.dozzy.com/bangalore/contact-us</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://www.dozzy.com/bangalore/blog</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://www.dozzy.com/bangalore/privacy-policy</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `;

  // Generate farmhouse URLs with random keywords
  const FHUrls = FHList?.map(item => {
    const keyword = farmhouseKeywords[Math.floor(Math.random() * farmhouseKeywords.length)];


    return `
      <url>
        <loc>https://www.dozzy.com/${keyword}-${item?.property_id}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `;
  }).join('\n');

  const FHUrlsBng = FHList2?.map(item => {

    return `
      <url>
        <loc>https://www.dozzy.com/bangalore/famhouse-for-rent-in-bangalore-${item?.property_id}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `;
  }).join('\n');

  const blogUrls = cars?.map(item => {
    return `
      <url>
        <loc>https://www.dozzy.com/blog/posts/${escapeXML(item?.slug)}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
    `;
  }).join('\n');
  const blogUrlsBng = cars2?.map(item => {
    return `
      <url>
        <loc>https://www.dozzy.com/bangalore/blog/posts/${escapeXML(item?.slug)}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
    `;
  }).join('\n');

  const locationUrls = [
    'ameerpet', 'ecil', 'lb-nagar', 'uppal', 'ibrahimpatan', 'shankarpally', 'keesara', 'manneguda', 'moinabad',
    'gachibowli', 'secunderabad', 'rangareddy', 'chevella', 'ghatkesar', 'shadnagar', 'gandi-maisamma', 'vikarabad',
    'kukatpally', 'shamshabad', 'medchal', 'shamirpet', 'pedda-amberpet', 'choutuppal', 'dammaiguda'
  ].map(loc => `
  <url>
    <loc>https://www.dozzy.com/farmhouse-rentals-in-and-around-${loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`).join('\n');
  const bangaloreLocationUrls = [
    'achalu-forest', 'alakabelalu', 'bande-kodigehalli', 'dasenahalli', 'doddamuddenahalli',
    'gejjala-gere', 'kadukothnahally', 'kadusonnapanahalli', 'karahalli-amanikere',
    'keeranagere', 'mathikere', 'melahalli', 'mugenahalli', 'nagenahalli',
    'nidamakanahalli', 'rajanukunte', 'ramanagara', 'tharalu', 'tumakuru', 'bangalore'
  ].map(loc => `
  <url>
    <loc>https://www.dozzy.com/bangalore/farmhouse-rentals-in-and-around-${loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${locationUrls}
${FHUrls}
${blogUrls}
${BngstaticUrls}
${FHUrlsBng}
${bangaloreLocationUrls}
${blogUrlsBng}
</urlset>`;
}


export async function getServerSideProps({ res, req }) {
  const cars = await fetchCatAndPosts();
  const cars2 = await fetchCatAndPostsBng();

  const response = await fetch(
    'https://api.dozzy.com/site/properties?property_region=Hyderabad'
  );
  const data = await response.json();
  const FHList = data?.data || [];
  const response2 = await fetch(
    'https://api.dozzy.com/site/properties?property_region=Bengaluru'
  );
  const data2 = await response2.json();
  const FHList2 = data2?.data || [];

  const sitemap = generateSiteMap(FHList, FHList2, cars, cars2);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  // This component will not render anything on the client side
  return null;
}
