function AccountPage() {
    return (
      <div className="p-8">
        <h1 className="text-xl font-bold mb-4">Account Settings</h1>
  
        <div className="flex items-center mb-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_yXmE-ysvqjpDwOsUK5rdEPBFWPqj_a0rg&s" alt="Profile" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h2 className="text-lg font-semibold">Marry Doe</h2>
            <p className="text-gray-500">marry@gmail.com</p>
          </div>
        </div>
  
        <p className="text-gray-600">
          Welcome to your account settings page. Here you can update your profile information, change your password, and manage your account preferences.
        </p>
      </div>
    );
  }
  
  export default AccountPage;
  