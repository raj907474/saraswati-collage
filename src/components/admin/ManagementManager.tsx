import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { managementApi, ManagementMember, uploadImage } from '../../services/googleApi';
import { Loader2, Plus, Pencil, Trash2, ImagePlus } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ManagementManager: React.FC = () => {
  const queryClient = useQueryClient();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<ManagementMember | null>(null);
  const [formData, setFormData] = useState<ManagementMember>({
    name: '',
    position: '',
    bio: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Fetch all management members
  const { data: managementMembers, isLoading, error } = useQuery({
    queryKey: ['managementMembers'],
    queryFn: managementApi.getAll,
  });

  // Create mutation
  const createMutation = useMutation({
    mutationFn: managementApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['managementMembers'] });
      setIsAddDialogOpen(false);
      resetForm();
      toast({
        title: "Management member added",
        description: "The management member has been added successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to add management member: ${error}`,
        variant: "destructive",
      });
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: managementApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['managementMembers'] });
      setIsEditDialogOpen(false);
      resetForm();
      toast({
        title: "Management member updated",
        description: "The management member has been updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update management member: ${error}`,
        variant: "destructive",
      });
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => managementApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['managementMembers'] });
      setIsDeleteDialogOpen(false);
      toast({
        title: "Management member deleted",
        description: "The management member has been deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete management member: ${error}`,
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setFormData({
      name: '',
      position: '',
      bio: '',
    });
    setImageFile(null);
    setSelectedMember(null);
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

  const handleAddMember = async () => {
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
      // No image to upload, just create the management member
      createMutation.mutate(formData);
    }
  };

  const handleEditMember = () => {
    if (!selectedMember || !selectedMember.id) return;

    const updatedMember = { ...formData, id: selectedMember.id };

    // First, upload the image if one is selected
    if (imageFile) {
      setUploadingImage(true);
      uploadImage(imageFile)
        .then((imageUrl) => {
          setUploadingImage(false);
          updateMutation.mutate({ ...updatedMember, image_url: imageUrl });
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
      updateMutation.mutate(updatedMember);
    }
  };

  const handleDeleteMember = () => {
    if (selectedMember && selectedMember.id) {
      deleteMutation.mutate(selectedMember.id);
    }
  };

  const openEditDialog = (member: ManagementMember) => {
    setSelectedMember(member);
    setFormData(member);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (member: ManagementMember) => {
    setSelectedMember(member);
    setIsDeleteDialogOpen(true);
  };

  if (isLoading) {
    return <div className="flex justify-center py-8"><Loader2 className="animate-spin h-8 w-8" /></div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error loading management data: {error.toString()}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Management Team</h3>
        <Button onClick={() => setIsAddDialogOpen(true)} className="flex items-center gap-2">
          <Plus size={16} />
          Add Member
        </Button>
      </div>

      {/* Management List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {managementMembers?.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4">
                <div className="mb-3 flex items-center gap-3">
                  {member.image_url ? (
                    <img
                      src={member.image_url}
                      alt={member.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-xl">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.position}</p>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="line-clamp-3">{member.bio}</p>
                </div>
              </div>
              <div className="flex border-t">
                <Button
                  variant="ghost"
                  className="flex-1 rounded-none text-blue-600 hover:text-blue-800 py-3"
                  onClick={() => openEditDialog(member)}
                >
                  <Pencil size={16} className="mr-2" />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  className="flex-1 rounded-none text-red-600 hover:text-red-800 py-3"
                  onClick={() => openDeleteDialog(member)}
                >
                  <Trash2 size={16} className="mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Member Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Management Member</DialogTitle>
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
              <label htmlFor="position" className="text-sm font-medium">Position</label>
              <Input
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="e.g. Chairman"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="bio" className="text-sm font-medium">Bio</label>
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Brief biography"
                rows={4}
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
              onClick={handleAddMember}
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

      {/* Edit Member Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Management Member</DialogTitle>
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
              <label htmlFor="edit-position" className="text-sm font-medium">Position</label>
              <Input
                id="edit-position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="e.g. Chairman"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="edit-bio" className="text-sm font-medium">Bio</label>
              <Textarea
                id="edit-bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Brief biography"
                rows={4}
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
              onClick={handleEditMember}
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
              management member from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteMember}
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

export default ManagementManager;
