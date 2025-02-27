import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { facultyApi, FacultyMember, uploadImage } from '../../services/googleApi';
import { Loader2, Plus, Pencil, Trash2, ImagePlus } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FacultyManager: React.FC = () => {
  const queryClient = useQueryClient();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  const [formData, setFormData] = useState<FacultyMember>({
    name: '',
    designation: '',
    department: '',
    qualification: '',
    experience: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Fetch all faculty members
  const { data: facultyMembers, isLoading, error } = useQuery({
    queryKey: ['facultyMembers'],
    queryFn: facultyApi.getAll,
  });

  // Create mutation
  const createMutation = useMutation({
    mutationFn: facultyApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['facultyMembers'] });
      setIsAddDialogOpen(false);
      resetForm();
      toast({
        title: "Faculty member added",
        description: "The faculty member has been added successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to add faculty member: ${error}`,
        variant: "destructive",
      });
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: facultyApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['facultyMembers'] });
      setIsEditDialogOpen(false);
      resetForm();
      toast({
        title: "Faculty member updated",
        description: "The faculty member has been updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update faculty member: ${error}`,
        variant: "destructive",
      });
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => facultyApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['facultyMembers'] });
      setIsDeleteDialogOpen(false);
      toast({
        title: "Faculty member deleted",
        description: "The faculty member has been deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete faculty member: ${error}`,
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setFormData({
      name: '',
      designation: '',
      department: '',
      qualification: '',
      experience: '',
    });
    setImageFile(null);
    setSelectedFaculty(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleAddFaculty = async () => {
    // First, upload the image if one is selected
    if (imageFile) {
      try {
        setUploadingImage(true);
        const imageUrl = await uploadImage(imageFile);
        setUploadingImage(false);
        createMutation.mutate({ ...formData, image_url: imageUrl });
      } catch (error) {
        setUploadingImage(false);
        toast({
          title: "Error",
          description: "Failed to upload image",
          variant: "destructive",
        });
      }
    } else {
      // No image to upload, just create the faculty member
      createMutation.mutate(formData);
    }
  };

  const handleEditFaculty = () => {
    if (!selectedFaculty || !selectedFaculty.id) return;

    const updatedFaculty = { ...formData, id: selectedFaculty.id };

    // First, upload the image if one is selected
    if (imageFile) {
      setUploadingImage(true);
      uploadImage(imageFile)
        .then((imageUrl) => {
          setUploadingImage(false);
          updateMutation.mutate({ ...updatedFaculty, image_url: imageUrl });
        })
        .catch((error) => {
          setUploadingImage(false);
          toast({
            title: "Error",
            description: "Failed to upload image",
            variant: "destructive",
          });
        });
    } else {
      // No new image, keep the existing one
      updateMutation.mutate(updatedFaculty);
    }
  };

  const handleDeleteFaculty = () => {
    if (selectedFaculty && selectedFaculty.id) {
      deleteMutation.mutate(selectedFaculty.id);
    }
  };

  const openEditDialog = (faculty: FacultyMember) => {
    setSelectedFaculty(faculty);
    setFormData(faculty);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (faculty: FacultyMember) => {
    setSelectedFaculty(faculty);
    setIsDeleteDialogOpen(true);
  };

  if (isLoading) {
    return <div className="flex justify-center py-8"><Loader2 className="animate-spin h-8 w-8" /></div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading faculty data: {error.toString()}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Faculty Members</h3>
        <Button onClick={() => setIsAddDialogOpen(true)} className="flex items-center gap-2">
          <Plus size={16} />
          Add Faculty
        </Button>
      </div>

      {/* Faculty List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facultyMembers?.map((faculty) => (
          <Card key={faculty.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4">
                <div className="mb-3 flex items-center gap-3">
                  {faculty.image_url ? (
                    <img
                      src={faculty.image_url}
                      alt={faculty.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-xl">
                        {faculty.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold">{faculty.name}</h4>
                    <p className="text-sm text-muted-foreground">{faculty.designation}</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Department:</span> {faculty.department}</p>
                  <p><span className="font-medium">Qualification:</span> {faculty.qualification}</p>
                  <p><span className="font-medium">Experience:</span> {faculty.experience}</p>
                </div>
              </div>
              <div className="flex border-t">
                <Button
                  variant="ghost"
                  className="flex-1 rounded-none text-blue-600 hover:text-blue-800 py-3"
                  onClick={() => openEditDialog(faculty)}
                >
                  <Pencil size={16} className="mr-2" />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  className="flex-1 rounded-none text-red-600 hover:text-red-800 py-3"
                  onClick={() => openDeleteDialog(faculty)}
                >
                  <Trash2 size={16} className="mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Faculty Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Faculty Member</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="designation" className="text-sm font-medium">Designation</label>
              <Input
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="e.g. Assistant Professor"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="department" className="text-sm font-medium">Department</label>
              <Input
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder="e.g. Computer Science"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="qualification" className="text-sm font-medium">Qualification</label>
              <Input
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                placeholder="e.g. Ph.D in Computer Science"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">Experience</label>
              <Input
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="e.g. 5 years"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="profileImage" className="text-sm font-medium">Profile Image</label>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('profileImage')?.click()}
                  className="flex items-center gap-2"
                >
                  <ImagePlus size={16} />
                  {imageFile ? 'Change Image' : 'Upload Image'}
                </Button>
                {imageFile && (
                  <span className="text-sm text-muted-foreground">{imageFile.name}</span>
                )}
              </div>
              <input
                id="profileImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsAddDialogOpen(false);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddFaculty}
              disabled={createMutation.isPending || uploadingImage}
            >
              {(createMutation.isPending || uploadingImage) ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...</>
              ) : (
                'Save'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Faculty Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Faculty Member</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="edit-name" className="text-sm font-medium">Name</label>
              <Input
                id="edit-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-designation" className="text-sm font-medium">Designation</label>
              <Input
                id="edit-designation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="e.g. Assistant Professor"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-department" className="text-sm font-medium">Department</label>
              <Input
                id="edit-department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                placeholder="e.g. Computer Science"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-qualification" className="text-sm font-medium">Qualification</label>
              <Input
                id="edit-qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                placeholder="e.g. Ph.D in Computer Science"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-experience" className="text-sm font-medium">Experience</label>
              <Input
                id="edit-experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="e.g. 5 years"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-profileImage" className="text-sm font-medium">Profile Image</label>
              {formData.image_url && (
                <div className="mb-2">
                  <img
                    src={formData.image_url}
                    alt="Current profile"
                    className="h-16 w-16 object-cover rounded-md"
                  />
                </div>
              )}
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('edit-profileImage')?.click()}
                  className="flex items-center gap-2"
                >
                  <ImagePlus size={16} />
                  {imageFile ? 'Change Image' : 'Upload New Image'}
                </Button>
                {imageFile && (
                  <span className="text-sm text-muted-foreground">{imageFile.name}</span>
                )}
              </div>
              <input
                id="edit-profileImage"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsEditDialogOpen(false);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleEditFaculty}
              disabled={updateMutation.isPending || uploadingImage}
            >
              {(updateMutation.isPending || uploadingImage) ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating...</>
              ) : (
                'Update'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              faculty member from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteFaculty}
              className="bg-red-600 text-white hover:bg-red-700"
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deleting...</>
              ) : (
                'Delete'
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FacultyManager;
