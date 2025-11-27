import React, {useState} from 'react';

interface AdminUser {
  id: string;
  email: string;
  password: string;
  permissions: {
    read: boolean;
    write: boolean;
    remove: boolean;
  };
  isMaster: boolean;
  emailVerified?: boolean;
}

export const AdminManagement = (): React.JSX.Element => {
  const [admins, setAdmins] = useState<AdminUser[]>([
    {
      id: 'admin_1',
      email: 'master@abvrcc.com',
      password: '••••••••',
      permissions: {read: true, write: true, remove: true},
      isMaster: true,
    },
    {
      id: 'admin_2',
      email: 'doctor1@abvrcc.com',
      password: '123456',
      permissions: {read: true, write: true, remove: false},
      isMaster: false,
      emailVerified: true,
    },
    {
      id: 'admin_3',
      email: 'nurse1@abvrcc.com',
      password: '1234567',
      permissions: {read: true, write: false, remove: false},
      isMaster: false,
      emailVerified: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAdmin, setNewAdmin] = useState<AdminUser>({
    id: '',
    email: '',
    password: '',
    permissions: {read: false, write: false, remove: false},
    isMaster: false,
  });
  const [showModalPassword, setShowModalPassword] = useState(false);
  const [showExistingPasswords, setShowExistingPasswords] = useState<{
    [key: string]: boolean;
  }>({});

  const handleAddNewAdmin = () => {
    setNewAdmin({
      id: `temp_${Date.now()}`,
      email: '',
      password: '',
      permissions: {read: false, write: false, remove: false},
      isMaster: false,
    });
    setShowModalPassword(false);
    setIsModalOpen(true);
  };

  const handleNewAdminChange = (field: 'email' | 'password', value: string) => {
    setNewAdmin({...newAdmin, [field]: value});
  };

  const handleNewAdminPermissionToggle = (
    permission: 'read' | 'write' | 'remove',
  ) => {
    setNewAdmin({
      ...newAdmin,
      permissions: {
        ...newAdmin.permissions,
        [permission]: !newAdmin.permissions[permission],
      },
    });
  };

  const handleSaveNewAdmin = () => {
    console.log('Saving new admin:', newAdmin);
    setAdmins([...admins, {...newAdmin, id: `admin_${Date.now()}`}]);
    setIsModalOpen(false);
  };

  const handleCancelNewAdmin = () => {
    setIsModalOpen(false);
  };

  const toggleExistingPasswordVisibility = (id: string) => {
    setShowExistingPasswords({
      ...showExistingPasswords,
      [id]: !showExistingPasswords[id],
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 rounded-2xl bg-white p-6 shadow-lg md:p-8">
          <h1 className="text-center text-3xl font-bold text-gray-800 md:text-4xl">
            Admin Management
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Manage admin access and permissions
          </p>
        </header>

        <div className="space-y-6">
          {/* Existing Admins */}
          <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-blue-600">
                Current Admins
              </h2>
              <button
                onClick={handleAddNewAdmin}
                className="xxxs:px-5 xxxs:py-2.5 flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 md:text-base">
                <i className="fa-solid fa-plus"></i>
                Add Admin
              </button>
            </div>

            <div className="space-y-4">
              {admins.map(admin => (
                <div
                  key={admin.id}
                  className="xxxs:p-5 rounded-lg border border-gray-200 bg-gray-50 p-4 md:p-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        value={admin.email}
                        disabled={admin.isMaster}
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={
                            showExistingPasswords[admin.id]
                              ? 'text'
                              : 'password'
                          }
                          value={admin.password}
                          disabled={admin.isMaster}
                          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            toggleExistingPasswordVisibility(admin.id)
                          }
                          disabled={admin.isMaster}
                          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 transition-colors hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-40">
                          <i
                            className={`fa-solid ${showExistingPasswords[admin.id] ? 'fa-eye' : 'fa-eye-slash'} text-sm`}></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {admin.isMaster && (
                      <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                        Master Admin
                      </span>
                    )}
                    {!admin.isMaster && admin.emailVerified === true && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        <i className="fa-solid fa-check-circle"></i>
                        Verified Email
                      </span>
                    )}
                    {!admin.isMaster && admin.emailVerified === false && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                        <i className="fa-solid fa-hourglass-half"></i>
                        Awaiting Verification
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <label className="mb-3 block text-sm font-semibold text-gray-700">
                      Permissions
                    </label>
                    {admin.isMaster ? (
                      <p className="text-sm font-bold text-gray-800">
                        Full Access (All Permissions)
                      </p>
                    ) : (
                      <div className="flex flex-wrap gap-3">
                        <button
                          className={`xxxs:px-4 xxxs:py-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all hover:opacity-80 active:scale-95 md:text-base ${
                            admin.permissions.read
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                          <i className="fa-solid fa-eye mr-2"></i>
                          Read
                        </button>
                        <button
                          className={`xxxs:px-4 xxxs:py-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all hover:opacity-80 active:scale-95 md:text-base ${
                            admin.permissions.write
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                          <i className="fa-solid fa-pen mr-2"></i>
                          Write
                        </button>
                        <button
                          className={`xxxs:px-4 xxxs:py-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all hover:opacity-80 active:scale-95 md:text-base ${'bg-red-600 text-white'}`}>
                          <i className="fa-solid fa-trash mr-2"></i>
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Admin Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
              <div className="animate-fadeIn w-full max-w-2xl transform rounded-2xl bg-white p-6 shadow-2xl transition-all md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-blue-600 md:text-3xl">
                  Add New Admin User
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={newAdmin.email}
                        onChange={e =>
                          handleNewAdminChange('email', e.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                        placeholder="admin@abvrcc.com"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showModalPassword ? 'text' : 'password'}
                          value={newAdmin.password}
                          onChange={e =>
                            handleNewAdminChange('password', e.target.value)
                          }
                          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-700 transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                          placeholder="Enter password"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowModalPassword(!showModalPassword)
                          }
                          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 transition-colors hover:text-gray-800">
                          <i
                            className={`fa-solid ${showModalPassword ? 'fa-eye' : 'fa-eye-slash'} text-sm`}></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-gray-700">
                      Permissions
                    </label>

                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => handleNewAdminPermissionToggle('read')}
                        className={`xxxs:px-4 xxxs:py-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all active:scale-95 md:text-base ${
                          newAdmin.permissions.read
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}>
                        <i className="fa-solid fa-eye mr-2"></i>
                        Read
                      </button>
                      <button
                        onClick={() => handleNewAdminPermissionToggle('write')}
                        className={`xxxs:px-4 xxxs:py-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all active:scale-95 md:text-base ${
                          newAdmin.permissions.write
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}>
                        <i className="fa-solid fa-pen mr-2"></i>
                        Write
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
                    <button
                      onClick={handleCancelNewAdmin}
                      className="xxxs:px-6 xxxs:py-3 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 transition-all hover:bg-gray-50 active:scale-95 sm:w-auto">
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveNewAdmin}
                      className="xxxs:px-6 xxxs:py-3 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-700 active:scale-95 sm:w-auto">
                      Save Admin
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
