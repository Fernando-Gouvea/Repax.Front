// src/presentation/components/UserHeader.tsx
import { useAuthUser } from "../../application/auth/queries/useAuthUser";
import { Skeleton } from "../../components/ui/Skeleton";

export const UserHeader = () => {
  const { data: user, isLoading } = useAuthUser();

  if (isLoading) return <Skeleton />;
  if (!user) return null;

  return (
    <div className="flex items-center gap-4">
      <img
        src={user.fotoUrl}
        alt={user.nome}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-bold">{user.nome}</p>
        <span className="text-xs">{user.role}</span>
      </div>
    </div>
  );
};
