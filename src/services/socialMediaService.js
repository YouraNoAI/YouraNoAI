import axios from 'axios';

/**
 * Service untuk fetch social media data dari API
 * API: https://affiliate-api-ecru.vercel.app/user
 */

const API_URL = process.env.REACT_APP_API_URL || 'https://affiliate-api-ecru.vercel.app/user';

// Fallback data jika API gagal
const FALLBACK_SOCIAL_MEDIA = {
  github: 'YouraNoAI',
  instagram: 'Code_Sheet',
  youtube: '@Code_Sheet',
  facebook: 'profile.php?id=100076013974278',
  tiktok: 'youranoai',
  twitter: 'YouraNoAI',
  linkedin: 'youra-no-ai'
};

/**
 * Fetch social media data dari API
 * @returns {Promise<object>} Social media object
 */
export const fetchSocialMedia = async () => {
  try {
    const response = await axios.get(API_URL, {
      timeout: 5000
    });

    const data = response.data;

    // Validasi response
    if (!data) {
      console.warn('⚠️ API returned empty data, using fallback');
      return FALLBACK_SOCIAL_MEDIA;
    }

    // Return data dengan fallback untuk field yang missing
    return {
      github: data.github || FALLBACK_SOCIAL_MEDIA.github,
      instagram: data.instagram || FALLBACK_SOCIAL_MEDIA.instagram,
      youtube: data.youtube || FALLBACK_SOCIAL_MEDIA.youtube,
      facebook: data.facebook || FALLBACK_SOCIAL_MEDIA.facebook,
      tiktok: data.tiktok || FALLBACK_SOCIAL_MEDIA.tiktok,
      twitter: data.twitter || FALLBACK_SOCIAL_MEDIA.twitter,
      linkedin: data.linkedin || FALLBACK_SOCIAL_MEDIA.linkedin,
    };
  } catch (error) {
    console.error('❌ Error fetching social media:', error.message);
    // Fallback ke data lokal jika API gagal
    return FALLBACK_SOCIAL_MEDIA;
  }
};

/**
 * Format URL sosial media berdasarkan platform
 */
export const getSocialMediaUrl = (platform, handle) => {
  const urls = {
    github: `https://github.com/${handle}`,
    instagram: `https://www.instagram.com/${handle}`,
    youtube: handle.startsWith('@') 
      ? `https://www.youtube.com/${handle}` 
      : `https://www.youtube.com/c/${handle}`,
    facebook: `https://facebook.com/${handle}`,
    tiktok: `https://www.tiktok.com/@${handle}`,
    twitter: `https://twitter.com/${handle}`,
    linkedin: `https://linkedin.com/in/${handle}`,
  };

  return urls[platform] || '#';
};

/**
 * Get icon class untuk social media platform
 */
export const getSocialMediaIcon = (platform) => {
  const iconMap = {
    github: 'FaGithub',
    instagram: 'FaInstagram',
    youtube: 'FaYoutube',
    facebook: 'FaFacebook',
    tiktok: 'FaTiktok',
    twitter: 'FaTwitter',
    linkedin: 'FaLinkedin',
  };

  return iconMap[platform] || 'FaLink';
};

const socialMediaService = {
  fetchSocialMedia,
  getSocialMediaUrl,
  getSocialMediaIcon,
  FALLBACK_SOCIAL_MEDIA,
};

export default socialMediaService;
