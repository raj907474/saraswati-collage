
// Replace with your actual Google Apps Script Web App URL
const API_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';

export interface FacultyMember {
  id?: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  image_url?: string;
}

export interface ManagementMember {
  id?: string;
  name: string;
  position: string;
  bio: string;
  image_url?: string;
}

// Generic fetch function with error handling
async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      mode: 'cors',
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status === 'error') {
      throw new Error(data.message || 'Unknown API error');
    }
    
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Faculty API calls
export const facultyApi = {
  getAll: async (): Promise<FacultyMember[]> => {
    const response = await fetchApi<{status: string, data: FacultyMember[]}>(`?action=getAll&type=faculty`);
    return response.data;
  },
  
  getById: async (id: string): Promise<FacultyMember> => {
    const response = await fetchApi<{status: string, data: FacultyMember}>(`?action=getById&type=faculty&id=${id}`);
    return response.data;
  },
  
  create: async (faculty: FacultyMember): Promise<FacultyMember> => {
    const response = await fetchApi<{status: string, data: FacultyMember}>(`?action=create&type=faculty`, {
      method: 'POST',
      body: JSON.stringify(faculty),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },
  
  update: async (faculty: FacultyMember): Promise<FacultyMember> => {
    const response = await fetchApi<{status: string, data: FacultyMember}>(`?action=update&type=faculty`, {
      method: 'POST',
      body: JSON.stringify(faculty),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },
  
  delete: async (id: string): Promise<void> => {
    await fetchApi<{status: string, message: string}>(`?action=delete&type=faculty&id=${id}`);
  }
};

// Management API calls
export const managementApi = {
  getAll: async (): Promise<ManagementMember[]> => {
    const response = await fetchApi<{status: string, data: ManagementMember[]}>(`?action=getAll&type=management`);
    return response.data;
  },
  
  getById: async (id: string): Promise<ManagementMember> => {
    const response = await fetchApi<{status: string, data: ManagementMember}>(`?action=getById&type=management&id=${id}`);
    return response.data;
  },
  
  create: async (management: ManagementMember): Promise<ManagementMember> => {
    const response = await fetchApi<{status: string, data: ManagementMember}>(`?action=create&type=management`, {
      method: 'POST',
      body: JSON.stringify(management),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },
  
  update: async (management: ManagementMember): Promise<ManagementMember> => {
    const response = await fetchApi<{status: string, data: ManagementMember}>(`?action=update&type=management`, {
      method: 'POST',
      body: JSON.stringify(management),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  },
  
  delete: async (id: string): Promise<void> => {
    await fetchApi<{status: string, message: string}>(`?action=delete&type=management&id=${id}`);
  }
};

// Image upload API
export const uploadImage = async (imageFile: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = async (event) => {
      try {
        if (!event.target || !event.target.result) {
          throw new Error('Failed to read file');
        }
        
        const base64Data = event.target.result.toString();
        
        const response = await fetchApi<{status: string, imageUrl: string}>(`?action=uploadImage`, {
          method: 'POST',
          body: JSON.stringify({
            image: base64Data,
            fileName: imageFile.name,
            mimeType: imageFile.type
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        resolve(response.imageUrl);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsDataURL(imageFile);
  });
};
