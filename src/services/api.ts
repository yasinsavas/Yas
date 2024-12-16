// API endpoint sabitleri
export const API_ENDPOINTS = {
  CERTIFICATES: '/api/certificates',
};

// API istekleri için yardımcı fonksiyonlar
export async function saveCertificate(formData: FormData) {
  try {
    const response = await fetch(API_ENDPOINTS.CERTIFICATES, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Sertifika kaydedilemedi');
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}