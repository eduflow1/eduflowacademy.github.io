// Shared helpers for the online-courses module (catalog, checkout,
// student dashboard/player, admin CMS). Load AFTER eduflow-auth.js.

const EDUFLOW_COURSE_LEVELS = ['Debutant', 'Intermediaire', 'Avance', 'Tous niveaux'];

function eduflowFormatPrice(price, currency){
  const n = Number(price);
  if (!n) return 'Gratuit';
  return n.toLocaleString('fr-FR', { maximumFractionDigits: 2 }) + ' ' + (currency || 'MAD');
}

// Public cover images live in the public 'course-covers' bucket.
function eduflowCourseCoverUrl(coverPath){
  if (!coverPath) return null;
  const { data } = eduflowClient.storage.from('course-covers').getPublicUrl(coverPath);
  return data ? data.publicUrl : null;
}

// Videos/materials live in private buckets — always fetch a fresh
// short-lived signed URL right before playing/downloading, gated by
// the storage RLS policies (enrollment, instructor, admin, or preview).
async function eduflowSignedUrl(bucket, path, expiresIn){
  if (!path) return null;
  const { data, error } = await eduflowClient.storage.from(bucket).createSignedUrl(path, expiresIn || 3600);
  if (error){
    console.error('eduflowSignedUrl error:', error.message);
    return null;
  }
  return data.signedUrl;
}

function eduflowCourseStatusLabel(status){
  return { draft: 'Brouillon', published: 'Publiee', archived: 'Archivee' }[status] || status;
}

// Percentage of a course's lessons a student has completed (0-100).
function eduflowProgressPct(totalLessons, completedLessons){
  if (!totalLessons) return 0;
  return Math.round((completedLessons / totalLessons) * 100);
}

function eduflowSlugify(text){
  return (text || '')
    .toString()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
