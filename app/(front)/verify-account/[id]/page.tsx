import { getUserById } from "@/actions/users";
import VerifyTokenForm from "@/components/frontend/VerifyTokenForm";
 
export default async function VerifyAccount({
  params: { id },
}: {
  params: { id: string };
}) {
  //Get a User
  const user = await getUserById(id);
  const userToken = user?.token;
  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Vérification du compte
          </h1>
          <VerifyTokenForm userToken={userToken} id={id} />
        </div>
      </div>
    </div>
  );
}