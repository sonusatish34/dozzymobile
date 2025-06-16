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

function escapeXML(str = '') {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
}

function generateSiteMap(FHList, cars) {
  const staticUrls = `
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
    <url>
      <loc>https://www.dozzy.com/privacy-policy</loc>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
  `;

  const FHUrls = FHList?.map(item => {
    const slug = escapeXML(
      item.property_name
        ?.toLowerCase()
        .replace(/_/g, ' ')
        .replace(/\d+/g, ' ')
        .trim()
        .replace(/\s+/g, '-')
    );
    return `
      <url>
        <loc>https://www.dozzy.com/${slug}</loc>
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
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>
    `;
  }).join('\n');

  const locationUrls = [
    'ameerpet', 'ecil', 'gachibowli', 'kukatpally', 'lb-nagar',
    'secunderabad', 'shadnagar', 'uppal'
  ].map(loc => `
    <url>
      <loc>https://www.dozzy.com/farmhouse-rentals-in-${loc}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
  `).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${FHUrls}
${locationUrls}
${blogUrls}
</urlset>`;
}

export async function getServerSideProps({ res, req }) {
  const cars = await fetchCatAndPosts();

  const response = await fetch(
    'https://api.dozzy.com/customer/approved_properties?lat=17&long=78&program_id=1&property_capacity=1000'
  );
  const data = await response.json();
  const FHList = data?.data?.results || [];

  const sitemap = generateSiteMap(FHList, cars);

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
