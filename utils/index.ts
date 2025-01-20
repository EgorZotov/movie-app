/** Safely parses JSON string to object */
export const parseStorageList = <T>(stringOfList?: string) => {
  if (!stringOfList) return [] as T;
  try {
    const parsed = JSON.parse(stringOfList);
    if (typeof parsed === 'object' && parsed !== null) {
      return parsed as T;
    }
    return [] as T;
  } catch (error) {
    return [] as T;
  }
};
