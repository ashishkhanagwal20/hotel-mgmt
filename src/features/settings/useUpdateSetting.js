import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("settings succesfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      //   reset();
    },
    onError: (err) => {
      toast.error(err.message);
      console.log(err);
    },
  });

  return { isUpdating, updateSetting };
}
