import {LoadingModal} from '@/appComponents/LoadingModal';
import AdminLoginForm from '@/components/admin/AdminLoginForm';
import React, {useState} from 'react';

export const Login = (): React.JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  console.log(setError);

  return (
    <div className="h-full w-full">
      <AdminLoginForm
        setLoading={setLoading}
        success={success}
        setSuccess={setSuccess}
      />
      {(loading || success || error) && (
        <LoadingModal
          loading={loading}
          success={success}
          error={false}
          errorMessage={''}
        />
      )}
    </div>
  );
};
