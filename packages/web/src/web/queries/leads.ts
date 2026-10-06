import { useMutation, useQuery } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export function useCreateLead() {
  return useMutation(orpc.leads.create.mutationOptions());
}

export function useLeads(passcode: string, enabled: boolean) {
  return useQuery(
    orpc.leads.list.queryOptions({
      input: { passcode },
      enabled: enabled && passcode.length > 0,
      retry: false,
      staleTime: 15_000,
    }),
  );
}
