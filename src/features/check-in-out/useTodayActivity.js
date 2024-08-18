import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { data: activities, isLoading } = useQuery({
    queryFn: () => getStaysTodayActivity(),
    queryKey: ["today-activity"],
  });
  console.log("activities", activities);
  return { activities, isLoading };
}
