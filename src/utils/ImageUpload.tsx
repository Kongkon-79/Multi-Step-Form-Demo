export const imageUpload = async (image: File): Promise<string> => {
    // Create FormData and append the image
    const formData = new FormData();
    formData.append("image", image);
  
    // Image upload URL
    const url = `https://api.imgbb.com/1/upload?key=dab8503cf9ae232e69b024f863fa9423`;
  
    try {
      // Make the POST request
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to upload image");
      }
  
      // Parse the response JSON
      const result = await response.json();
      const imageUrl = result?.data?.display_url;
  
      if (!imageUrl) {
        throw new Error("Image URL not found in the response");
      }
  
      return imageUrl;
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  };
  

