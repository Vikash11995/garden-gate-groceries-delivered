
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and preferences
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <p className="text-center text-gray-500">
              Please log in to view your profile
            </p>
            <div className="mt-4 flex justify-center">
              <Button>Log in</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
