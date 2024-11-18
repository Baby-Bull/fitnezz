import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function useQueryParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string | number) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value.toString());

      return params.toString();
    },
    [searchParams]
  );

  const getQueryParam = useCallback(
    (name: string) => {
      const params = searchParams.get(name);
      return params;
    },
    [searchParams]
  );

  const setQueryParam = (queryName: string, value: number | string) => {
    router.push(`${pathname}?${createQueryString(queryName, value)}`);
  };

  return {
    queryParams: searchParams,
    createQueryString,
    getQueryParam,
    setQueryParam,
  };
}
