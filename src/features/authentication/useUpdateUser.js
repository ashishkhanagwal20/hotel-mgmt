import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User account successuly updated");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // reset();
    },
    onError: (err) => {
      toast.error(err.message);
      console.log(err);
    },
  });
  return { updateUser, isUpdating };
}
